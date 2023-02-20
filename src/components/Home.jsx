// import React from "react";
// import { Link, Routes, Route } from "react-router-dom";
// import MovieList from "./components/MovieList";
// import Filter from "./components/Filter";
// import MovieDescription from "./MovieDescription";

// function Home({
//   setMovies,
//   ratingMovies,
//   moviesRating,
//   handleChange,
//   movies,
//   search,
//   addMovie,
// }) {
//   return (
//     <div>
//       <Filter
//         movies={setMovies}
//         ratingMovies={ratingMovies}
//         rating={moviesRating}
//         handleChange={handleChange}
//       />
//       <Routes>
//         <Route exact path="/">
//           <MovieList
//             allMovies={movies.filter(
//               (el) =>
//                 el.rating >= moviesRating &&
//                 el.title.toLowerCase().includes(search.toLowerCase().trim())
//             )}
//           />
//         </Route>
//         <Route path="/movie/:id">
//           <MovieDescription movies={movies} />
//         </Route>
//       </Routes>
//       <addMovie addMovie={addMovie} />
//     </div>
//   );
// }
// export default Home;
