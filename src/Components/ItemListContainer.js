import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import axios from "axios";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const getDataProducts = await axios.get(
      "https://franncode.vercel.app/api/products"
    );
    const productsResponse = getDataProducts.data;
    setProducts(productsResponse);
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h3>{greeting}</h3>
      <ItemList products={products} />
    </div>
  );
};
export default ItemListContainer;
