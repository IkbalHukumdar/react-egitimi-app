import ProductItem from "./ProductItem";
import "./Products.css";
import { productData}  from "../productData";


function Products() {
  return (
    <div className="product-wrapper">
      <h1>Products</h1>
      <div className="products">
        {productData.map((product) => {
          return (
            <ProductItem
              key={product.productName}
              product={product}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
