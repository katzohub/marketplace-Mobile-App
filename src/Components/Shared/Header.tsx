import { useLocation, useNavigate, NavLink } from "react-router-dom";
import logo from "../../img/logo_MarketPlace.png";
import "./Header.css";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  let headerContent;
  if (location.pathname.includes("/user")) {
    headerContent = (
      <div className="arrow-back" onClick={() => navigate(-1)}>
        <IoIosArrowBack />
      </div>
    );
  } else if (!location.pathname.includes("/category/")) {
    headerContent = <img src={logo} alt="" className="header-img" />;
  } else {
    headerContent = (
      <div className="arrow-back" onClick={() => navigate(-1)}>
        <IoIosArrowBack />
      </div>
    );
  }

  return (
    <div className="header-container">
      {headerContent}
      <div className="user">
        <NavLink to="user">
          <AiOutlineUser />
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
