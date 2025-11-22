import React from "react";
import type { Product } from "../data";   // 👈 use "type" for interfaces

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button>Shop Now</button>
    </div>
  );
};

export default ProductCard;
