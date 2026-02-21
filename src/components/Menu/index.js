import React from "react"
import MenuItem from "../MenuItem" //takes the info from menu item
export default class Menu extends React.Component { //exports the Menu to create <Menu />
  render() {
    return (
      <div><h1>{this.props.menuName} Menu</h1>
        {this.props.menuItems.map(item => (
          <MenuItem key={item.itemId} {...item} //spread opertator "..." goes through each property in each "item" and gets assigned its own key-pair value without manually assigning it
          />
        ))}
      
      </div>
      )
    }
  }