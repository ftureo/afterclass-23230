import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getItem = async () => {
      const getDataItem = await axios.get(
        "https://franncode.vercel.app/api/products"
      );
      const itemResponse = await getDataItem.data;
      setItem(itemResponse.find((item) => item.id === parseInt(id)));
    };
    getItem();
  }, [id]);

  return (
    <div>
      <h2>ItemDetailContainer</h2>
      <ItemDetail
        id={item.id}
        price={item.price}
        title={item.title}
        description={item.description}
        pictureUrl={item.pictureUrl}
      />
    </div>
  );
};

export default ItemDetailContainer;
