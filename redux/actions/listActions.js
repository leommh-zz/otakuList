import { GET_LIST } from "../types";
import { fetchApi } from "../../services/api";
import { limit } from "../../config";

export const getList = (page = 1) => {
  const skip = limit * page;
  return (dispatch, getState) => {
    fetchApi("GET", `/anime?page[limit]=${limit}&page[offset]=${skip}`).then(async (response) => {
      const payload = await response.json();
      return dispatch({ type: GET_LIST, payload });
    });
  };
};
