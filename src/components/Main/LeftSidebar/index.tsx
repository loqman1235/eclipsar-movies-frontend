import SearchBar from "./SearchBar";

const LeftSidebar = () => {
  return (
    <div
      className="w-right-sidebar h-screen border-l-2
    border-l-white/5 sticky top-0 hidden md:block px-10 py-5"
    >
      <SearchBar />
    </div>
  );
};
export default LeftSidebar;
