import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";

const Layout = () => {
  return (
    <div>
      <Outlet /> {/* This will render the child routes */}
      <Footer />
    </div>
  );
};

export default Layout;
