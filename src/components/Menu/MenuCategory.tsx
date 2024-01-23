import { Link } from "react-router-dom";

type LinkType = {
  path?: string;
  icon: React.ReactNode;
  mobileIcon: React.ReactNode;
  text: string;
};

interface MenuCategoryProps {
  className?: string;
  label: string;
  links: LinkType[];
}

const textStyles =
  "text-secondary hover:text-white transition text-base hidden md:block";

const MenuCategory: React.FC<MenuCategoryProps> = ({
  label,
  links,
  className,
}) => {
  return (
    <div className={className}>
      <span className="text-sm  uppercase mb-3 hidden md:block">{label}</span>
      <ul className="flex flex-col gap-4">
        {links.map(({ text, icon, path, mobileIcon }, index) => (
          <li key={text + "-" + index}>
            {path ? (
              <Link to={path} className="flex items-center gap-2">
                <div>
                  <span className="block md:hidden">{mobileIcon}</span>
                  <span className="hidden md:block">{icon}</span>
                </div>
                <span className={textStyles}>{text}</span>
              </Link>
            ) : (
              <button className="flex items-center gap-2">
                <div>
                  <span className="block md:hidden">{mobileIcon}</span>
                  <span className="hidden md:block">{icon}</span>
                </div>
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
