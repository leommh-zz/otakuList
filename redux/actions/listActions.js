import { GET_LIST } from "../types";
import { fetchApi } from "../../services/api";
import { limit } from "../../config";

/**
 * @todo tive que definir entre search/sort pois a api não estava suportando os dois na mesma request!
 */

export const getList = (page = 1, sort = "popularityRank", search = "") => {
  const skip = (page <= 1) ? 0 : (limit * page - 1);

  let uri = `/anime?page[limit]=${limit}&page[offset]=${skip}`;

  if (search.length > 0) {
    uri += `&filter[text]=${search}`;
  } else {
    uri += `&sort=${sort}`;
  }

  return (dispatch, getState) => {
    fetchApi("GET", uri).then(async (response) => {
      const payload = await response.json();
      return dispatch({ type: GET_LIST, payload });
    });
  };
};
