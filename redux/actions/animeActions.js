import { GET_ANIME } from "../types";
import { fetchApi } from "../../services/api";

export const getAnimeData = (id) => {
  return (dispatch, getState) => {
    fetchApi("GET", `/anime/${id}?include=categories,episodes,animeStaff`).then(async (response) => {
      const payload = await response.json();
      return dispatch({ type: GET_ANIME, payload });
    });
  };
};
