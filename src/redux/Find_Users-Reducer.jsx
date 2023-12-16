import { act } from "react-dom/test-utils"
import { AxiosAPI } from "../API/AxiosQuery"




let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 4,
    currentPage:1,
    isLoading: false,
    isClicked: []
}



export let change = (id) => {
    return {
         type: 'CHANGE',
         id: id,
    }
}
export let setUsers = (users) => {
    return {
        type: 'SET-USERS',  
        users: users
    }
}
export let changeCurrentPage = (item) => {
    return {
        type: 'CHANGE-CURRENT-PAGE',
        currentPage: item
    }
}
export let getUsersAmount = (amount) => {
    return {
        type: 'GET-TOTAL-USERS',
        amount: amount
    }
}
export let loadingSTART = () => {
    return {
        type: 'CHANGE-LOADING-START'
    }
}
export let loadingSTOP = () => {
    return {
        type: 'CHANGE-LOADING-STOP'
    }
}
export let isClicked_Toggle = (id) => {
    return { 
        type: 'BUTTON-TOGGLE',
        id: id
    }
}
export let isClicked_Toggle2 = (id) => {
    return { 
        type: 'BUTTON-TOGGLE2',
        id: id
    }
}


export const findUsersReducer = (findUsersPage = initialState, action) => {
    if (action.type === 'CHANGE' ){
        let findUsersPage_Copy = {...findUsersPage}
        findUsersPage_Copy.users = findUsersPage.users.map(i => {
            if (i.id === action.id){
                let new_i = {...i}
                if (new_i.followed === true){
                    new_i.followed = false
                } else if (new_i.followed === false){
                    new_i.followed = true
                }
                return new_i
            }
            return i
        })
        return findUsersPage_Copy
    } else if (action.type === 'SET-USERS'){
        let findUsersPage_Copy = {...findUsersPage}
        findUsersPage_Copy.users = action.users
        return findUsersPage_Copy 
    } else if (action.type === 'CHANGE-CURRENT-PAGE'){
        let findUsersPage_Copy = {...findUsersPage}
        findUsersPage_Copy.currentPage = action.currentPage
        return findUsersPage_Copy
    } else if(action.type === 'GET-TOTAL-USERS'){
        let findUsersPage_Copy = {...findUsersPage}
        findUsersPage_Copy.totalUsersCount = action.amount
        return findUsersPage_Copy
    } else if (action.type === 'CHANGE-LOADING-START'){
        let findUsersPage_Copy = {...findUsersPage}
        findUsersPage_Copy.isLoading = true
        return findUsersPage_Copy
    } else if (action.type === 'CHANGE-LOADING-STOP'){
        let findUsersPage_Copy = {...findUsersPage}
        findUsersPage_Copy.isLoading = false
        return findUsersPage_Copy
    } else if (action.type === 'BUTTON-TOGGLE'){
        const findUsersPage_Copy = {...findUsersPage}
        findUsersPage_Copy.isClicked = [...findUsersPage.isClicked]
        findUsersPage_Copy.isClicked.push(action.id)
        return findUsersPage_Copy
    } else if (action.type === 'BUTTON-TOGGLE2'){
        const findUsersPage_Copy = {...findUsersPage}
        findUsersPage_Copy.isClicked = findUsersPage.isClicked.filter(item => {
            return item != action.id
        })
        return findUsersPage_Copy

    }

    return findUsersPage
}

export const getUsers_Thunk_Creator = (currentPage,pageSize) => {
    return (dispatch) => {
        dispatch(loadingSTART())
        AxiosAPI.getUsers(currentPage, pageSize)
        .then(data => {
        dispatch(setUsers(data.items))
        dispatch(getUsersAmount(data.totalCount))
        dispatch(loadingSTOP()) 
        })
    }
}

export const getUsers_newPage_Thunk_Creator = (currentPage,pageSize) => {
    return (dispatch) => {
        dispatch(changeCurrentPage(currentPage))
        dispatch(loadingSTART())
        AxiosAPI.getUsers(currentPage,pageSize)
        .then(data => {
            dispatch(setUsers(data.items))
            dispatch(loadingSTOP())
        })       
    }
}

export const subscribeUser_Thunk_Creator = (id) => {
    return (dispatch) => {
        dispatch(isClicked_Toggle(id))
        AxiosAPI.subscribeUser(id)
        .then(responce => {
            if(responce.data.resultCode === 0){
                dispatch(change(id))
                dispatch(isClicked_Toggle2(id))
            }
        })    
    }
}


export const deleteUser_Thunk_Creator = (id) => {
    return (dispatch) => {
        dispatch(isClicked_Toggle(id))
        AxiosAPI.deleteUser(id)
        .then(responce => {
            if (responce.data.resultCode === 0){
                dispatch(change(id))
                dispatch(isClicked_Toggle2(id))
               
                
            }
        })
    }   
}


