export function fetchApi(method = "GET", url, data) {
  const headers = {
    Accept: "application/vnd.api+json",
    "Content-Type": "application/vnd.api+json",
  };

  const requestBody = {
    method,
    headers,
  };

  const requestUrl = `https://kitsu.io/api/edge/${url}`;

  if (!!data) {
    requestBody.body = JSON.stringify(data);
  }

  return fetch(requestUrl, requestBody);
}
