import MenuItem from './MenuItem/MenuItem';
import './Navigation.css'

const Navigation = (props) => {
    const menu = props.menu.navigation.navigation
    const menuList = menu.map(elem => {
        return <MenuItem item = {elem} link = {'/Content/' + elem} key = {elem}/>
    })
    return (
        <nav className="sidebar wrapper__sidebar">
            {menuList}
        </nav>
    );
}
export default Navigation