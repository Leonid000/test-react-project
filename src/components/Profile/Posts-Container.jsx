import Posts from "./Posts";
import {connect} from 'react-redux'

const state_props = (state) => {
    return { 
        profilePage: state.profilePage,
    }
} 
const dispatch_props = (dispatch) => {
    return {
        addPostWrapper: (value)  => {
            dispatch({
                type: 'ADD-POST',
                value: value
            })
        },
    }
}

const PostsContainer = connect(state_props,dispatch_props)(Posts)
export default PostsContainer;