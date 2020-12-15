import React, { useState, useEffect } from "react";
import { Pagination, Row } from "antd";

import CustomLayout from "../components/CustomLayout";
import Card from "../components/Card";
import CardsLoader from "../components/CardsLoader";
import Filters from "../components/Filters";

import { fetchApi } from "../services/api";
import { limit } from "../services/config";

const handleGetList = async (page, sort, search) => {
  const skip = page <= 1 ? 0 : limit * page - 1;

  let uri = `/anime?page[limit]=${limit}&page[offset]=${skip}`;

  if (search.length > 0) {
    uri += `&filter[text]=${search}`;
  } else {
    uri += `&sort=${sort}`;
  }

  const response = await fetchApi("GET", uri);
  const {
    data,
    meta: { count },
  } = await response.json();
  return { list: data, count };
};

const Home = ({ initialStates }) => {
  const [list, setList] = useState(initialStates.list);
  const [sort, setSort] = useState(initialStates.sort);
  const [search, setSearch] = useState(initialStates.search);
  const [page, setPage] = useState(initialStates.page);
  const [count, setCount] = useState(initialStates.count);
  const [loading, setLoading] = useState(false);

  const updateList = async () => {
    //Impede uma nova requisição se a tela estiver em loading;
    if (loading) return;

    setLoading(true);
    const response = await handleGetList(page, sort, search);
    setList(response.list);
    setCount(response.count);
    setLoading(false);
  };

  useEffect(() => {
    updateList();
  }, [page, sort, search]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [list]);

  const onChangePage = (page) => {
    setPage(page);
  };

  const onChangeSort = (sort) => {
    setSort(sort);
  };

  const onSearch = (search) => {
    setSearch(search);
  };

  const renderCards = () => {
    const total = count / limit;

    return (
      <>
        <Row gutter={[24, 24]} wrap={true}>
          {!!list &&
            list.map((card) => {
              return <Card key={card.id} {...card} />;
            })}
        </Row>
        <Pagination
          showSizeChanger={false}
          onChange={onChangePage}
          defaultCurrent={page}
          total={total}
        />
      </>
    );
  };

  return (
    <CustomLayout>
      <Filters
        defaultSort={sort}
        onChangeSort={onChangeSort}
        onSearch={onSearch}
      />
      {loading ? <CardsLoader /> : renderCards()}
    </CustomLayout>
  );
};

Home.getInitialProps = async (context) => {
  let { page, sort, search } = context.query;

  page = Number(page) > 0 ? page : 1;
  sort = sort || "popularityRank";
  search = search || "";

  const { list, count } = await handleGetList(page, sort, search);

  const initialStates = {
    page,
    sort,
    search,
    list,
    count,
  };

  return { initialStates };
};

export default Home;
