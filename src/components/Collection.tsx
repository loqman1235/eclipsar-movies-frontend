import { ICollection } from "../types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CollectionItem from "./CollectionItem";

const Collection: React.FC<ICollection> = ({ name, movies }) => {
  return (
    <div className="w-full mb-8">
      <h3 className="text-2xl font-bold mb-2 tracking-tight pl-10">{name}</h3>

      {/* Movies slider */}
      <Swiper
        spaceBetween={4}
        slidesPerView={4.5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="w-full px-10"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie._id}>
            <CollectionItem {...movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Collection;
