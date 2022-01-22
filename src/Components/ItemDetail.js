import ItemCount from "./ItemCount";

const ItemDetail = ({ title, price, description, pictureUrl }) => {
  return (
    <div className="container d-flex flex-column align-items-center col-8">
      <h1>ItemDetail</h1>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <h3>$ {price}</h3>
      <img src={pictureUrl} alt={title} className="w-75"></img>
      <ItemCount stock={15} initial={1} />
    </div>
  );
};

export default ItemDetail;
