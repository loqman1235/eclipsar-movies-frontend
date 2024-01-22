import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const MainContainer = () => {
  return (
    <div className="w-full md:w-[calc(100%-var(--right-sidebar-width))] px-5 md:px-10 py-5 ">
      <Navbar />
      <Outlet />
    </div>
  );
};
export default MainContainer;
