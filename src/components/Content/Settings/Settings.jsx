import { SettingsReduxForm } from "./SettingsForm/SettingsForm"


const Settings = (props) => {
    
    return (
        <div className = {'settings-content content__settings'}>
            <h3 className = {'settings-content__title'}>Settings for your account</h3>
            <SettingsReduxForm initialValues = {props.profileInfo}  onSubmit = {props.onSubmit} />
        </div>
    )
}

export default Settings