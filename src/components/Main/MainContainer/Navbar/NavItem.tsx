import { NavLink } from "react-router-dom";

interface NavItemProps {
  text: string;
  path: string;
}

const NavItem: React.FC<NavItemProps> = ({ text, path }) => {
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) =>
          `${
            isActive ? "text-white" : "text-secondary"
          } hover:text-white transition`
        }
      >
        {text}
      </NavLink>
    </li>
  );
};

export default NavItem;
