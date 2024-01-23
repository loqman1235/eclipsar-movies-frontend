import { Link, useLocation } from "react-router-dom";

type LinkType = {
  path?: string;
  icon: React.ReactNode;
  mobileIcon: React.ReactNode;
  activeIcon: React.ReactNode;
  mobileActiveIcon: React.ReactNode;
  text: string;
};

interface MenuCategoryProps {
  className?: string;
  label: string;
  links: LinkType[];
}

const textStyles =
  "text-secondary hover:text-primary transition text-base hidden md:block";

const MenuCategory: React.FC<MenuCategoryProps> = ({
  label,
  links,
  className,
}) => {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath, "currentPath");
  return (
    <div className={className}>
      <span className="text-sm  uppercase mb-3 hidden md:block">{label}</span>
      <ul className="flex flex-col gap-4">
        {links.map(
          (
            { text, icon, path, mobileIcon, activeIcon, mobileActiveIcon },
            index
          ) => (
            <li key={text + "-" + index}>
              {path ? (
                <Link to={path} className="flex items-center gap-2">
                  <div>
                    <span className="block md:hidden">
                      {currentPath === path ? mobileActiveIcon : mobileIcon}
                    </span>
                    <span className="hidden md:block">
                      {currentPath === path ? activeIcon : icon}
                    </span>
                  </div>
                  <span
                    className={`${textStyles} ${
                      currentPath === path && "text-primary"
                    }`}
                  >
                    {text}
                  </span>
                </Link>
              ) : (
                <button className="flex items-center gap-2">
                  <div>
                    <span className="block md:hidden">
                      {currentPath === path ? mobileActiveIcon : mobileIcon}
                    </span>
                    <span className="hidden md:block">{icon}</span>
                  </div>
                  <span
                    className={`${textStyles} ${
                      currentPath === path && "text-primary"
                    }`}
                  >
                    {text}
                  </span>
                </button>
              )}
            </li>
          )
        )}
      </ul>
    </div>
  );
};
export default MenuCategory;
