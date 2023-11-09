import { useState } from "react";
import logo from "../img/logo_MarketPlace.png";
import SignIn from "./SignIn";
const WelcomePage = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  if (showSignIn) {
    return <SignIn />;
  }

  return (
    <div className="container-welcome">
      <div className="box-img">
        <img src={logo} alt="splash screen logo" />
      </div>
      <div className="wrap-welcome">
        <h2>Welcome to our store</h2>
        <p>Here you can buy everything in one place</p>
        <button onClick={() => setShowSignIn((prevState) => !prevState)}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
