import { useState } from "react";
import Counter from "../Counter";
import ProductInfo from "./ProductInfo";
import "./ProductItem.css";

const ProductItem = ({ product: { imageUrl, productName, productPrice } }) => {
  //const{product}=props;
  //const { imageUrl, productName, productPrice } = product;

   

  const [title, setTitle] = useState(productName);
  const [counter, setCounter] = useState(productPrice);
  const [deneme, setDeneme] = useState("deneme");

  const clickHandler = () => {
    setDeneme("erkan");
    setTitle("Güncellendi!");

    console.log(productName, "Güncellendi!");
  };

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={imageUrl} alt="" />
      </div>
      <ProductInfo>
        <h2>{title}</h2>
        <p>{deneme}</p>
        <Counter
          productPrice={productPrice}
          counter={counter}
          setCounter={setCounter}
        >
          <span>{counter}₺</span>
        </Counter>
        <br />
        <button onClick={clickHandler}>Güncelle</button>
      </ProductInfo>
    </div>
  );
};

export default ProductItem;
