import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Customers = () => {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', img: 'https://via.placeholder.com/150', address: '', dob: '', medicalIssues: '' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '098-765-4321', img: 'https://via.placeholder.com/150', address: '', dob: '', medicalIssues: '' },
  ]);

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    img: null,
    address: '',
    dob: '',
    medicalIssues: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setFormState((prev) => ({ ...prev, img: reader.result }));
      reader.readAsDataURL(file);
    }
  };

  const handleSaveCustomer = (e) => {
    e.preventDefault();
    const isEditing = !!editingCustomer;
    if (Object.values(formState).every((val) => val)) {
      setCustomers((prev) =>
        isEditing
          ? prev.map((cust) => (cust.id === editingCustomer.id ? { ...cust, ...formState } : cust))
          : [...prev, { id: prev.length + 1, ...formState }]
      );
      resetForm();
    } else {
      alert('Please fill out all fields.');
    }
  };

  const handleEditCustomer = (customer) => {
    setFormState(customer);
    setEditingCustomer(customer);
    setIsFormVisible(true);
  };

  const handleDeleteCustomer = (id) => {
    setCustomers((prev) => prev.filter((cust) => cust.id !== id));
  };

  const resetForm = () => {
    setFormState({
      name: '',
      email: '',
      phone: '',
      img: null,
      address: '',
      dob: '',
      medicalIssues: '',
    });
    setIsFormVisible(false);
    setEditingCustomer(null);
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400">
      <h1 className="text-2xl font-bold mb-4 text-center text-white">Customer Management</h1>

      <div className="mb-4 flex justify-end">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          onClick={() => setIsFormVisible(true)}
        >
          Add Customer
        </button>
      </div>

      {isFormVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md w-96">
            <h2 className="text-lg font-bold">{editingCustomer ? 'Edit Customer' : 'Add New Customer'}</h2>
            <form onSubmit={handleSaveCustomer} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="border p-2 w-full rounded"
              />
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="border p-2 w-full rounded"
              />
              <input
                type="tel"
                name="phone"
                value={formState.phone}
                onChange={handleInputChange}
                placeholder="Phone"
                className="border p-2 w-full rounded"
              />
              <input
                type="text"
                name="address"
                value={formState.address}
                onChange={handleInputChange}
                placeholder="Address"
                className="border p-2 w-full rounded"
              />
              <input
                type="date"
                name="dob"
                value={formState.dob}
                onChange={handleInputChange}
                className="border p-2 w-full rounded"
              />
              <textarea
                name="medicalIssues"
                value={formState.medicalIssues}
                onChange={handleInputChange}
                placeholder="Medical Issues"
                className="border p-2 w-full rounded"
              />
              <input type="file" accept="image/*" onChange={handleImageUpload} className="border p-2 w-full rounded" />
              {formState.img && <img src={formState.img} alt="Preview" className="w-20 h-20 mx-auto rounded-full" />}
              <div className="flex justify-between">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                  Save
                </button>
                <button type="button" className="bg-red-500 text-white px-4 py-2 rounded" onClick={resetForm}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <table className="w-full bg-white rounded shadow-md">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">#</th>
            <th className="p-2">Image</th>
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Phone</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((cust) => (
            <tr key={cust.id} className="border-b">
              <td className="p-2">{cust.id}</td>
              <td className="p-2">
                <img src={cust.img} alt={cust.name} className="w-10 h-10 rounded-full" />
              </td>
              <td className="p-2">{cust.name}</td>
              <td className="p-2">{cust.email}</td>
              <td className="p-2">{cust.phone}</td>
              <td className="p-2 space-x-2">
                <Link
                  to={`/customer/${cust.id}`}
                  state={{ customer: cust }}
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                >
                  View
                </Link>
                <button
                  onClick={() => handleEditCustomer(cust)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteCustomer(cust.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;
