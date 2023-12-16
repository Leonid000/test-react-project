import {connect} from 'react-redux'
import Header from './Header'
import React from 'react'
import axios from 'axios'
import { AxiosAPI } from '../../API/AxiosQuery'

class Header_API extends React.Component {


    render(){
        return (
            <Header {...this.props} />
        )
    }
}




let state_props = (state) => {
    return {
        headerMessage: state.headerPage.headerMassage,
        isGet: state.headerPage.isGet,
        login: state.headerPage.login
    }
}
let dispatch_props = {
}


let HeaderContainer = connect(state_props,dispatch_props)(Header_API)
export default HeaderContainer