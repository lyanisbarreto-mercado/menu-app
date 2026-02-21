import React from "react"

const MenuItem = ({itemPrice, itemName, itemDescription, itemId}) => { //pass each property as a prop
        return (
                <div className="menu-item" id={`menu-item-${itemId}`}>
                        <span>${itemPrice}</span> 
                        <h2>{itemName}</h2>
                        <p>{itemDescription}</p>
                        <button>Add to Cart</button>
                    </div>
    )
};
//The dollar sign is passed as a string next to the itemPrice prop, so it still appears
export default MenuItem; 
