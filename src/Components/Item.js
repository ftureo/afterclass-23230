import { Link } from "react-router-dom";

// const Item = ({ id, title, price, pictureUrl, description }) => {
// Definición de la función para las props de FakeStoreApi
const Item = ({ id, title, price, image, description }) => {
  return (
    <Link to={`/products/${id}`}>
      <div>
        <h1>Item</h1>
        <h2>{title}</h2>
        <h2>{description}</h2>
        <h3>{price}</h3>
        {/* <img alt={title} src={pictureUrl}></img> */}
        {/* Imagen de FakeStoreApi */}
        <img alt={title} src={image}></img>
      </div>
    </Link>
  );
};
export default Item;
