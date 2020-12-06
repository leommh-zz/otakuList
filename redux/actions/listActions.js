import { GET_LIST } from "../types";
import { fetchApi } from "../../services/api";
import { limit } from "../../config";

export const getList = (page = 1, filter = "popularityRank", search = "") => {
  const skip = limit * page;

  let uri = `/anime?page[limit]=${limit}&page[offset]=${skip}&sort=${filter}`;

  if (search.length > 0) {
    uri += `&filter[text]=${search}`;
  }

  return (dispatch, getState) => {
    fetchApi("GET", uri).then(async (response) => {
      const payload = await response.json();
      return dispatch({ type: GET_LIST, payload });
    });
  };
};
