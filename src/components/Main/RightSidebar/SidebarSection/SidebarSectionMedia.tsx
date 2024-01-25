import { HiStar } from "react-icons/hi";

interface SidebarSectionMediaProps {
  title: string;
  poster: string;
}

const SidebarSectionMedia: React.FC<SidebarSectionMediaProps> = ({
  title,
  poster,
}) => {
  return (
    <div className="w-full flex items-center gap-4">
      {/* Poster */}
      <div className="w-[77px] h-[100px] rounded-lg overflow-hidden bg-white/20">
        <img src={poster} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="font-semibold">{title}</h2>
        <ul>
          <li className="text-secondary text-[15px]">Action, Drama</li>
        </ul>
        <div className="flex items-center gap-1">
          <span className="text-yellow-400 flex items-center justify-center">
            <HiStar size={16} />
          </span>
          <span className="font-semibold text-sm">8.1</span>
        </div>
      </div>
    </div>
  );
};
export default SidebarSectionMedia;
