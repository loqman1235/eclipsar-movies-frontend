import { IMedia } from "@/types";
import Button from "@/components/Common/Button";
import SidebarSectionMedia from "./SidebarSectionMedia";
import { HiDotsHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";

interface SidebarSectionProps {
  name: string;
  media: IMedia[];
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ name, media }) => {
  return (
    <div className="w-full mb-10">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold tracking-tight">{name}</h2>
        <button className="text-secondary hover:text-white transition">
          <HiDotsHorizontal size={20} />
        </button>
      </div>
      <div className="flex flex-col gap-2 mb-2">
        {media.map((item) => (
          <Link to={`/media/${item._id}`}>
            <SidebarSectionMedia key={item._id} {...item} />
          </Link>
        ))}
      </div>
      <Button variant="primary" size="md" className="w-full">
        See More
      </Button>
    </div>
  );
};
export default SidebarSection;
