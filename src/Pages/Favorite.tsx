import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import "./pagesStyle/Favorite.css";

type Product = {
  id: string;
  productName: string;
  photoProduct: string[];
  textProduct: string;
  locality: string;
  price: number;
  nameUser: string;
  phoneNumber: number;
  category: string;
};

const Favorite = () => {
  const [favorites, setFavorites] = useState<Product[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const removeFavorite = (productId: string) => {
    const updatedFavorites = favorites.filter(
      (product) => product.id !== productId
    );
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="big-box">
      <h2 className="favorite-heading">My Favorite</h2>
      <section className="container-alll-product">
        {favorites.map((product) => (
          <div className="container-product-one" key={product.id}>
            <Link
              to={`/category/${product.category}/${product.id}`}
              className="wrap-all-product"
              style={{ color: "#fff" }}
            >
              <div className="one-product-box">
                <img
                  src={product.photoProduct?.[0]}
                  alt=""
                  className="one-img"
                />
                <div className="box-info-product">
                  <h5>{product.productName}</h5>
                  <div className="info-product">{product.textProduct}</div>
                  <div className="location-one">{product.locality}</div>
                  <div className="price-one">{`${product.price}€`}</div>
                </div>
              </div>
            </Link>
            <div
              className="add-icon"
              onClick={() => removeFavorite(product.id)}
            >
              <AiOutlineClose />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Favorite;
