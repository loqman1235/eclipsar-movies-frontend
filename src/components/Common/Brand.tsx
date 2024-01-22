import { Link } from "react-router-dom";
import BrandIcon from "../Icons/BrandIcon";

const Brand = () => {
  return (
    <Link
      to="/"
      className="font-bold text-2xl tracking-tight inline-flex gap-2  pl-5 pt-5  h-[80px]"
    >
      <BrandIcon />
      <span>FlixFlow</span>
    </Link>
  );
};

export default Brand;
