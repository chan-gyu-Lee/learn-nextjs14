import { URL } from "../app/(home)/page";

export const getMovies = async () => {
  return await (await fetch(URL)).json();
};
