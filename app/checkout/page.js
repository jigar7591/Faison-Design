"use client";
import { useCart } from "@/components/CartContext";

export default function Checkout() {
  const { cart } = useCart();

  const pay = async () => {
    const res = await fetch("/api/stripe", {
      method: "POST",
      body: JSON.stringify(cart),
    });
    const data = await res.json();
    window.location.href = data.url;
  };

  return (
    <button onClick={pay} className="bg-gold px-6 py-3">
      Pay Now
    </button>
  );
}

