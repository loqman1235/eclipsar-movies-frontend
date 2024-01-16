import { ICollection } from "../types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CollectionItem from "./CollectionItem";
// import { MdOutlineChevronRight } from "react-icons/md";

const Collection: React.FC<ICollection> = ({ name, movies }) => {
  return (
    <div className="w-full mb-8">
      <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-tight pl-10">
        {name}
      </h3>

      {/* Movies slider */}
      <Swiper
        spaceBetween={4}
        slidesPerView={4.5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="w-full px-10 relative"
        breakpoints={{
          0: {
            slidesPerView: 1.5,
          },
          640: {
            slidesPerView: 2.5,
          },
          768: {
            slidesPerView: 3.5,
          },
          1024: {
            slidesPerView: 4.5,
          },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie._id}>
            <CollectionItem {...movie} />
          </SwiperSlide>
        ))}

        {/* Slider controls */}
        <div className="absolute top-1/2 -translate-y-1/2 right-0 z-20 w-[20%] bg-gradient-to-l from-background-500 to-transparent h-full flex justify-end items-center">
          <button className=" mr-10 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path strokeLinecap="square" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </Swiper>
    </div>
  );
};
export default Collection;
