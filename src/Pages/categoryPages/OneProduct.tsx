import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { projectFirestore } from "../../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import "./OneProduct.css";

type OneProductProps = {
  searchTerm: string;
  collectionName: string | string[];
};

type Product = {
  id: string;
  productName: string;
  photoProduct: string;
  textProduct: string;
  locality: string;
  price: number;
  nameUser: string;
  phoneNumber: number;
  category: string;
};

const OneProduct: React.FC<OneProductProps> = ({
  collectionName,
  searchTerm,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const collectionNames = Array.isArray(collectionName)
          ? collectionName
          : [collectionName];

        let aggregatedProducts: Product[] = [];

        for (const name of collectionNames) {
          const formattedCollectionName =
            name.charAt(0).toUpperCase() + name.slice(1);
          const productsCollection = collection(
            projectFirestore,
            formattedCollectionName
          );
          const productsSnapshot = await getDocs(productsCollection);

          if (!productsSnapshot.empty) {
            const productsData = productsSnapshot.docs.map((doc) => ({
              id: doc.id,
              ...(doc.data() as Omit<Product, "id">),
            }));

            aggregatedProducts = [...aggregatedProducts, ...productsData];
          } else {
            console.log(
              `No products found in the collection "${formattedCollectionName}"`
            );
          }
        }

        setProducts(aggregatedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [collectionName]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavoriteIds(favorites.map((p: Product) => p.id));
  }, []);

  const toggleFavorite = (product: Product) => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const index = favorites.findIndex((p: Product) => p.id === product.id);
    if (index === -1) {
      favorites.push(product);
    } else {
      favorites.splice(index, 1);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    setFavoriteIds(favorites.map((p: Product) => p.id));
  };

  const isFavorite = (productId: string) => {
    return favoriteIds.includes(productId);
  };

  const filteredProducts = searchTerm
    ? products.filter((product) =>
        product.productName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products;

  useEffect(() => {
    console.log("searchTerm has changed:", searchTerm);
    console.log("Current products:", products);
  }, [searchTerm, products]);

  return (
    <section className="container-alll-product">
      {filteredProducts.map((product) => (
        <div key={product.id} className="container-product-one">
          <Link
            to={`/category/${product.category}/${product.id}`}
            className="wrap-all-product"
            style={{ color: "#fff" }}
          >
            <div className="one-product-box">
              <img src={product.photoProduct[0]} alt="" className="one-img" />{" "}
              <div className="box-info-product">
                <h5>{product.productName}</h5>
                <div className="info-product">{product.textProduct}</div>
                <div className="location-one">{product.locality}</div>
                <div className="price-one">{`${product.price}€`}</div>
              </div>
            </div>
          </Link>
          <div
            className={`add-icon ${isFavorite(product.id) ? "favorite" : ""}`}
            onClick={() => toggleFavorite(product)}
          >
            <AiOutlineHeart />
          </div>
        </div>
      ))}
    </section>
  );
};

export default OneProduct;
