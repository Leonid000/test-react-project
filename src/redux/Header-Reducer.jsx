
import { AxiosAPI } from "../API/AxiosQuery"
import {stopSubmit} from 'redux-form'

let initialState = {
    headerMassage: 'Сообщение из хедера',
    id: null,
    login: null,
    email: null,
    isGet: false

}

export  let getDataUser = (id,login,email) => {
    return {
        type: 'GET-DATA-USER',
        id: id,
        login: login, 
        email: email,
    }
}

const cleanDatauUser_AC = () => {
    return {
        type: 'CLEAN-USER'
    }
}

export let headerReducer = (headerPage = initialState,action) => {
        if(action.type === 'GET-DATA-USER'){
            let headerPage_Copy = {...headerPage}
            headerPage_Copy.id = action.id 
            headerPage_Copy.login = action.login
            headerPage_Copy.email = action.email
            headerPage_Copy.isGet = true
            return headerPage_Copy
        } else if (action.type === 'CLEAN-USER'){
            let headerPage_Copy = {...headerPage}
            headerPage_Copy.id = null
            headerPage_Copy.login = null
            headerPage_Copy.email = null
            headerPage_Copy.isGet = false
            return headerPage_Copy
        } else if (action.type === 'VALERA'){
            const headerPage_Copy = {...headerPage}
            return headerPage_Copy
        }


    return headerPage
}




export const getAuthorized_Thank_Creator = () => {
    return (dispatch) => {
       return AxiosAPI.authorized()
        .then(response => {
            if(response.data.resultCode === 0){
                let {email,id,login} = response.data.data
                dispatch(getDataUser(id,login,email))
            }
        }) 
    }
}


export const authorized_Thunk_Creator = (email,password,rememberMe) => {
    return (dispatch) => {
        AxiosAPI.sendDataAuthorized(email,password,rememberMe).then(responce => {
            if(responce.data.resultCode === 0){
                AxiosAPI.authorized()
                .then(response => {
                    if(response.data.resultCode === 0){
                        let {email,id,login} = response.data.data
                        dispatch(getDataUser(id,login,email))
                    }
                    
                }) 
            } else {
                const message = responce.data.messages[0]
                let action = stopSubmit('login',{_error: message})
                dispatch(action) 
            }
        })
    }
}

export const deleteAuthorized_Thunk_Creator = () => {
    return (dispatch) => {
        AxiosAPI.deleteDataAuthorized().then(responce => {
            if(responce.data.resultCode === 0){
                dispatch(cleanDatauUser_AC())
            }
        })
    }
}


