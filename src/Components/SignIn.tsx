import logo from "../img/logo_MarketPlace.png";
import {
  AiFillApple,
  AiOutlineGoogle,
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { useState } from "react";
import LogIn from "./LogIn";
import HomeScreen from "./HomeScreen";

const SignIn = () => {
  const [showLogIn, setShowLogIn] = useState(false);
  const [showHomeScreen, setShowHomeScreen] = useState(false);

  if (showLogIn) {
    return <LogIn />;
  }
  if (showHomeScreen) {
    return <HomeScreen />;
  }
  const toggleLogInView = () => {
    setShowLogIn((prevState) => !prevState);
  };
  const toggleHomeScreenView = () => {
    setShowHomeScreen((prevState) => !prevState);
  };

  return (
    <div className="signin-container">
      <div className="go-back" onClick={() => window.history.back()}>
        <AiOutlineArrowLeft />
      </div>
      <div className="go-right" onClick={toggleHomeScreenView}>
        <AiOutlineArrowRight />
      </div>

      <div className="box-img">
        <img src={logo} alt="splash screen logo" />
      </div>
      <div className="signin-wrap">
        <h3>Let’s get you in</h3>
        <button>
          <div className="mini-wrap">
            <AiOutlineGoogle /> Continue witch Google
          </div>
        </button>
        <button>
          <div className="mini-wrap">
            <BiLogoFacebook /> Continue witch Facebook
          </div>
        </button>
        <button>
          <div className="mini-wrap">
            <AiFillApple />
            Continue witch Apple
          </div>
        </button>

        <div className="container-linie">
          <div className="linie-left"></div>
          <div className="linie">or</div>
          <div className="linie-right"></div>
        </div>
        <button>Log in with a password</button>
        <p className="signup-text">
          Don’t have an account?{" "}
          <a href="#" onClick={toggleLogInView}>
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
