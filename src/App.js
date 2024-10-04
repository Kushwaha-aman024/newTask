import React from "react";
import AddProduct from "./components/AddProduct"; // Adjust the path based on where AddProduct is located

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex items-center justify-center">
    <div className="w-full max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-700 tracking-wide">
         
        </h1>
        {/* AddProduct Component */}
        <AddProduct />
      </div>
    </div>
  );
}

export default App;
