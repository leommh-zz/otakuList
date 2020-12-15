import React, { useState } from "react";

import Empty from "../../components/Empty";
import CustomLayout from "../../components/CustomLayout";
import Loader from "../../components/Anime/Loader";
import AnimeContent from "../../components/Anime/Content";
import { fetchApi } from "../../services/api";

const getAnimeData = async (idAndSlug) => {
  const id = idAndSlug.split("-")[0];
  const response = await fetchApi(
    "GET",
    `/anime/${id}?include=categories,episodes,animeStaff`
  );
  const { data, included } = await response.json();

  return { data, included };
};

const AnimePage = ({ data, included }) => {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <CustomLayout>
        <Loader />
      </CustomLayout>
    );
  }

  return (
    <CustomLayout>
      {!!data == false ? (
        <Empty />
      ) : (
        <AnimeContent data={data} included={included} />
      )}
    </CustomLayout>
  );
};

AnimePage.getInitialProps = async (context) => {
  const { id } = context.query;

  const animeData = await getAnimeData(id);

  return animeData;
};

export default AnimePage;
