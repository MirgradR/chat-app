import React, { ChangeEvent, useEffect, useState } from "react"
import { ProfileStatusPropsType } from "../../../../../types/ProfileTypes/ProfileTypesComponent"
import './ProfileStatus.css'

const ProfileStatusHooks: React.FC<ProfileStatusPropsType> = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect( () => {
        setStatus(props.status)
    }, [props.status] )

    const activateEditMode = () => { 
        if (!props.isOwner) {
           setEditMode(true) 
        }    
    }
    
    const deActivateEditMode = () => { 
        setEditMode(false)
        props.updateStatus(status) 
    }
    const updateStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div className='personal-info__status'>
            {editMode
                ? <input onBlur = {deActivateEditMode} onChange = {updateStatus} value = {status} autoFocus={true} className='profile-status__create' />
                : <h3 onClick = {activateEditMode} className='profile-status__title' >{props.status ? props.status : 'Status '}</h3>}
        </div>
    )
}

export default ProfileStatusHooks