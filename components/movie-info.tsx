import { getMovieDetail } from "../api/movie-info";

import styles from "../styles/movie-info.module.css";
import MovieContent from "./movie-content";

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovieDetail(id);
  console.log(movie.production_companies);

  return (
    <div className={styles.container}>
      <img
        className={styles.poster}
        src={movie.poster_path}
        alt={movie.title}
      />
      <MovieContent
        homepage={movie.homepage}
        title={movie.title}
        overview={movie.overview}
        vote_average={movie.vote_average}
        genres={movie.genres}
        productions={movie.production_companies}
      />
    </div>
  );
}
