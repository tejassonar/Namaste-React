export const getCorsProxyUrl = (url) => {
  const encodedURL = encodeURIComponent(url);
  return `https://swiggy-api.tejassonar2207.workers.dev/?apiUrl=${encodedURL}`;
};
