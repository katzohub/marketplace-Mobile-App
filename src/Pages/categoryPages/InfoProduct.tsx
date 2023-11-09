import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { projectFirestore } from "../../firebase/config";
import { collection, doc, getDoc } from "firebase/firestore";

import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import Glide from "@glidejs/glide";
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineDown,
  AiOutlineUp,
} from "react-icons/ai";
import "./InfoProduct.css";
type InfoProductProps = {
  collectionName: string;
};

type Product = {
  id: string;
  productName: string;
  photoProduct: string[];
  textProduct: string;
  locality: string;
  price: number;
  nameUser: string;
  phoneNumber: number;
  eMail: string;
};

const InfoProduct: React.FC<InfoProductProps> = ({ collectionName }) => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [isInfoOpen, setInfoOpen] = useState(false);
  const toggleInfoOpen = () => {
    setInfoOpen((prev) => !prev);
  };
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!collectionName || !id) {
          console.error("Collection name or ID is missing");
          return;
        }
        const formattedCollectionName =
          collectionName.charAt(0).toUpperCase() + collectionName.slice(1);

        const productsCollection = collection(
          projectFirestore,
          formattedCollectionName
        );
        const productDocRef = doc(productsCollection, id);

        const productDoc = await getDoc(productDocRef);

        if (productDoc.exists()) {
          setProduct({
            id: productDoc.id,
            ...(productDoc.data() as Omit<Product, "id">),
          });
        } else {
          console.error("No product found");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [collectionName, id]);

  useEffect(() => {
    if (product) {
      new Glide(".glide", {
        type: "carousel",
        perView: 1,
        focusAt: "center",
      }).mount();
    }
  }, [product]);

  return (
    <div className="info-product-container">
      {product && (
        <section>
          <div className="glide">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                {product.photoProduct.map((photo, index) => (
                  <li className="glide__slide" key={index}>
                    <img src={photo} alt="" />
                    <div data-glide-el="controls" className="controls">
                      <button data-glide-dir="<">
                        <AiOutlineLeft />
                      </button>
                      <button data-glide-dir=">">
                        <AiOutlineRight />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mini-wrap-info">
            <div className="wrapper-info">
              <h3 className="linie-heading">{product.productName}</h3>

              <div className="container-info-two">
                <div>
                  <h5>{product.nameUser}</h5>
                  <p>{product.locality}</p>
                </div>
                <div className="price-info">{product.price}€</div>
              </div>

              <article className="info">
                <div className="box-down" onClick={toggleInfoOpen}>
                  {" "}
                  <h6>Product Info</h6>
                  {isInfoOpen ? <AiOutlineUp /> : <AiOutlineDown />}
                </div>
                {isInfoOpen && <p>{product.textProduct}</p>}
                <div className="user-info">
                  <h6>User Info</h6>
                  <p>
                    <span>Name:</span>
                    {product.nameUser}
                  </p>
                  <p>
                    <span>Locality:</span>
                    {product.locality}
                  </p>
                  <p>
                    <span>Number:</span>
                    {product.phoneNumber}
                  </p>
                  <p>
                    <span>E-mail:</span>
                    {product.eMail}
                  </p>
                </div>
              </article>
              <div className="container-contact">
                <button>Send E-mail</button>
                <button>Call User</button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default InfoProduct;
