"use client";

import Link from "next/link";
import stlyes from "../styles/movie.module.css";
import { useRouter } from "next/navigation";

interface IMovieProps {
  id: string;
  poster_path: string;
  title: string;
}

export default function Movie({ id, poster_path, title }: IMovieProps) {
  const router = useRouter();
  const onclick = () => {
    router.push(`/movie/${id}`);
  };
  return (
    <div className={stlyes.movie}>
      <img src={poster_path} alt={title} onClick={onclick} />
      <Link href={`/movie/${id}`}>{title}</Link>
    </div>
  );
}
