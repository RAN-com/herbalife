import React, { useState } from "react";
import ProductForm from "../product/ProductForm";
import ProductList from "../product/ProductList";
import Cart from "../product/Cart";
import OrderHistory from "../product/OrderHistory";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: null,
    stock: 0,
  });
  const [currentView, setCurrentView] = useState("list");
  const [customerName, setCustomerName] = useState("");

  // Shared handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleImageChange = (e) => {
    setNewProduct({ ...newProduct, image: e.target.files[0] });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setProducts([...products, newProduct]);
    setNewProduct({ name: "", price: "", image: null, stock: 0 });
    setCurrentView("list");
  };

  const addToCart = (product) => {
    if (product.stock <= 0) {
      alert(`${product.name} is out of stock!`);
      return;
    }

    const existingProduct = cart.find((item) => item.name === product.name);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    setProducts(
      products.map((item) =>
        item.name === product.name ? { ...item, stock: item.stock - 1 } : item
      )
    );
  };

  const confirmOrder = () => {
    if (!customerName) {
      alert("Please enter the customer name!");
      return;
    }
    const newOrder = {
      id: Date.now(),
      items: [...cart],
      total: cart.reduce(
        (total, product) =>
          total + parseFloat(product.price) * product.quantity,
        0
      ),
      customerName,
    };
    setOrders([...orders, newOrder]);
    setCart([]);
    setCustomerName("");
    setCurrentView("history");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-blue-400 p-6">
      <div className="flex justify-center mb-6 space-x-4">
        <button
          onClick={() => setCurrentView("add")}
          className={`px-4 py-2 rounded-lg ${
            currentView === "add"
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-800"
          }`}
        >
          Add Product
        </button>
        <button
          onClick={() => setCurrentView("list")}
          className={`px-4 py-2 rounded-lg ${
            currentView === "list"
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-800"
          }`}
        >
          Product List
        </button>
        <button
          onClick={() => setCurrentView("cart")}
          className={`px-4 py-2 rounded-lg ${
            currentView === "cart"
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-800"
          }`}
        >
          Cart ({cart.length})
        </button>
        <button
          onClick={() => setCurrentView("history")}
          className={`px-4 py-2 rounded-lg ${
            currentView === "history"
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-800"
          }`}
        >
          Order History
        </button>
      </div>

      {currentView === "add" && (
        <ProductForm
          newProduct={newProduct}
          handleInputChange={handleInputChange}
          handleImageChange={handleImageChange}
          handleFormSubmit={handleFormSubmit}
        />
      )}
      {currentView === "list" && (
        <ProductList products={products} addToCart={addToCart} />
      )}
      {currentView === "cart" && (
        <Cart
          cart={cart}
          customerName={customerName}
          setCustomerName={setCustomerName}
          confirmOrder={confirmOrder}
        />
      )}
      {currentView === "history" && <OrderHistory orders={orders} />}
    </div>
  );
};

export default Product;
