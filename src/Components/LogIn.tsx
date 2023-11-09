import { useState } from "react";
import {
  AiFillApple,
  AiOutlineGoogle,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import logo from "../img/logo_MarketPlace.png";
import { BiLogoFacebook } from "react-icons/bi";
import SignIn from "./SignIn";
const LogIn = () => {
  const [showSignIn, setShowSignIn] = useState(false);

  if (showSignIn) {
    return <SignIn />;
  }
  const toggleSignInView = () => {
    setShowSignIn((prevState) => !prevState);
  };

  return (
    <>
      <div className="login-container">
        <div className="back" onClick={toggleSignInView}>
          <AiOutlineArrowLeft />
        </div>
        <div className="box-img">
          <img src={logo} alt="splash screen logo" />
        </div>
        <div className="login-wrap">
          <h3>Login to your account</h3>
          <form action="">
            <input type="email" name="email" placeholder="E-mail" />
            <input type="password" name="password" placeholder="Password" />
          </form>

          <div className="container-linie">
            <div className="linie-left"></div>
            <div className="linie">or continue with</div>
            <div className="linie-right"></div>
          </div>
          <div className="group-btn">
            <button>
              <AiOutlineGoogle />
            </button>
            <button>
              <BiLogoFacebook />
            </button>
            <button>
              <AiFillApple />
            </button>
          </div>

          <p className="login-text">
            Don’t have an account?{" "}
            <a href="#" onClick={toggleSignInView}>
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default LogIn;
