import ProductItem from "./ProductItem";
import "./Products.css"
function Products() {
  return (
    <div className="products-wrapper">
      <h1>Products</h1>
      <div className="products">
        <ProductItem/>
        <ProductItem/>
      </div>
    </div>
  );
}
export default Products;
