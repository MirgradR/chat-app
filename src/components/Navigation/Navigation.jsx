import MenuItem from './MenuItem/MenuItem';
import './Navigation.css'

const Navigation = () => {
    return (
        <nav className="sidebar wrapper__sidebar">
            <MenuItem item = 'Profile'/>
            <MenuItem item = 'Messages'/>
            <MenuItem item = 'Users'/>
        </nav>
    );
}
export default Navigation