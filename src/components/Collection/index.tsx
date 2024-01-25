import { IMedia } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import CollectionItem from "./CollectionItem";
import "swiper/css";
import "swiper/css/autoplay";

interface CollectionProps {
  name: string;
  mediaItems: IMedia[];
}

const Collection: React.FC<CollectionProps> = ({ name, mediaItems }) => {
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-between mb-2">
        <h2 className="text-xl font-semibold tracking-tight">{name}</h2>
      </div>

      <Swiper
        modules={[Autoplay]}
        slidesPerView={4}
        loop
        speed={500}
        spaceBetween={10}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 1.5,
          },

          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {mediaItems.map((item, index) => (
          <SwiperSlide key={item + "-" + index}>
            <CollectionItem {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Collection;
