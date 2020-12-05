import { GET_LIST } from "../types";
import { fetchApi } from "../../services/api";

export const getList = (page = 1) => {
  const limit = 12;
  const skip = limit * page;
  return (dispatch, getState) => {
    fetchApi("GET", `/anime?page[limit]=${limit}&page[offset]=${skip}`).then(async (response) => {
      const payload = await response.json();
      return dispatch({ type: GET_LIST, payload });
    });
  };
};
