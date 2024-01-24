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
            src="https://scontent.fczl2-1.fna.fbcdn.net/v/t39.30808-6/416679416_1989885911397086_7112518757134319075_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=sTuSiP6Qt5UAX9wKMKV&_nc_ht=scontent.fczl2-1.fna&oh=00_AfAOzZbRBR0Zfa5wil9gpT22uLVkSWRmGpSxkO7OfN4wlQ&oe=65B56113"
            alt="avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </ul>
    </div>
  );
};
export default Navbar;
