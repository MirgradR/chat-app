
import { ProfileProfileInfoType } from "../../../types/ProfileTypes/ProfileTypes"
import { SettingsPropsType } from "../../../types/SettingsTypes/SettingTypesComponent"
import { SettingsReduxForm } from "./SettingsForm/SettingsForm"


const Settings: React.FC<SettingsPropsType> = (props) => {
    
    return (
        <div className = {'settings-content content__settings'}>
            <h3 className = {'settings-content__title'}>Settings for your account</h3>
            <SettingsReduxForm initialValues = {props.profileInfo as ProfileProfileInfoType} onSubmit = {props.onSubmit} />
        </div>
    )
}

export default Settings
