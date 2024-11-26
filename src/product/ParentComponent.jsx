import React, { useState } from "react";
import Cart from "./Cart";

const ParentComponent = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "Product 1", price: 10, quantity: 1 },
    { id: 2, name: "Product 2", price: 20, quantity: 1 },
  ]);
  const [customerName, setCustomerName] = useState("");

  // Add product to cart
  const addProduct = (product) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Remove product from cart
  const removeProduct = (product) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Confirm order action
  const confirmOrder = () => {
    console.log("Order confirmed!", cart);
  };

  return (
    <Cart
      cart={cart}
      customerName={customerName}
      setCustomerName={setCustomerName}
      confirmOrder={confirmOrder}
      addProduct={addProduct}
      removeProduct={removeProduct}
    />
  );
};

export default ParentComponent;
