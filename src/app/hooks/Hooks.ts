import useSWR from "swr";

function fetcher(url: string) {
  return window.fetch(url).then((res) => res.json());
}

export function getGifs(search: string) {
  const { data, error } = useSWR(
    `https://api.giphy.com/v1/gifs/search?api_key=pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa&q=${search}&limit=&offset=`,
    fetcher
  );

  return {
    gifs: data,
    isLoadingGifs: !error && !data,
    isError: error,
  };
}