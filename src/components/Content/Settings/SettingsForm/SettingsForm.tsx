import { Field, InjectedFormProps, reduxForm } from "redux-form"
import { Input } from "../../../Common/FormsStyles/FormControls"
import '../../../Common/FormsStyles/FormControls.css'
import { maxLengthCreator, requeiredField } from '../../../../utils/validator/validators'
import { SettingFormValuesPropsType, SettingsFormOvnPropsType } from "../../../../types/SettingsTypes/SettingTypesComponent"

const maxLength35 = maxLengthCreator(35)
const maxLength40 = maxLengthCreator(40)

const SettingsForm: React.FC<InjectedFormProps<SettingFormValuesPropsType, SettingsFormOvnPropsType> & SettingsFormOvnPropsType> = ({handleSubmit, error, initialValues}) => {

    return (
        <form onSubmit = {handleSubmit} className = 'settings-form'>
            <div className = {'form-personal'}>
                <h3 className = {'form-personal__title'}>Personal:</h3>
                <div className = {'form-personal__item checkbox'}>
                    <p>Loking for a job: </p>
                    <Field component={Input} type={'checkbox'} name={'lookingForAJob'} />
                </div>
                <div className = {'form-personal__item'}>
                    <p>About me</p>
                    <Field component={Input} name={'lookingForAJobDescription'} validate = {[requeiredField, maxLength40]}/>
                </div>
                <div className = {'form-personal__item'}>
                    <p>Full Name</p>
                    <Field component={Input} name={'fullName'} validate = {[requeiredField, maxLength35]}/>
                </div> 
            </div>
            <div className = {'form-contacts'}>
                <h3 className={'form-contacts__title'}>Contacts:</h3>
                <div className={'form-contacts__item'}>
                    <p>github</p>
                    <Field component={Input} name={'contacts.github'} validate = {maxLength40}/>
                </div>
                <div className={'form-contacts__item'}>
                    <p>vk</p>
                    <Field component={Input} name={'contacts.vk'} validate = {maxLength40}/>
                </div>
                <div className={'form-contacts__item'}>
                    <p>facebook</p>
                    <Field component={Input} name={'contacts.facebook'} validate = {maxLength40}/>
                </div>
                <div className={'form-contacts__item'}>
                    <p>instagram</p>
                    <Field component={Input} name={'contacts.instagram'} validate = {maxLength40}/>
                </div>
                <div className={'form-contacts__item'}>
                    <p>twitter</p>
                    <Field component={Input} name={'contacts.twitter'} validate = {maxLength40}/>
                </div>
                <div className={'form-contacts__item'}>
                    <p>website</p>
                    <Field component={Input} name={'contacts.website'} validate = {maxLength40}/>
                </div>
                <div className={'form-contacts__item'}>
                    <p>youtube</p>
                    <Field component={Input} name={'contacts.youtube'} validate = {maxLength40}/>
                </div>    
            </div>
            { error && <div className={'form-settings-error'}><p>{error}</p></div> }
            <button className = 'btn-settings'>Save</button>
        </form>
    )
}

export const SettingsReduxForm = reduxForm<SettingFormValuesPropsType, SettingsFormOvnPropsType>({form: 'settings'}) (SettingsForm)