import React from "react";

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6 text-center">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.length > 0 ? (
          products.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              {product.image && (
                <img
                  src={URL.createObjectURL(product.image)}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="font-semibold text-lg text-gray-800">
                  {product.name}
                </h2>
                <p className="text-sm text-gray-600">Price: ${product.price}</p>
                <p className="text-sm text-red-600">Stock: {product.stock}</p>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
                  disabled={product.stock <= 0}
                >
                  {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-4">
            No products added yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
