import logo from '../Rlogo.png'

const Content = () => {
    return (
        <div className="content wrapper__content">
            <div className="profile content__profile">
                <img src={logo} alt="logo" className="logo avatar profile__avatar" />
                <div className="personal-info profile__info">
                    <h2 className="personal-info__login">Mirgrad</h2>
                    <h3 className="personal-info__city"> City: Moscow</h3>
                    <h3 className="personal-info__birthD"> Birthday: 2th May</h3>
                    <h3 className="personal-info__edu"> Education: KubSAU</h3>
                </div>
                <div className="post profile__post">
                    <h3 className="post__title">My posts</h3>
                    <form className="create-post">
                        <input type="text" className="input-post" />
                        <button className="btn-send post__btn">Send</button>
                    </form>
                    <div className="post-list profile__post-list">
                        <div className="item-post post-list__item-post">
                            <img src={logo} alt="logo" className="logo avatar item-post__avatar" />
                            <h4 className="item-post__login">Mirgrad</h4>
                            <p className="item-post__text">Hey, I am Ruslan</p>
                        </div>
                        <div className="item-post post-list__item-post">
                            <img src={logo} alt="logo" className="logo avatar item-post__avatar" />
                            <h4 className="item-post__login">Mirgrad</h4>
                            <p className="item-post__text">I am frontend developer</p>
                        </div>
                        <div className="item-post post-list__item-post">
                            <img src={logo} alt="logo" className="logo avatar item-post__avatar" />
                            <h4 className="item-post__login">Mirgrad</h4>
                            <p className="item-post__text">I am from Russia</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Content