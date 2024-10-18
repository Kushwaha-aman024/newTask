import React from "react";
import AddProduct from "./components/AddProduct";
import SmallPopup from "./components/SmallPopup"; 
import Sidebar from './components/Sidebar'; 
const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 flex items-center justify-center">
    <div className="w-full max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <Sidebar />
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-700 tracking-wide">
         
        </h1>
        {/* AddProduct Component */}
        <AddProduct />
      </div>
           <button className="open-popup-button" onClick={handleOpenPopup}>
        Open Popup
      </button>

      <SmallPopup isOpen={isPopupOpen} onClose={handleClosePopup} title="Small Popup">
        <p>This is a simple popup content.</p>
      </SmallPopup>
    </div>
  );
}
};

export default App;
