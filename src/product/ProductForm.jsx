import React from "react";

const ProductForm = ({ newProduct, handleInputChange, handleImageChange, handleFormSubmit }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleInputChange}
          placeholder="Enter product name"
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleInputChange}
          placeholder="Enter product price"
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
        <input
          type="number"
          name="stock"
          value={newProduct.stock}
          onChange={handleInputChange}
          placeholder="Enter stock quantity"
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
        <input
          type="file"
          name="image"
          onChange={handleImageChange}
          className="w-full px-3 py-2 border rounded-lg"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Save Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
