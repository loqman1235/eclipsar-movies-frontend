import BannerCarousel from "@/components/BannerCarousel";
import Collection from "@/components/Collection";
import { moviesData, topRatedMoviesData } from "@/data";

const MoviesPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <BannerCarousel />
      <Collection name="Now Playing" mediaItems={moviesData} />
      <Collection name="Top Rated" mediaItems={topRatedMoviesData} />
    </div>
  );
};
export default MoviesPage;
