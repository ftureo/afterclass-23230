const Item = ({ title, price, pictureUrl, description }) => {
  return (
    <>
      <h1>Item</h1>
      <h2>{title}</h2>
      <h2>{description}</h2>
      <h3>{price}</h3>
      <img alt={title} src={pictureUrl}></img>
    </>
  );
};
export default Item;
