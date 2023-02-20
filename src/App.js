import { useState } from "react";
import AddMovie from "./components/AddMovie";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";
import Home from "./components/Home";
import MovieDescription from "./components/MovieDescription";
import { Route, Routes, Navigate } from "react-router-dom";
import { moviesData } from "./components/data";

function App() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(1);
  const addMovie = (newMovie) => {
    console.log(newMovie);
    moviesData.push(newMovie);
  };

  return (
    <div className="container">
      <div className="row">
        <Routes>
          <Route path="/" element={<Navigate to="/movie" />} />
          <Route
            path="/movie"
            element={
              <Home
                title={title}
                setTitle={setTitle}
                rating={rating}
                setRating={setRating}
                addMovie={addMovie}
                moviesData={moviesData}
              />
            }
          />
          <Route
            path="/movie/:id"
            element={<MovieDescription movies={moviesData} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
