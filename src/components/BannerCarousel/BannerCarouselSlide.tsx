import { IMedia } from "@/types";
import { MdAdd } from "react-icons/md";

const BannerCarouselSlide: React.FC<IMedia> = ({ backdrop, title, genres }) => {
  return (
    <div className="w-full h-full relative">
      {/* Carousel slide backdrop */}
      <div
        className="
      w-full 
      h-full 
      after:absolute 
      after:inset-0 
      after:w-full 
      after:h-full
      after:bg-gradient-to-t
      after:from-black
      after:via-black/90
      after:to-black/40
      
      "
      >
        <img
          src={backdrop}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details */}
      <div
        className="
        absolute 
        bottom-5 
        left-5
        w-[70%]
      "
      >
        <h1 className="text-xl font-semibold capitalize tracking-tight mb-1">
          {title}
        </h1>

        {/* genres */}
        <ul className="flex items-center mb-2">
          {genres.map((genre, index) =>
            index !== genres.length - 1 ? (
              <li
                key={genre + "-" + index}
                className="text-secondary capitalize text-[15px] flex items-center"
              >
                {genre} <p className="pr-1">,</p>
              </li>
            ) : (
              <li
                key={genre + "-" + index}
                className="text-secondary capitalize text-[15px]"
              >
                {genre}
              </li>
            )
          )}
        </ul>

        {/* CTAs */}
        <div className="flex items-center gap-2">
          <button className="px-6 py-3 flex items-center justify-center gap-1 bg-primary hover:bg-primary-hover transition rounded-2xl font-medium">
            Watch Now
          </button>
          <button className="px-4 py-3 flex items-center justify-center bg-white/10 hover:bg-white/20 transition rounded-2xl font-medium backdrop-blur-sm">
            <MdAdd size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default BannerCarouselSlide;
