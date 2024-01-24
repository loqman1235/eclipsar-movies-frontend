import { popularMediaData } from "../../../data";
import SearchBar from "./SearchBar";
import SidebarSection from "./SidebarSection";

const LeftSidebar = () => {
  return (
    <div
      className="w-right-sidebar border-l-2
    border-l-white/5 hidden md:block px-10 py-5"
    >
      <div className="sticky top-5">
        <SearchBar />
        <SidebarSection name="Popular" media={popularMediaData} />
        <SidebarSection name="Watchlist" media={popularMediaData} />
      </div>
    </div>
  );
};
export default LeftSidebar;
