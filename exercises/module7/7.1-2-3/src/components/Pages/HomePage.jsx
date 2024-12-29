import { useOutletContext } from "react-router-dom";
import MovieTitleList from "../MovieTitleList/MovieTitleList";

const HomePage = () => {
  const { movies } = useOutletContext();
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to my favorite movies website!</p>
      <h3>My favourite movies</h3>
      <MovieTitleList movies={movies} />
    </div>
  );
};

export default HomePage;
