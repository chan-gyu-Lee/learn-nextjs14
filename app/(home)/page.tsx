export const metadata = {
  title: "HOME",
};

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

const getMovies = async () => {
  return await (await fetch(URL)).json();
};

export default async function HomePage() {
  const movies = await getMovies();
  return <div>{JSON.stringify(movies)}</div>;
}
