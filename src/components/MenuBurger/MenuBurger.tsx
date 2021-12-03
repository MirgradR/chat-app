import MenuItem from "../Navigation/MenuItem/MenuItem"
import './MenuBurger.css'

const MenuBurger: React.FC<{navigation: Array<string>}> = (props) => {
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