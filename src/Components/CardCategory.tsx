import { Link } from "react-router-dom";

type CardCategoryProps = {
  name: string;
  imageUrl: string;
  imageAlt: string;
};

const CardCategory: React.FC<CardCategoryProps> = ({
  name,
  imageUrl,
  imageAlt,
}) => {
  return (
    <Link to={`/category/${name.toLowerCase()}`}>
      <div className="box-category">
        <img src={imageUrl} alt={imageAlt} className="img-card" />
        <h4 className="name-category">{name}</h4>
      </div>
    </Link>
  );
};

export default CardCategory;
