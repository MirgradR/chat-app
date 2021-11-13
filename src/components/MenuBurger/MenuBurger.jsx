import MenuItem from "../Navigation/MenuItem/MenuItem"
import './MenuBurger.css'

const MenuBurger = (props) => {
    const menuList = props.navigation.map(elem => {
        return <MenuItem item = {elem} link = {'/Content/' + elem} key = {elem}/>
    })
    return (
        <div className = {'sidebar-menu'} >
            {menuList}
        </div>
    )
}

export default MenuBurger