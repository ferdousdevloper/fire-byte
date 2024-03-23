import { Outlet } from "react-router-dom";
import Nav from "../componants/Nav";
import Footer from "../componants/Footer";

const MainLayouts = () => {
  return (
    <div>
      <div>
        <Nav></Nav>
      </div>
      <div className="min-h-[calc(100vh-116px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
