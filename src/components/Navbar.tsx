import { Link } from "react-router-dom";
import Logo from "../assets/LOGO.svg";
import Avatar from "../assets/avatar.svg";
import { MdOutlineSearch, MdOutlineNotifications } from "react-icons/md";

const Navbar = () => {
  const navLinkStyles =
    "text-base hover:text-primary-500 transition font-semibold uppercase";

  return (
    <div
      className="
        w-full
        h-16
        flex 
        items-center
        justify-between
        px-10
        fixed
        top-0
        z-10
        bg-gradient-to-b
        from-background-500
        via-background-500/80
        to-transparent
        "
    >
      <div className="flex items-center gap-12">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="Eclipsar logo" />
        </Link>

        {/* Navigation Menu */}
        <ul
          className="
      flex
      items-center
      gap-6
      "
        >
          <li>
            <Link to="/" className={navLinkStyles}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className={navLinkStyles}>
              Movies
            </Link>
          </li>
          <li>
            <Link to="/" className={navLinkStyles}>
              TV Shows
            </Link>
          </li>
        </ul>
      </div>
      {/* Right Navigation */}
      <ul className="flex items-center gap-6">
        <li>
          <button>
            <MdOutlineSearch size={24} />
          </button>
        </li>
        <li className="relative">
          <button>
            <MdOutlineNotifications size={24} />
          </button>
          <span className="absolute right-0 top-0 w-3 h-3 bg-primary-500 rounded-full border-2 border-background-500"></span>
        </li>
        <li>
          <div className="w-9 h-9 rounded-full overflow-hidden bg-white/20">
            <img
              src={Avatar}
              alt="avatar"
              className="w-full h-full bg-contain"
            />
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
