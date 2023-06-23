import React, { useEffect, useState } from "react";
import axios from "axios";

const Welcome = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Njc1ZTg3MDRmMGY5YjE1MDQ0MjQ2NzRjZDZmNmYwZCIsInN1YiI6IjY0OGM5MDU2MDc2Y2U4MDBjOGJhMDE2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jtzEe2Ypd1FcIPWF2zzyz3tN7OKB2Le2CcQIPXeOf_E",
            },
          }
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchData();
  }, [searchTerm]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?language=en-US&page=1&query=${searchTerm}`,
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Njc1ZTg3MDRmMGY5YjE1MDQ0MjQ2NzRjZDZmNmYwZCIsInN1YiI6IjY0OGM5MDU2MDc2Y2U4MDBjOGJhMDE2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jtzEe2Ypd1FcIPWF2zzyz3tN7OKB2Le2CcQIPXeOf_E",
            },
          }
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    if (searchTerm !== "") {
      fetchData();
    }
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div className="text-center mb-4">
        <input
          type="search"
          name=""
          id=""
          onChange={handleSearch}
          className="form-control"
          style={{ maxWidth: "300px", margin: "0 auto", marginTop: "10px" }}
        />
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
        {movies.map((movie) => (
          <div
            className="col bg-white p-4 rounded shadow hover-zoom"
            key={movie.id}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-100 mb-2 rounded"
            />
            <h3 className="h5 fw-bold">{movie.title}</h3>
            <p className="text-secondary">{movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Welcome;
