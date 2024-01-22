import { Link } from "react-router-dom";
import MenuCategory from "./MenuCategory";
import {
  categoryLinks,
  generalLinks,
  libraryLinks,
  menuLinks,
} from "../../data";

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
      <Link
        to="/"
        className="font-bold text-2xl tracking-tight block pl-5 pt-5  h-[80px]"
      >
        Flix<span className="text-primary">Flow</span>
      </Link>

      <div className="flex flex-col gap-10 min-h-[calc(100vh-80px)] p-5 ">
        <MenuCategory label="Menu" links={menuLinks} />
        <MenuCategory label="library" links={libraryLinks} />
        <MenuCategory label="category" links={categoryLinks} />
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
