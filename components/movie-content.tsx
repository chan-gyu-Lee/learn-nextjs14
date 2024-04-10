import styles from "../styles/movie-content.module.css";

interface IGenres {
  id: number;
  name: string;
}

interface IProductions {
  id: number;
  logo_path: string;
  name: string;
}

interface IMoiveContentProps {
  title: string;
  overview: string;
  homepage: string;
  vote_average: number;
  genres: IGenres[];
  productions: IProductions[];
}

export default function MovieContent({
  title,
  overview,
  homepage,
  vote_average,
  genres,
  productions,
}: IMoiveContentProps) {
  return (
    <div className={styles.info}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>{title}</h1>
        <div>
          {genres.map((genre) => (
            <div key={genre.id}>
              <span>{genre.name}</span>
            </div>
          ))}
        </div>
      </div>
      <h3>⭐️{vote_average.toFixed(1)}</h3>
      <p>{overview}</p>
      <div className={styles.productionWrapper}>
        {productions.map((production) => (
          <div key={production.id}>
            <img src={production.logo_path} alt={production.name} />
          </div>
        ))}
      </div>
      <a href={homepage} target={"_blank"}>
        Homepage &rarr;
      </a>
    </div>
  );
}
