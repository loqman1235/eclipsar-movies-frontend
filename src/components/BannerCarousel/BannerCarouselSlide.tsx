import { MdPlayArrow, MdAdd } from "react-icons/md";

interface BannerCarouselSlideProps {
  backdrop: string;
  title: string;
  genres: string[];
}

const BannerCarouselSlide: React.FC<BannerCarouselSlideProps> = ({
  backdrop,
  title,
  genres,
}) => {
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
        bottom-10 
        left-10
        w-[70%]
      "
      >
        <h1 className="text-3xl font-semibold uppercase tracking-tight mb-1">
          {title}
        </h1>

        {/* genres */}
        <ul className="flex items-center gap-2 mb-2">
          {genres.map((genre, index) =>
            index !== genres.length - 1 ? (
              <li
                key={genre + "-" + index}
                className="text-secondary capitalize text-base flex items-center gap-2"
              >
                {genre} <span>&#8226;</span>
              </li>
            ) : (
              <li
                key={genre + "-" + index}
                className="text-secondary capitalize text-base"
              >
                {genre}
              </li>
            )
          )}
        </ul>

        {/* CTAs */}
        <div className="flex items-center gap-2">
          <button className="px-6 py-3 flex items-center justify-center gap-1 bg-primary hover:bg-primary-hover transition rounded-2xl font-medium">
            <MdPlayArrow size={24} /> Play Now
          </button>
          <button className="px-6 py-3 flex items-center justify-center bg-white/10 hover:bg-white/20 transition rounded-2xl font-medium backdrop-blur-sm">
            <MdAdd size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default BannerCarouselSlide;
