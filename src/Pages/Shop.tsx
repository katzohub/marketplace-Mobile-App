import "./pagesStyle/Shop.css";
import CardCategory from "../Components/CardCategory";
import dataCategory from "../Components/dataCategory";

const Shop = () => {
  return (
    <>
      <div className="container-home">
        <h2 className="heading-category">Category</h2>
        <section className="category">
          {dataCategory.map((item) => (
            <CardCategory
              key={item.id}
              name={item.name}
              imageUrl={item.imageUrl}
              imageAlt={item.imageAlt}
            />
          ))}
        </section>
      </div>
    </>
  );
};

export default Shop;
