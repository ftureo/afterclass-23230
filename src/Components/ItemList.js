import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div>
      {products.map((product) => {
        return (
          <Item
            key={product.id}
            id={product.id}
            title={product.title}
            pictureUrl={product.pictureUrl}
            price={product.price}
            description={product.description}
          />
        );
      })}
    </div>
  );
};
export default ItemList;
