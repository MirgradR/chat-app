import logo from '../../../../Rlogo.png'
import './FriendsItem.css'

const FriendsItem = () => {
    return (
        <li className = 'friends__list-item'>
            <img src = {logo} alt = 'avatar' className = 'logo avatar' />
            <button className = 'list-item__following'>Follow</button>
            <div className = 'list-item__description'>
                <h2 className = 'description-login'>Ruslan K.</h2>
                <div className = 'description-location'>
                    <h4 className = 'description-location__country'>Russia</h4>
                    <h4 className = 'description-location__city'>Moscow</h4>
                </div>
                <p className = 'description-greeting'>I like boxing</p>
            </div>
        </li>
    )
}
export default FriendsItem