import { Suspense } from "react";

import MovieVideo from "../../../../components/movie-videos";
import { getMovieDetail } from "../../../../api/movie-info";
import MovieInfo from "../../../../components/movie-info";

interface Iparams {
  id: string;
}

interface Iprops {
  params: Iparams;
}
export const generateMetadata = async ({ params: { id } }: Iprops) => {
  const movie = await getMovieDetail(id);
  return {
    title: movie.title,
  };
};

export default async function MovieDetail({
  params: { id },
}: Readonly<Iprops>) {
  return (
    <div>
      <Suspense fallback={<h1>Now Loading Moive Info</h1>}>
        <MovieInfo id={id} />
      </Suspense>

      <Suspense fallback={<h1>Now Loading Moive Videos</h1>}>
        <MovieVideo id={id} />
      </Suspense>
    </div>
  );
}
