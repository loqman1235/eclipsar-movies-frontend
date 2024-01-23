import { Link } from "react-router-dom";
import Svg from "../Icons/Svg";

const Brand = () => {
  return (
    <Link
      to="/"
      className="font-bold text-2xl tracking-tight inline-flex gap-2  pl-5 pt-5 h-[80px]"
    >
      <Svg icon="brand" size={28} color="var(--primary-color)" />
      <span className="hidden  md:block">FlixFlow</span>
    </Link>
  );
};

export default Brand;
