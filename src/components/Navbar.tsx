import { Link } from "react-router-dom";
import Logo from "../assets/LOGO.svg";
import Avatar from "../assets/avatar.svg";

import { MagnifyingGlassIcon, BellIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
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
        "
    >
      {/* Navigation Menu */}
      <ul
        className="
      flex
      items-center
      gap-6
      "
      >
        {/* <li>
          <Link
            to="/"
            className="text-lg hover:text-primary-500 transition font-medium uppercase"
          >
            Home
          </Link>
        </li> */}
        <li>
          <Link
            to="/"
            className="text-lg hover:text-primary-500 transition font-medium uppercase"
          >
            Movies
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="text-lg hover:text-primary-500 transition font-medium uppercase"
          >
            TV Shows
          </Link>
        </li>
      </ul>

      <Link
        to="/"
        className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
      >
        <img src={Logo} alt="Eclipsar logo" />
      </Link>

      {/* Right Navigation */}
      <ul className="flex items-center gap-6">
        <li>
          <button>
            <MagnifyingGlassIcon className="w-6 h-6 stroke-2" />
          </button>
        </li>
        <li className="relative">
          <button>
            <BellIcon className="w-6 h-6 stroke-2" />
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
