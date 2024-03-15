const API_DOMAIN = "https://gnews.io/api/v4/top-headlines?country=";
const API_SEARCH_DOMAIN = "https://gnews.io/api/v4/search?q=";
const API_KEY = "71486354c64c58532498809eebb7b17a";
export const endpointPath = (country, category) =>
  `${API_DOMAIN}${country}&category=${category}&apikey=${API_KEY}`;
export const endpointSearch = (searchQuery) =>
  `${API_SEARCH_DOMAIN}${searchQuery}&apikey=${API_KEY}`;
