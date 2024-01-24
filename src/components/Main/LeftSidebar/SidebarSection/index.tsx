import { IMedia } from "@/types";
import Button from "@/components/Common/Button";
import SidebarSectionMedia from "./SidebarSectionMedia";

interface SidebarSectionProps {
  name: string;
  media: IMedia[];
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ name, media }) => {
  return (
    <div className="w-full mb-10">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold tracking-tight">{name}</h2>
      </div>
      <div className="flex flex-col gap-2 mb-2">
        {media.map((item) => (
          <SidebarSectionMedia key={item._id} {...item} />
        ))}
      </div>
      <Button text="See More" variant="primary" />
    </div>
  );
};
export default SidebarSection;
