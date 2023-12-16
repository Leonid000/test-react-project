import { getAuthorized_Thank_Creator } from "./Header-Reducer"

const initialState = {
    initialized_App: false
}

const initialStateOn_AC = {
    type: 'INITIALIZED-ON'
}


const appReducer = (appPage = initialState, action) => {
    if(action.type === 'INITIALIZED-ON'){
        const appPageCopy = {...appPage}
        appPageCopy.initialized_App = true
        return appPageCopy
    }

    return appPage
}


export default appReducer

export const initializedApp_Thunk_Creator = () => {  
    return (dispatch) => {
       const result =  dispatch(getAuthorized_Thank_Creator())
        Promise.all([result]).then(() => {
            dispatch(initialStateOn_AC)
       })
    }
}

