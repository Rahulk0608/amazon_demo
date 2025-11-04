import { useState } from "react";

function Card(props){


    const customStyle = {
        border: "none",
        backgroundColor: "orange",
        color: "white",
        borderRadius: "5px",
        padding: "10px",
        cursor: "pointer",
    }

    function handleClick() {
    const item = {
      id : props.id,
      name: props.description,
      price: props.price,
      image: props.image
    };
    props.onAddToCart(item);
  }

    return (
      <div className="card">
        <img src={props.image} alt={props.alt} width="300px" height="300px"/>
        <h3>{props.description}</h3>
        <h3>{props.price}</h3>
        <button onClick={handleClick} name={props.name} style={customStyle} >Add to Cart</button>
      </div>
    )
}

export default Card;