import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AxiosAPI } from '../../API/AxiosQuery'
import { renderTree } from '../..'


const ProfileStatus = (props) => {
    const [editMode,setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)
   

    const setEditModeOn = () => {
        setEditMode(true)
    }
    const setEditModeOff = () => {
        setEditMode(false)
        props.updateStatus(status)

    }
    
    useEffect(() => {
        setStatus(props.status)
    },[props.status])
    

    return (
        <div>
            {!editMode && 
                <span onClick={setEditModeOn}>{ props.status ? props.status : 'Статус не определен'}</span>
            }
            {editMode &&
                <input 
                    type="text" 
                    value={status}
                    onChange={event => setStatus(event.target.value)}
                    autoFocus={true}
                    onBlur={setEditModeOff}
                    />
            }
        </div>
    )
}


export {ProfileStatus}

