import { IMedia } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import CollectionItem from "./CollectionItem";

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

      <Swiper slidesPerView={4} spaceBetween={10}>
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
