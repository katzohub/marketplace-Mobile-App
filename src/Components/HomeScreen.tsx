import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import SignIn from "./SignIn";
import Shop from "../Pages/Shop";
import Explore from "../Pages/Explore";
import Faq from "../Pages/Faq";
import Favorite from "../Pages/Favorite";
import User from "../Pages/User";
import AddProduct from "../Pages/AddProduct";
import SharedLayout from "../Pages/SharedLayout";
import Category from "./Category"; // Import the Category component
import InfoProduct from "../Pages/categoryPages/InfoProduct";

const InfoProductWrapper = () => {
  const { collectionName } = useParams<{ collectionName?: string }>();

  if (!collectionName) {
    return <div>Error: Collection name is missing!</div>;
  }

  return <InfoProduct collectionName={collectionName} />;
};

const HomeScreen = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Shop />} />
          <Route path="explore" element={<Explore />} />
          <Route path="faq" element={<Faq />} />
          <Route path="favorite" element={<Favorite />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="user" element={<User />} />
          {/* Category */}
          <Route path="category/:collectionName" element={<Category />} />
          <Route
            path="category/:collectionName/:id"
            element={<InfoProductWrapper />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default HomeScreen;
