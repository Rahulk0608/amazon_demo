import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";
import "./styles.css";

function App() {
  const [items, setItems] = useState([]);

function deleteItem(id) {
  setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  console.log("item deleted:", id);
}

function clearCart(){
  setItems([]);
}

  function addToCart(item) {
    setItems((prev) => [...prev, item]);
    console.log("Adding item:", item);
  }

  const customStyle = {
    textDecoration: "none",
    color: "white",
    marginRight: "20px",
  };

  return (
    <div>
      <nav className="navbar">
        <span>Amazon</span>
        <div>
          <Link to="/" style={customStyle}>Home</Link>
          <Link to="/cart" style={customStyle}>Cart ({items.length})</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home onAddToCart={addToCart} />} />
        <Route path="/cart" element={<Cart items={items} onChecked={deleteItem} clear={clearCart} />} />
      </Routes>
    </div>
  );
}

export default App;
