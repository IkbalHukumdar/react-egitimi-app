import "./ProductItem.css";
function ProductItem() {
  const imageUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREaXGeoatJyRmP9Aa-q4zaqgcUQim3bQHvjg&usqp=CAU";
  const productTitle = "Soda";
  const productPrice=2
  const date=new Date()
  return (
    <div className="product-item">
      <div className="product-image">
        <img src={imageUrl} alt="" />
      </div>
      <div className="product-info">
        <h2>{productTitle}</h2>
        <span>{productPrice}$</span>
        <span>{date.toISOString()}</span>

      </div>
    </div>
  );
}
export default ProductItem;
