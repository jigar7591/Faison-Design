"use client";
import { useCart } from "./CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <img src={product.image} className="rounded-md" />
      <h3 className="font-bold mt-2">{product.name}</h3>
      <p>${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-black text-white px-4 py-2 mt-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}

