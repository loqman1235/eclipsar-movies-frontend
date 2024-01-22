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
        fixed
        top-0
        left-0
        border-r-2
    border-r-white/5 
        p-5
    "
    >
      {/* Brand */}
      <Link to="/" className="font-bold text-2xl tracking-tight mb-10 block">
        Flix<span className="text-primary">Flow</span>
      </Link>

      <MenuCategory label="Menu" links={menuLinks} />
      <MenuCategory label="library" links={libraryLinks} />
      <MenuCategory label="category" links={categoryLinks} />
      <MenuCategory label="general" links={generalLinks} />
    </div>
  );
};
export default Menu;
