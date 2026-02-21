import "../../App.css"
import Menu from "../Menu" //takes the info from Menu

const MenuApp = ({data}) => { //the data prop
  return (
    <div className="App">
      {data.map(menu => 
        <Menu
        key={menu.menuName} //used by react
        menuItems={menu.menuItems} //creates this.props.menuItems
        menuName={menu.menuName} //creates this.props.menuName
        />
      )}
    </div>
  )
}
export default MenuApp //exports the MenuApp to create <MenuApp />