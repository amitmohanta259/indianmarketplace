import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../data";

const ProductList: React.FC = () => {
  return (
    <section className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ProductList;
