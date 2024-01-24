import Svg from "../../../Icons/Svg";

const SearchBar = () => {
  return (
    <div className="w-full mb-10">
      <form className="w-full h-[52px] relative">
        <input
          type="text"
          placeholder="Search"
          className="w-full h-full border border-white/30 rounded-xl bg-transparent outline-none pl-12"
        />
        <button className="absolute left-4 top-1/2 -translate-y-[40%]">
          <Svg icon="search" size={24} />
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-[40%]">
          <Svg
            icon="search-settings"
            size={24}
            color="var(--secondary-color)"
          />
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
