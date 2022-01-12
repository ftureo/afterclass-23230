import Item from "./Item";

const ItemList = ({ products }) => {
  console.log("Productos en IL", products);
  return (
    <>
      {products.map((product) => {
        return (
          <Item
            key={product.id}
            title={product.title}
            pictureUrl={product.pictureUrl}
            price={product.price}
            description={product.description}
          />
        );
      })}
    </>
  );
};
export default ItemList;
