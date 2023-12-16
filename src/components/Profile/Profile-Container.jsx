import React, { useEffect } from 'react'
import Profile from './Profile'
import { connect } from "react-redux";
import { getProfileUser } from '../../redux/Profile-Reducer';
import {Navigate, useNavigate, useParams } from "react-router-dom"
import { getProfile_Thunk_Creator } from '../../redux/Profile-Reducer';
import { RequireAuth_Hoc_Creator } from '../../hoc/RequireAuth';
import { compose } from 'redux';
import { getStatus_Thunk_Creator } from '../../redux/Profile-Reducer';
import { updateStatus_Thunk_Creator } from '../../redux/Profile-Reducer';


const Profile_API = (props) => {
    const navigate = useNavigate()
    useEffect(() => {
        let userID = props.params.id
        if(!userID){
            userID = props.myID;
            if(!userID ){
                navigate("/login")
            }
        }
       
        if (userID){
            props.getProfile_Thunk_Creator(userID)
            props.getStatus_Thunk_Creator(userID)
        }
       
         
          
    },[])

    return (
        <Profile 
        updateStatus={props.updateStatus_Thunk_Creator}
        status={props.status}
        profileUser={props.profileUser} />
    )
}


let state_props = (state) => {
    return {
        profileUser: state.profilePage.profileUser,
        status: state.profilePage.status,
        myID: state.headerPage.id
        
    }
}
let dispatch_props = {
    getProfileUser,
    getProfile_Thunk_Creator,
    getStatus_Thunk_Creator,
    updateStatus_Thunk_Creator

    
}
let ComponentWithRouterProp = (props) => {
    let params = useParams();
    return (
        <Profile_API {...props} params={params} />
    )
}
let ProfileContainer = compose(
    connect(state_props,dispatch_props)
)(ComponentWithRouterProp)



export default ProfileContainer

