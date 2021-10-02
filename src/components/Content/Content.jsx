import './Content.css'
import Profile from './Profile/Profile';

const Content = () => {
    const user = {
        login: 'Mirgrad',
        city: 'Moscow',
        birth: '2th May',
        edu: 'KubSAU'
    }
    return (
        <div className="content wrapper__content">
            <Profile login = {user.login} city = {user.city} birth = {user.birth} edu = {user.edu}/>
        </div>
    );
}
export default Content