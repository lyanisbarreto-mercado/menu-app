import React from "react"

const MenuItem = ({itemPrice, itemName, itemDescription, itemId}) => { //pass each property as a prop
        return (
                <div class="menu-item" id={itemId}>
                        <span>${itemPrice}</span>
                        <h2>{itemName}</h2>
                        <p>{itemDescription}</p>
                        <button>Add to Cart</button>
                    </div>
    )
};

export default MenuItem; 
