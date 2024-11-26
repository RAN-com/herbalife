import React from "react";

const Cart = ({
  cart,
  customerName,
  setCustomerName,
  confirmOrder,
  updateCartQuantity,
  addProduct,
  removeProduct,
}) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
      <div>
        {/* Input for customer name */}
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          placeholder="Enter customer name"
          className="w-full px-3 py-2 border rounded-lg mb-4"
          required
        />

        {/* Cart items list */}
        {cart.map((product, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white p-4 shadow-lg rounded-lg mb-4"
          >
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-600">
              ${product.price} x {product.quantity || 1}
            </p>
            
            {/* Quantity adjustment buttons */}
            <div className="flex space-x-2">
              {/* Add product to cart */}
              <button
                onClick={() => addProduct(product)}  // Add product button
                className="px-3 py-1 bg-blue-500 text-white rounded-lg"
              >
                +1
              </button>

              {/* Remove product from cart */}
              <button
                onClick={() => removeProduct(product)}  // Remove product button
                className="px-3 py-1 bg-red-500 text-white rounded-lg"
                disabled={product.quantity <= 1}
              >
                -1
              </button>
            </div>
          </div>
        ))}

        {/* Total Price */}
        <div className="mt-4 text-lg font-semibold">
          Total: $
          {cart
            .reduce((total, product) => total + product.price * (product.quantity || 1), 0)
            .toFixed(2)}
        </div>

        {/* Confirm Order Button */}
        <button
          onClick={confirmOrder}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg"
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
