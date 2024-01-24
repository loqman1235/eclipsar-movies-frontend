import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import BannerCarouselSlide from "./BannerCarouselSlide";
import { heroCarouselData } from "@/data";

const BannerCarousel = () => {
  return (
    <div className="w-full h-[320px] rounded-2xl overflow-hidden">
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 500,
        }}
        className="w-full h-full"
      >
        {heroCarouselData.map((item) => (
          <SwiperSlide key={item._id}>
            <BannerCarouselSlide {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default BannerCarousel;
