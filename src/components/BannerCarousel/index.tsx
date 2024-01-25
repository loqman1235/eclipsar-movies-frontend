import { Swiper, SwiperSlide } from "swiper/react";
import BannerCarouselSlide from "./BannerCarouselSlide";
import { Autoplay, EffectFade } from "swiper/modules";
import { heroCarouselData } from "@/data";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const BannerCarousel = () => {
  return (
    <div className="w-full h-[320px] rounded-2xl overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: true,
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
