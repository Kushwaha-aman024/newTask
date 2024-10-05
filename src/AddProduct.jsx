import { useState } from "react";

const AddProduct = () => {
  const [discounts, setDiscounts] = useState([
    { name: "", value: "" },
    { name: "", value: "" },
    { name: "", value: "" },
  ]);

  const handleDiscountChange = (index, key, value) => {
    const updatedDiscounts = discounts.map((discount, i) =>
      i === index ? { ...discount, [key]: value } : discount
    );
    setDiscounts(updatedDiscounts);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Product Submitted");
  };

  return (
    <div className="max-w-lg mx-auto p-8 mt-8 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">New Product</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Product Name */}
        <div>
          <label className="block text-lg font-medium mb-2 text-gray-700">Product Name</label>
          <input
            type="text"
            placeholder="Enter product name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Buying Price */}
        <div>
          <label className="block text-lg font-medium mb-2 text-gray-700">Buying Price</label>
          <input
            type="number"
            placeholder="Enter buying price"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-lg font-medium mb-2 text-gray-700">Category</label>
          <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option>Select product category</option>
            <option>Electronics</option>
            <option>Clothing</option>
            <option>Accessories</option>
          </select>
        </div>

        {/* Discounts */}
        <div>
          <label className="block text-lg font-medium mb-2 text-gray-700">No of Discounts: 3</label>
          {discounts.map((discount, index) => (
            <div key={index} className="flex gap-4 mb-3">
              <input
                type="text"
                placeholder="Discount Name"
                className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={discount.name}
                onChange={(e) => handleDiscountChange(index, "name", e.target.value)}
              />
              <input
                type="number"
                placeholder="Discount Value"
                className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={discount.value}
                onChange={(e) => handleDiscountChange(index, "value", e.target.value)}
              />
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition duration-300"
          >
            Discard
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
