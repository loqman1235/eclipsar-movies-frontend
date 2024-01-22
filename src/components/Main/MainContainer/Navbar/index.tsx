import { navLinks } from "../../../../data";
import BellIcon from "../../../Icons/BellIcon";
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
          <BellIcon />
          <span className="absolute -right-[2px] -top-[2px] w-3 h-3 border-2 border-background rounded-full bg-primary"></span>
        </button>

        <div className="w-10 h-10 rounded-full bg-white/50 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </ul>
    </div>
  );
};
export default Navbar;
