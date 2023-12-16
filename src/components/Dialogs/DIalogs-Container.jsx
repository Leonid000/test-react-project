import Dialogs from "./Dialogs"
import {connect} from 'react-redux'
import { RequireAuth_Hoc_Creator } from "../../hoc/RequireAuth"
import { compose } from "redux"


const state_props = (state) => {
    return {
        dialogPage: state.dialogPage,
        
    }
}

const dispatch_props = (dispatch) => {
    return {
        addMessageWrapper: () => {
            dispatch({
                type: 'ADD-MESSAGE'
            })
        },
        updateMessageWrapper: (text) => {
            dispatch({
                type: 'UPDATE-MESSAGE',
                text: text
            })
        }
    }
}



const DialogsContainer = compose(
    connect(state_props,dispatch_props),
    RequireAuth_Hoc_Creator
)(Dialogs)


export default DialogsContainer;
