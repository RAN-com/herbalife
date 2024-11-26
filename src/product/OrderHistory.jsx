import React from "react";

const OrderHistory = ({ orders }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Order History</h2>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border px-4 py-2">No.</th>
            <th className="border px-4 py-2">Order ID</th>
            <th className="border px-4 py-2">Product Name</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Customer Name</th>
            <th className="border px-4 py-2">Total Products</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => {
            const totalProducts = order.items.reduce(
              (sum, item) => sum + (item.quantity || 1), // Default quantity to 1 if not present
              0
            );

            return order.items.map((item, idx) => (
              <tr key={`${order.id}-${idx}`}>
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{order.id}</td>
                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">${item.price}</td>
                <td className="border px-4 py-2">{order.customerName}</td>
                {/* Only display total products once per order */}
                {idx === 0 ? (
                  <td
                    className="border px-4 py-2 text-center"
                    rowSpan={order.items.length}
                  >
                    {totalProducts}
                  </td>
                ) : null}
              </tr>
            ));
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistory;
