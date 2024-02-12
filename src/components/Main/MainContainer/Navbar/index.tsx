import { navLinks } from "@/data";
import Svg from "@/Icons/Svg";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between mb-5 ">
      <ul className="flex items-center gap-6">
        {navLinks.map(({ text, path }, index) => (
          <NavItem key={index + "-" + text} path={path} text={text} />
        ))}
      </ul>

      <ul className="flex items-center gap-6">
        <button className="relative">
          <Svg icon="bell" />
          <span className="absolute -right-[2px] -top-[2px] w-3 h-3 border-2 border-background rounded-full bg-primary"></span>
        </button>

        <div className="w-10 h-10 rounded-full bg-white/50 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </ul>
    </div>
  );
};
export default Navbar;
