import "./ProductItem.css";

function ProductItem({ product }) {
  const { imageUrl, productName, productPrice } = product;

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={imageUrl} alt="" />
      </div>
      <div className="product-info">
        <h2>{productName}</h2>
        <span>{productPrice}₺</span>
      </div>
    </div>
  );
}

export default ProductItem;
