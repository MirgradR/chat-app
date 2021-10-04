import MenuItem from './MenuItem/MenuItem';
import './Navigation.css'

const Navigation = () => {
    return (
        <nav className="sidebar wrapper__sidebar">
            <MenuItem item = 'Profile' link = '/Profile'/>
            <MenuItem item = 'Messages' link = '/Messages'/>
            <MenuItem item = 'News' link = '/News'/>
            <MenuItem item = 'Music' link = '/Music'/>
            <MenuItem item = 'Settings' link = '/Settings'/>
        </nav>
    );
}
export default Navigation