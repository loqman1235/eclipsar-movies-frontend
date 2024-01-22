import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import ShowsPage from "./pages/ShowsPage";
import AnimePage from "./pages/AnimePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route index element={<MoviesPage />} />
        <Route path="/" element={<MoviesPage />} />
        <Route path="/tvshows" element={<ShowsPage />} />
        <Route path="/anime" element={<AnimePage />} />
      </Route>
    </Routes>
  );
};
export default App;
