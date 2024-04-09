interface Iparams {
  id: string;
}

interface Iprops {
  params: Iparams;
}

export default function MovieDetail({ params: { id } }: Readonly<Iprops>) {
  console.log(id);

  return <h1>Movie {id}</h1>;
}
