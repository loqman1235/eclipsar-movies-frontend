import BannerCarousel from "../components/BannerCarousel";
import Collection from "../components/Collection";
import { moviesData, topRatedMoviesData } from "../data";

const MoviesPage = () => {
  return (
    <div>
      <BannerCarousel />
      <Collection name="Now Playing" mediaItems={moviesData} />
      <Collection name="Top Rated" mediaItems={topRatedMoviesData} />
      <Collection name="Top Rated" mediaItems={topRatedMoviesData} />
    </div>
  );
};
export default MoviesPage;
