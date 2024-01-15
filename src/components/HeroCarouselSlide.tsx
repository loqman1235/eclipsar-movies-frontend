import { MdPlayArrow, MdVideocam } from "react-icons/md";
import { HeroCarouselSlideProps } from "../types";

const HeroCarouselSlide: React.FC<HeroCarouselSlideProps> = ({
  title,
  overview,
  backdrop,
  releaseDate,
  runtime,
  genres,
}) => {
  return (
    <div className="w-full h-screen relative">
      <div
        className="
        w-full
        h-full
        overflow-hidden 
        relative 
        before:absolute 
        before:inset-0
        before:bg-gradient-to-r
        before:from-background-500
        before:via-background-500/95
        before:to-background-500/60
    "
      >
        <img
          src={backdrop}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-3/4 md:w-1/2">
        <h1 className="text-3xl md:text-4xl uppercase font-bold  drop-shadow leading-[40px] mb-1 md:mb-2">
          {title}
        </h1>
        <div className="flex items-center gap-3 mb-1 md:mb-2 w-full font-semibold">
          <p>{releaseDate}</p>
          <span className="w-1 h-1 bg-white rounded-full"></span>
          <p className="flex items-center gap-1">
            {genres.length > 0 &&
              genres.map((genre, i) => (
                <span
                  key={i}
                  className={i < genres.length - 1 ? 'after:content-[","]' : ""}
                >
                  {genre}
                </span>
              ))}
          </p>
          <span className="w-1 h-1 bg-white rounded-full"></span>
          <li>{runtime}</li>
        </div>
        <p className="w-full font-light mb-2 md:mb-4">{overview}</p>
        <div className="flex items-center gap-2">
          <button
            className="
          py-3 
          px-6 
          bg-gradient-to-tr
          from-primary-500 
          to-emerald-300 
          text-background-500 
          rounded-full
          font-semibold 
          text-lg
          flex 
          items-center 
          gap-1
          justify-center
          shadow-md
          uppercase
          tracking-tight
          "
          >
            <MdPlayArrow size={24} /> Play Now
          </button>
          <button
            className="
          py-3 
          px-6
          bg-white/10
          hover:bg-white/15
          transition 
          rounded-full
          font-semibold 
          text-lg
          flex 
          items-center 
          gap-1
          justify-center
          shadow-md
          uppercase
          tracking-tight
          "
          >
            <MdVideocam size={24} /> Trailer
          </button>
        </div>
      </div>
    </div>
  );
};
export default HeroCarouselSlide;
