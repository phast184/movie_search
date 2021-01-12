import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";

const SingleMovie = () => {
  const { id } = useParams();
  const {isLoading, error, data: movie} = useFetch(`&i=${id}`)

  return (
    <>
      {isLoading && <div className="loading"></div>}
      {error.show ? (
        <div className="page-error">
          <h1>{error.msg}</h1>
          <Link to="/" className="btn">
            back to movies
          </Link>
        </div>
      ) : (
        <section className="single-movie">
          <img src={movie.Poster} alt={movie.Title} />
          <div className="single-movie-info">
            <h2>{movie.Title}</h2>
            <p>{movie.Plot}</p>
            <h4>{movie.Year}</h4>
            <Link className="btn" to="/">
              back to movies
            </Link>
          </div>
        </section>
      )}
    </>
  );
};

export default SingleMovie;
