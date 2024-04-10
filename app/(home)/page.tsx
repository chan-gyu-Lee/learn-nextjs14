import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import { getMovies } from "../../api/movie";

export const metadata = {
  title: "HOME",
};

export const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          title={movie.title}
          poster_path={movie.poster_path}
          id={movie.id}
          key={movie.id}
        />
      ))}
    </div>
  );
}
