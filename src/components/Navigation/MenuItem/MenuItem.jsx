import './MenuItem.css'

const MenuItem = (props) => {
    return (
        <div className="menu-item sidebar__item">{props.item}</div>
    );
}
export default MenuItem