import { URL } from "../app/(home)/page";

export const getVideos = async (id: string) => {
  console.log({ id });

  return await (await fetch(`${URL}/${id}/videos`)).json();
};
