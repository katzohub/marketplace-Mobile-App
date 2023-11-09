import "./BottomNav.css";
import { NavLink } from "react-router-dom";
import {
  AiTwotoneShop,
  AiOutlineSearch,
  AiOutlineQuestion,
  AiOutlineHeart,
  AiOutlinePlus,
} from "react-icons/ai";
const BottomNav = () => {
  return (
    <ul className="container-bootom">
      <li className="mini-bottom-wrap">
        <NavLink to="/">
          <AiTwotoneShop /> <br />
          Category
        </NavLink>
      </li>
      <li className="mini-bottom-wrap">
        <NavLink to="explore">
          <AiOutlineSearch /> <br />
          Explore
        </NavLink>
      </li>
      <li className="mini-bottom-wrap">
        <NavLink to="faq">
          <AiOutlineQuestion /> <br />
          FAQ
        </NavLink>
      </li>
      <li className="mini-bottom-wrap">
        <NavLink to="favorite">
          <AiOutlineHeart /> <br />
          Favorite
        </NavLink>
      </li>
      <li className="mini-bottom-wrap">
        <NavLink to="add-product">
          <AiOutlinePlus /> <br />
          Add
        </NavLink>
      </li>
    </ul>
  );
};

export default BottomNav;
