import { Link } from "react-router-dom";

type LinkType = {
  path?: string;
  icon: React.ReactNode;
  text: string;
};

interface MenuCategoryProps {
  label: string;
  links: LinkType[];
}

const textStyles = "text-secondary hover:text-white transition text-lg";

const MenuCategory: React.FC<MenuCategoryProps> = ({ label, links }) => {
  return (
    <div>
      <span className="text-sm uppercase">{label}</span>
      <ul>
        {links.map(({ text, icon, path }, index) => (
          <li key={text + "-" + index}>
            {path ? (
              <Link to={path} className="flex items-center gap-2">
                <span>{icon}</span>
                <span className={textStyles}>{text}</span>
              </Link>
            ) : (
              <button className="flex items-center gap-2">
                <span>{icon}</span>
                <span className={textStyles}>{text}</span>
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MenuCategory;
