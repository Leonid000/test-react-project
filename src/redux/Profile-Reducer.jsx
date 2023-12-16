import axios from "axios"
import { AxiosAPI } from "../API/AxiosQuery"

let initialState = {
    posts: [
        {
            id: 1,
            caption: 'How are you?',
            likesCount: 11,
        },
        {
            id: 2,
            caption: 'Надпись 2',
            likesCount: 7,
        },
        {
            id: 2,
            caption: 'надпись 3',
            likesCount: 4,
        },
    ],
    textareaPosts: '',
    profileUser: [],
    status: ''
}


export let getProfileUser = (user) => {
    return {
        type: 'GET-PROFILE-USER',
        user: user
    }
}
export let getStatus_AC = (status) => {
    return {
        type: 'GET-STATUS',
        status: status
    }
}


export const profileReducer = (profilePage = initialState, action) => {
    if (action.type === 'ADD-POST') { 
        let text = action.value
        return {
            ...profilePage, 
            posts: [{id:1, caption: text, likesCount: 10 }, ...profilePage.posts]
        }

    }
    else if(action.type === 'UPDATE-POST'){
       return {
            ...profilePage,
            textareaPosts: action.text 
       }
    } else if (action.type === 'GET-PROFILE-USER'){
        let profilePage_Copy = {...profilePage}
        let array = [action.user]
        profilePage_Copy.profileUser = array
        return profilePage_Copy
    } else if (action.type === 'GET-STATUS'){
        let profilePage_Copy = {...profilePage}
        profilePage_Copy.status = action.status
        return profilePage_Copy
    }
    return profilePage
    
}

export const getProfile_Thunk_Creator = (userID) => {
    return (dispatch) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`).then(response => {
            dispatch(getProfileUser(response.data))
        })
    }   
}

export const getStatus_Thunk_Creator = (userID) => {
    return (dispatch) => {
        AxiosAPI.getStatus(userID).then(response => {
            dispatch(getStatus_AC(response.data))
        })
    }
} 
export const updateStatus_Thunk_Creator = (status) => {
    return (dispatch) => {
        AxiosAPI.setStatus(status).then (response => {
            if (response.data.resultCode === 0){
                dispatch(getStatus_AC(status))
            }
        })
    }
}