import preloader from './../../../preloader.gif'

const Preloader: React.FC = () => {
    return <img src = {preloader} alt = {'Loading'} className = 'preloader' />
}
export default Preloader