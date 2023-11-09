import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import BottomNav from "../Components/Shared/BottomNav";
import Header from "../Components/Shared/Header";
import DesktopHeader from "../Components/Shared/DesktopHeader";
import DesktopBottomNav from "../Components/Shared/DesktopFooter";

const SharedLayout = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 600;

  return (
    <div>
      {isMobile ? <Header /> : <DesktopHeader />}
      <Outlet />
      {isMobile ? <BottomNav /> : <DesktopBottomNav />}
    </div>
  );
};

export default SharedLayout;
