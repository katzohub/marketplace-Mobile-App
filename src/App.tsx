import { useState, useEffect } from "react";
import SplashScreen from "./Components/SplashScreen";
import WelcomePage from "./Components/WelcomePage";
import HomeScreen from "./Components/HomeScreen";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Toto je potrebné pre správnu funkčnosť v prehliadači
    let timer: ReturnType<typeof setTimeout> | null = null;

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    if (windowWidth < 600) {
      timer = setTimeout(() => {
        setShowSplash(false);
      }, 3000);
    } else {
      setShowSplash(false);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [windowWidth]);

  if (showSplash) return <SplashScreen />;
  if (windowWidth < 600) return <WelcomePage />;
  return <HomeScreen />;
};

export default App;
