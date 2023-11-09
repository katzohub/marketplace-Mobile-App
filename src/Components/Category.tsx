import { useParams } from "react-router-dom";
import OneProduct from "../Pages/categoryPages/OneProduct";

const Category = () => {
  const { collectionName } = useParams<{ collectionName: string }>();

  if (!collectionName) {
    return <div>Error: Collection name is missing!</div>;
  }

  return <OneProduct collectionName={collectionName} />;
};

export default Category;
