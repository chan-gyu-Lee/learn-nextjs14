import { URL } from "../app/(home)/page";

export const getMovieDetail = async (id: string) => {
  return await (await fetch(`${URL}/${id}`)).json();
};
