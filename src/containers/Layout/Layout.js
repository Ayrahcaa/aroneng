import { Outlet } from "react-router-dom";
import { Navbar } from "../../components";
function Layout() {
  return (
    <div>
      <div className="gradient__bg">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
}

export default Layout;
