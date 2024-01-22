import LeftSidebar from "./LeftSidebar";
import MainContainer from "./MainContainer";

const Main = () => {
  return (
    <div className="w-[calc(100%-var(--menu-width-mobile))] md:w-[calc(100%-var(--menu-width))] absolute right-0 top-0 min-h-screen flex">
      <MainContainer />
      <LeftSidebar />
    </div>
  );
};
export default Main;
