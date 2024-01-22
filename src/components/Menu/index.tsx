import MenuCategory from "./MenuCategory";
import {
  categoryLinks,
  generalLinks,
  libraryLinks,
  menuLinks,
} from "../../data";
import Brand from "../common/Brand";

const Menu = () => {
  return (
    <div
      className="
        w-menu
        h-screen
        overflow-y-auto
        fixed
        top-0
        left-0
        border-r-2
    border-r-white/5 
      

    "
    >
      {/* Brand */}
      <Brand />

      <div className="flex flex-col gap-8 min-h-[calc(100vh-80px)] p-5 ">
        <MenuCategory
          label="Menu"
          links={menuLinks}
          className="border-b border-b-white/5 pb-10"
        />
        <MenuCategory
          label="library"
          links={libraryLinks}
          className="border-b border-b-white/5 pb-10"
        />
        <MenuCategory
          label="category"
          links={categoryLinks}
          className="border-b border-b-white/5 pb-10"
        />
        <MenuCategory
          label="general"
          links={generalLinks}
          className="mt-auto"
        />
      </div>
    </div>
  );
};
export default Menu;
