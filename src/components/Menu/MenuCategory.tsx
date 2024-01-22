import { Link } from "react-router-dom";

type LinkType = {
  path?: string;
  icon: React.ReactNode;
  text: string;
};

interface MenuCategoryProps {
  className?: string;
  label: string;
  links: LinkType[];
}

const textStyles = "text-secondary hover:text-white transition text-base";

const MenuCategory: React.FC<MenuCategoryProps> = ({
  label,
  links,
  className,
}) => {
  return (
    <div className={className}>
      <span className="text-sm uppercase tracking-widest mb-3 block">
        {label}
      </span>
      <ul className="flex flex-col gap-2">
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
