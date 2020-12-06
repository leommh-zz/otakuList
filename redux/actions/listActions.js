import { GET_LIST } from "../types";
import { fetchApi } from "../../services/api";
import { limit } from "../../config";

export const getList = (page = 1, sort = "popularityRank", search = "") => {
  const skip = (page <= 1) ? 0 : (limit * page - 1);

  let uri = `/anime?page[limit]=${limit}&page[offset]=${skip}`;

  if (search.length > 0) {
    uri += `&filter[text]=${search}`;
  }

  if (sort.length > 0) {
    // uri += `&sort=${sort}`;
  }

  return (dispatch, getState) => {
    fetchApi("GET", uri).then(async (response) => {
      const payload = await response.json();
      return dispatch({ type: GET_LIST, payload });
    });
  };
};
