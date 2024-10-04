import React, { useState } from 'react';
import './NewProduct.css'; // Import custom CSS

const AddProductForm = () => {
  const [discountCount, setDiscountCount] = useState(1);
  const [discounts, setDiscounts] = useState(Array(discountCount).fill({ name: '', value: '' }));

  // Handle change in number of discounts
  const handleDiscountCountChange = (e) =>{
    const count = parseInt(e.target.value, 10);
    setDiscountCount(count);
    setDiscounts((prevDiscounts) => {
      const newDiscounts = [...prevDiscounts];
      if (count > prevDiscounts.length) {
        for (let i = prevDiscounts.length; i < count; i++) {
          newDiscounts.push({ name: '', value: '' });
        }
      } else {
        newDiscounts.length = count;
      }
      return newDiscounts;
    });
  };

  // Handle discount field changes
  const handleDiscountChange = (index, field, value) => {
    const updatedDiscounts = [...discounts];
    updatedDiscounts[index][field] = value;
    setDiscounts(updatedDiscounts);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">New Product</h2>

      <div className="form-group">
        <label className="form-label">Product Name</label>
        <input
          type="text"
          className="form-input"
          placeholder="Enter product name"
        />
      </div>

      <div className="form-group">
        <label className="form-label">Buying Price</label>
        <input
          type="number"
          className="form-input"
          placeholder="Enter buying price"
        />
      </div>

      <div className="form-group">
        <label className="form-label">Category</label>
        <select className="form-input">
          <option value="">Select product category</option>
          {/* Add more categories as needed */}
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
        </select>
      </div>

      <div className="form-group">
        <label className="form-label">No of Discounts: {discountCount}</label>
        <input
          type="number"
          className="form-input"
          value={discountCount}
          onChange={handleDiscountCountChange}
        />
      </div>

      {discounts.map((discount, index) => (
        <div key={index} className="discount-row flex gap-5">
          <div className="form-group">
            <label className="form-label">Discount Name</label>
            <input
              type="text"
              className="form-input"
              value={discount.name}
              onChange={(e) => handleDiscountChange(index, 'name', e.target.value)}
              placeholder="Discount Name"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Discount Value</label>
            <input
              type="number"
              className="form-input"
              value={discount.value}
              onChange={(e) => handleDiscountChange(index, 'value', e.target.value)}
              placeholder="Discount Value"
            />
          </div>
        </div>
      ))}

      <div className="form-actions">
        <button className="form-button discard-button">Discard</button>
        <button className="form-button add-button">Add Product</button>
      </div>
    </div>
  );
};

export default AddProductForm;
