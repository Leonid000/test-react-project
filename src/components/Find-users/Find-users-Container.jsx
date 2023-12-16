import React from "react";
import { connect } from "react-redux";
import { change } from "../../redux/Find_Users-Reducer";
import { setUsers } from "../../redux/Find_Users-Reducer";
import { changeCurrentPage } from "../../redux/Find_Users-Reducer";
import { getUsersAmount } from "../../redux/Find_Users-Reducer";
import { loadingSTART } from "../../redux/Find_Users-Reducer";
import { loadingSTOP } from "../../redux/Find_Users-Reducer";
import Find_Users from "./Find-users";
import axios from 'axios'
import { AxiosAPI } from "../../API/AxiosQuery";
import {isClicked_Toggle, isClicked_Toggle2} from "../../redux/Find_Users-Reducer";
import { getUsers_Thunk_Creator } from "../../redux/Find_Users-Reducer";
import { getUsers_newPage_Thunk_Creator, subscribeUser_Thunk_Creator, deleteUser_Thunk_Creator } from "../../redux/Find_Users-Reducer";
import { findUsersPage, pageSize,totalUsersCount,currentPage, isLoading, isClicked } from "../../redux/Find_Users-Selector";
import { findUsersPageSelector } from "../../redux/Find_Users-Selector";


class Find_Users_API extends React.Component {
    
    componentDidMount(){
           this.props.getUsers_Thunk_Creator(this.props.currentPage, this.props.pageSize)
    }
    changeCurrentPage = (item) => {
        this.props.getUsers_newPage_Thunk_Creator(item, this.props.pageSize)      
    }
    render(){
    let amount_pages = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    return ( 
        <Find_Users
            isClicked={this.props.isClicked}
            isClicked_Toggle={this.props.isClicked_Toggle}
            isClicked_Toggle2={this.props.isClicked_Toggle2}
            amount_pages={amount_pages}
            changeCurrentPage={this.changeCurrentPage}
            change={this.props.change}
            findUsersPage={this.props.findUsersPage}
            currentPage={this.props.currentPage}
            user={this.props.user}
            isLoading={this.props.isLoading}
            subscribeUser_Thunk_Creator={this.props.subscribeUser_Thunk_Creator}
            deleteUser_Thunk_Creator={this.props.deleteUser_Thunk_Creator}

        />
    )
    }
}

const state_pops = (state) => {
    return {
        findUsersPage: findUsersPageSelector(state),
        pageSize: pageSize(state),
        totalUsersCount: totalUsersCount(state),
        currentPage: currentPage(state),
        isLoading: isLoading(state),
        isClicked: isClicked(state)
    }
}



const dispatch_props = {
    change,
    setUsers,
    changeCurrentPage,
    getUsersAmount,
    loadingSTART,
    loadingSTOP,
    getUsers_Thunk_Creator,
    getUsers_newPage_Thunk_Creator,
    subscribeUser_Thunk_Creator,
    deleteUser_Thunk_Creator
}

const FindUsersContainer = connect(state_pops,dispatch_props)(Find_Users_API)
export default FindUsersContainer


