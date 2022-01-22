import { Link } from "react-router-dom";

const Item = ({ id, title, price, pictureUrl, description }) => {
  return (
    <Link to={`/products/${id}`}>
      <div>
        <h1>Item</h1>
        <h2>{title}</h2>
        <h2>{description}</h2>
        <h3>{price}</h3>
        <img alt={title} src={pictureUrl}></img>
      </div>
    </Link>
  );
};
export default Item;
