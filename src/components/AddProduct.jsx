import React, { useState } from "react";
import './NewProduct.css'; // Import the CSS file

function NewProduct() {
  const [productName, setProductName] = useState("");
  const [buyingPrice, setBuyingPrice] = useState("");
  const [category, setCategory] = useState("");
  const [discounts, setDiscounts] = useState([
    { name: "", value: "" },
    { name: "", value: "" },
    { name: "", value: "" },
  ]);

  const handleDiscountChange = (index, field, value) => {
    const updatedDiscounts = [...discounts];
    updatedDiscounts[index][field] = value;
    setDiscounts(updatedDiscounts);
  };

  const handleSaveProduct = () => {
    const productData = {
      productName,
      buyingPrice,
      category,
      discounts,
    };
    console.log("Product saved:", productData);
    // Reset form or perform further actions
  };

  return (
    <div className="new-product-container">
      <h2 className="heading">New Product</h2>

      <div className="input-group">
        <label>Product Name</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Enter product name"
        />
      </div>

      <div className="input-group">
        <label>Buying Price</label>
        <input
          type="number"
          value={buyingPrice}
          onChange={(e) => setBuyingPrice(e.target.value)}
          placeholder="Enter buying price"
        />
      </div>

      <div className="input-group">
        <label>Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select product category</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          <option value="category3">Category 3</option>
        </select>
      </div>

      <div className="input-group">
        <label>No of Discounts: 3</label>
        {discounts.map((discount, index) => (
          <div key={index} className="discount-group">
            <input
              type="text"
              value={discount.name}
              onChange={(e) => handleDiscountChange(index, "name", e.target.value)}
              placeholder="Discount Name"
              className="discount-input"
            />
            <input
              type="number"
              value={discount.value}
              onChange={(e) => handleDiscountChange(index, "value", e.target.value)}
              placeholder="Discount Value"
              className="discount-input"
            />
          </div>
        ))}
      </div>

      <div className="button-group">
        <button className="discard-button" onClick={() => console.log("Discard clicked")}>
          Discard
        </button>
        <button className="add-button" onClick={handleSaveProduct}>
          Add Product
        </button>
      </div>
    </div>
  );
}

export default NewProduct;