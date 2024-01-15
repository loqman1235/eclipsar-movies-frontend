import { heroCarouselData } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import HeroCarouselSlide from "./HeroCarouselSlide";

const HeroCarousel = () => {
  return (
    <div
      className="
        w-full
        h-screen
        overflow-hidden
        "
    >
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="w-full"
      >
        {heroCarouselData.map((movie) => (
          <SwiperSlide key={movie._id}>
            <HeroCarouselSlide {...movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default HeroCarousel;
