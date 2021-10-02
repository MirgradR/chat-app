import './PostCreateForm.css'

const CreatePost = () => {
    return (
        <form className="create-post">
            <textarea type="text" className="input-post" />
            <button className="btn-send post__btn">Send</button>
        </form>
    );
}
export default CreatePost