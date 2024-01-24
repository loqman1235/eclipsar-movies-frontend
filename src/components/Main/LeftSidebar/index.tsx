import { popularMediaData } from "../../../data";
import SearchBar from "./SearchBar";
import SidebarSection from "./SidebarSection";

const LeftSidebar = () => {
  return (
    <div
      className="w-right-sidebar h-screen border-l-2
    border-l-white/5 sticky top-0 hidden md:block px-10 py-5"
    >
      <SearchBar />
      <SidebarSection name="Popular" media={popularMediaData} />
    </div>
  );
};
export default LeftSidebar;
