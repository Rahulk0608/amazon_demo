import { useState } from "react";
import { Link } from "react-router-dom";

function Cart(props) {
   
    const groupedItems = props.items.reduce((acc, item) => {
    const existing = acc.find((x) => x.id === item.id);
    if (existing) {
      existing.quantity += 1; // increase count if duplicate found
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  const totalPrice = groupedItems
  .reduce((total, item) => total + parseFloat(item.price.replace(/,/g, '')) * item.quantity, 0);

  //const totalPrice = props.items
  //.reduce((total, item) => total + parseFloat(item.price.replace(/,/g, '')), 0);

  return (
    <div>
      {groupedItems.length === 0 ? (
     <div className="empty-cart">
      <h1>The Cart is Empty.</h1>
      <Link to="/">
        <button style={{cursor: "pointer"}}>Shop Now</button>
      </Link> 
     </div>
      ):(
     <div>
      <div>
       {
        groupedItems.map((x, index)=>{
          return (
            <div key={x.id} id={x.id} className="cart-box">
              <img src={x.image} height="200px" width="200px"/>
              <h3>{x.name}</h3>
              <h3>{x.price}</h3>
              <div className="cart-box-inside">
                <p>Qty</p>
                <input className="cart-box-input" type="text" value={x.quantity} readOnly/>
                <button onClick={() => {props.onChecked(x.id)}}>Remove</button>
              </div> 
            </div> 
          )
        })
       }
      </div>
      <div className="total">
        <h3>Total Price: ₹{totalPrice.toLocaleString()}</h3>
        <button className="button1" onClick={props.clear}>Clear Cart</button>
        <button className="button2">Checkout</button>
      </div>
     </div>
      )} 
    </div>
  );
}

export default Cart;
