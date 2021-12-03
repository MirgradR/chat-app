import { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { saveProfileInfoThunkCreator } from '../../../redux/profile-reducer'
import { AppStateType } from '../../../redux/redux-store'
import { ProfileProfileInfoType } from '../../../types/ProfileTypes/ProfileTypes'
import { SettingsContainerPropsType, SettingsMapStatePropsType } from '../../../types/SettingsTypes/SettingTypesComponent'
import Settings from './Settings'
import './Settings.css'

const SettingsContainerF: React.FC<SettingsContainerPropsType> = (props) => {
    
    let [editMode, setEditMode] = useState(false)

    const backToSettings = () => {
        setEditMode(false)
    }

    const onSubmit = (formData: ProfileProfileInfoType) => {
        props.saveProfile(formData).then(()=>{
            setEditMode(true)
        })
    }

    if (!props.isAuth) {
        return <Redirect to = {'/content/login'} />
    }
    if (editMode) {
        return (
            <div className = {'settings-succsess'}>
                <h3 className = 'settings-succsess__title'>Succsess...</h3>
                <button onClick = {backToSettings} className = {'settings-succsess__btn'}>Back to settings</button>
            </div>           
        )
    }
    return (
        <Settings onSubmit = {onSubmit} profileInfo = {props.profileInfo} />
    )
}

const mapStateToProps = (state: AppStateType): SettingsMapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        profileInfo: state.profileData.profileInfo,
    }
}
const SettingsContainer = connect(mapStateToProps, {saveProfile: saveProfileInfoThunkCreator}) (SettingsContainerF)

export default SettingsContainer