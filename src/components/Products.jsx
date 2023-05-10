import ProductItem from "./ProductItem";
import "./Products.css"
function Products() {
  const fullName="Ikbal Hukumdar"
  const imageUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREaXGeoatJyRmP9Aa-q4zaqgcUQim3bQHvjg&usqp=CAU";
  const productName= "Soda";
  const productPrice=2
  return (
    <div className="products-wrapper">
      <h1>Products</h1>
      <div className="products">
        <ProductItem  imageUrl={imageUrl}
        productName={productName} productPrice={productPrice}/>
      <ProductItem imageUrl ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV2S-B7dop2YUM_TT1LR__Ejo7boiNp7y2oQ&usqp=CAU"
      productName="Çilek" productPrice="3"/>      
      </div>
    </div>
  );
}
export default Products;
