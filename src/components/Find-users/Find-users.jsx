import React, { useState } from 'react'
import image from '../../img/avatar.png'
import { setUsers_AC } from '../../redux/Find_Users-Reducer'
import ReactPaginate from 'react-paginate';
import Loader from '../Loader/Loader';
import { NavLink, redirect } from 'react-router-dom';
import axios, { Axios } from 'axios';
import { AxiosAPI } from '../../API/AxiosQuery';
import { pageSize } from '../../redux/Find_Users-Selector';

const User = (props) => {
   
    const postRequest_to_followUser = () => {
        props.subscribeUser_Thunk_Creator(props.id) 
    }
    const deleteRequest_to_unfollowUser = () => {
        props.deleteUser_Thunk_Creator(props.id)
    }

    return (
        <div id={props.id} className='user_item'>
            <div className='user_item_logo'>
                <NavLink to={`/profile/${props.id}`}>
                    <img src={ props.photo.small === null ? image : props.photo.small} alt="" />
                </NavLink> 
                <button disabled={props.isClicked.includes(props.id)} onClick={props.statusFollow ? deleteRequest_to_unfollowUser : postRequest_to_followUser} 
                    className={props.statusFollow ? 'button_unfollow' : 'button_follow'}
                    >{props.statusFollow ? 'unfollow' : 'follow'}</button>
                <div className='user_friend' >{props.statusFollow ? 'У вас в друзьях' : 'не в друзьях'}</div>
            </div>
            <div className='user_item_container'>
                <div>{props.name}</div>
                <div>{props.name}</div>
                <div>{props.name}</div>
                <div>{props.message}</div>
            </div>
        </div>
    )
}




const UsersLIST = (props) => {
    let usersArray = props.findUsersPage.users.map(item => {
        return <User 
        subscribeUser_Thunk_Creator={props.subscribeUser_Thunk_Creator}
        deleteUser_Thunk_Creator={props.deleteUser_Thunk_Creator}
        isClicked={props.isClicked}
        name={item.name} 
        statusFollow={item.followed}
        id={item.id} 
        change={props.change}
        photo={item.photos}
        />
    })
    return (
        
        <div className='user_list'>
            {usersArray}
        </div>
    )
}




 


let forceItem = 0;
const Paginate = (props) => {
    let handlePageClick = (data) => {
        let item = data.selected + 1
        props.changeCurrentPage(item)
        forceItem = data.selected
    }
    return ( 
        <ReactPaginate
        containerClassName='pagination'
        pageClassName='page-item'
        pageLinkClassName='page-link'
        breakClassName='page-item'
        breakLinkClassName='page-link'
        breakLabel="..."
        nextLabel="next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={props.amount_pages}
        previousLabel="previous"
        renderOnZeroPageCount={null}
        activeClassName='selecteds'
        previousClassName='previous'
        nextClassName='previous'
        marginPagesDisplayed={0}
        forcePage={forceItem}   
      />
    )
}
let  Find_Users = (props) => {
    //////Тренирока пагинации
   const totalUsers = 777;
   const pageSize = 13;
   const amountPages = Math.ceil(totalUsers/pageSize)
   let i = 1;
   const array = [];
    while (i < amountPages){
        array.push(i)
        ++i
    }
    const portionSize = 10;
    const amountPortion = Math.ceil(amountPages/portionSize)
    const [portion, setPortion] = useState(3)
    const left_border = (portion - 1) * portionSize + 1
    const rigth_border = portion * portionSize
   ///////////////////////////////
    
    return (
         <div className='find_users_wrapper' >
                <div className='find_users_header'>
                    {props.user}
                </div>  
                <div>
                    {portion > 1 && 
                        <button onClick={() => {setPortion(portion - 1)}}>Назад</button>    
                    }
                   {array.map(item => {
                        if(item >= left_border && item <= rigth_border){
                            return <span>{item}</span>
                        }
                   })
                   }
                   {
                    portion < amountPortion && 
                        <button onClick={() => {setPortion(portion + 1)}}>Вперед</button>
                   }
                </div>  
                {props.isLoading == true && <Loader/> } 
                <div className='find_user_pages'>
                    <Paginate amount_pages={props.amount_pages}
                    changeCurrentPage={props.changeCurrentPage}
                    currentPage={props.currentPage}
                    />
                </div>
                <UsersLIST 
                subscribeUser_Thunk_Creator={props.subscribeUser_Thunk_Creator}
                deleteUser_Thunk_Creator={props.deleteUser_Thunk_Creator}
                isClicked={props.isClicked}
                findUsersPage={props.findUsersPage}
                change={props.change} />
         </div>
    )
}
export default Find_Users
