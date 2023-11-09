import { useState, useEffect, useRef } from "react";
import { projectFirestore } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import "./pagesStyle/AddProduct.css";

interface FormData {
  productName: string;
  nameUser: string;
  eMail: string;
  category: string;
  locality: string;
  price: string;
  photoProduct: string[];
  textProduct: string;
  phoneNumber: string;
}

interface FeedbackMessage {
  type: "success" | "error";
  message: string;
}

const AddProduct = () => {
  const [formData, setFormData] = useState<FormData>({
    productName: "",
    nameUser: "",
    eMail: "",
    category: "",
    locality: "",
    price: "",
    photoProduct: [],
    textProduct: "",
    phoneNumber: "",
  });
  const [feedback, setFeedback] = useState<FeedbackMessage | null>(null);
  const timeoutIdRef = useRef<number | null>(null);
  useEffect(() => {
    return () => {
      if (timeoutIdRef.current !== null) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newData = {
      ...formData,
      photoProduct: [
        "https://www.blueskyconversions.co.uk/wp-content/uploads/imageComingSoon.jpg",
      ],
    };

    const formattedCategory =
      newData.category.charAt(0).toUpperCase() + newData.category.slice(1);

    try {
      const docRef = await addDoc(
        collection(projectFirestore, formattedCategory),
        newData
      );
      console.log("Document written with ID: ", docRef.id);
      console.log("Document saved to", formattedCategory + "/" + docRef.id);

      setFeedback({
        type: "success",
        message: "Product has been added successfully!",
      });
      timeoutIdRef.current = window.setTimeout(() => {
        setFeedback(null);
        setFormData({
          productName: "",
          nameUser: "",
          eMail: "",
          category: "",
          locality: "",
          price: "",
          photoProduct: [],
          textProduct: "",
          phoneNumber: "",
        });
      }, 3000);
    } catch (error) {
      console.error("Error adding document: ", error);
      setFeedback({
        type: "error",
        message: "Failed to add product. Please try again later.",
      });
      timeoutIdRef.current = window.setTimeout(() => {
        setFeedback(null);
      }, 3000);
    }
  };
  return (
    <section className="add-container">
      <h2>Sell your product</h2>
      {feedback && (
        <div className="alert-send">
          <div className={`feedback-message ${feedback.type}`}>
            {feedback.message}
          </div>
        </div>
      )}
      <form className="wrap-add" onSubmit={handleSubmit}>
        <input
          type="text"
          name="productName"
          placeholder="product name"
          className="input-text"
          value={formData.productName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="nameUser"
          placeholder="your name"
          className="input-text"
          value={formData.nameUser}
          onChange={handleChange}
        />
        <input
          type="email"
          name="eMail"
          placeholder="E-mail"
          className="input-text"
          value={formData.eMail}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          className="input-text"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <label htmlFor="category" className="add-category">
          <div>Choose Category:</div>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="all">All</option>
            <option value="car">Car</option>
            <option value="motocykle">Motocykle</option>
            <option value="foto">Foto</option>
            <option value="animals">Animals</option>
            <option value="children">Children</option>
            <option value="machine">Machine</option>
            <option value="pc">PC</option>
            <option value="phone">Phone</option>
          </select>
        </label>
        <label htmlFor="location" className="add-category">
          <div>Choose Location:</div>
          <select
            id="location"
            name="locality"
            value={formData.locality}
            onChange={handleChange}
          >
            <option value="All">All Location</option>
            <option value="New York City">New York City</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Chicago">Chicago</option>
            <option value="Houston">Houston</option>
            <option value="Phoenix">Phoenix</option>
            <option value="Philadelphia">Philadelphia</option>
            <option value="San Diego">San Diego</option>
            <option value="Dallas">Dallas</option>
          </select>
        </label>
        <label htmlFor="Price" className="add-category">
          <div> Price</div>
          <input
            type="number"
            id="Price"
            name="price"
            placeholder="Price €"
            min="1"
            step="1"
            value={formData.price}
            onChange={handleChange}
          />
        </label>
        <textarea
          name="textProduct"
          id="info-product"
          placeholder="Detail info your product"
          value={formData.textProduct}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="submit-form">
          Submit
        </button>
      </form>
    </section>
  );
};

export default AddProduct;
