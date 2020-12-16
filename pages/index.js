import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
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
  const router = useRouter();
  const [animeList, setAnimeList] = useState(initialStates.animeList);
  const [sort, setSort] = useState(initialStates.sort);
  const [search, setSearch] = useState(initialStates.search);
  const [page, setPage] = useState(initialStates.page);
  const [loading, setLoading] = useState(false);

  const updateList = async () => {
    //Ajuda a não ocorrer novas requests.
    if (loading) return;

    setLoading(true);
    const animeList = await handleGetList(page, sort, search);
    setAnimeList(animeList);
  };

  useEffect(() => {
    if (loading) {
      setLoading(false);
      window.scrollTo(0, 0);
    }
  }, [animeList]);

  const onChangePage = (newPage) => {
    setPage(newPage);
    router.push(`/?page=${newPage}`, undefined, { shallow: true });
    updateList();
  };

  const onChangeSort = (newSort) => {
    setSort(newSort);
    updateList();
  };

  const onSearch = (newSearch) => {
    setSearch(newSearch);
    updateList();
  };

  const renderCards = () => {
    const { list, count } = animeList;
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
      <Head>
        <title>Otaku List</title>
        <meta property="og:title" content="Otaku List" key="title" />
        <meta
          property="og:description"
          content="Somos um site de catálogo de animes"
        />
      </Head>
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

  const animeList = await handleGetList(page, sort, search);

  const initialStates = {
    page,
    sort,
    search,
    animeList,
  };

  return { initialStates };
};

export default Home;
