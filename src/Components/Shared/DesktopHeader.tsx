import "./DesktopHeader.css";
import { NavLink } from "react-router-dom";
import {
  AiTwotoneShop,
  AiOutlineSearch,
  AiOutlineQuestion,
  AiOutlineHeart,
  AiOutlinePlus,
  AiOutlineUser,
} from "react-icons/ai";
import logo from "../../img/logo_MarketPlace.png";

const DesktopHeader = () => {
  return (
    <>
      <img src={logo} alt="" className="fixed-logo" />
      <ul className="container-top-header">
        <li className="mini-top-wrap">
          <NavLink to="/">
            <AiTwotoneShop />
            Category
          </NavLink>
        </li>
        <li className="mini-top-wrap">
          <NavLink to="explore">
            <AiOutlineSearch />
            Explore
          </NavLink>
        </li>
        <li className="mini-top-wrap">
          <NavLink to="faq">
            <AiOutlineQuestion />
            FAQ
          </NavLink>
        </li>
        <li className="mini-top-wrap">
          <NavLink to="favorite">
            <AiOutlineHeart />
            Favorite
          </NavLink>
        </li>
        <li className="mini-top-wrap">
          <NavLink to="add-product">
            <AiOutlinePlus />
            Add
          </NavLink>
        </li>
        <li className="mini-top-wrap">
          <NavLink to="/signin">
            <AiOutlineUser />
            Register
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default DesktopHeader;
