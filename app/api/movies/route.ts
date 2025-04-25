import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const API_KEY = process.env.OMBD_API_URL;
  const movies = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  ).then((res) => res.json());

  return NextResponse.json(movies);
}
