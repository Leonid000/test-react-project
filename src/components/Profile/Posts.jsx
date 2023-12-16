import image from '../../img/avatar.png'
import React, {useRef, RefObject} from 'react';
import {Field, reduxForm} from 'redux-form';
import Textarea_app from '../Forms/Textarea_app';
import { requiredField } from '../../validators/Validator';
import { maxLength_creator } from '../../validators/Validator';
const maxLength4 = maxLength_creator(4)

const Textarea = (props) => {
    
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='textarea' component={Textarea_app}
                validate={[requiredField,maxLength4]} />
            </div>
            <div>
                <button type='submit' >Submit</button>
            </div>
        </form>
    )
}

const TextareaRedux_Form = reduxForm({
    form: 'profile'
})(Textarea)

const Post = (props) => {
    return (
        <div>
            <div className='Post'>
                < img className='post_avatar' src={image} alt="" />
                <div className='post_content'>{props.value}</div>
                <div className='post_likes'>likes <div>{props.likesCount}</div></div>
            </div>
            
        </div>
        
    )
}

const Posts = (props) => {
    console.log('Посты')
    const onSubmit = (formData) => {
        props.addPostWrapper(formData.textarea)
        formData.textarea = ''
    }
        let postsRows = props.profilePage.posts.map(function(item){
            return <Post value={item.caption} likesCount={item.likesCount} />
})
    return (
        <div className="Posts">
            <TextareaRedux_Form 
                onSubmit={onSubmit}
                form={props.form}
                
            />
           {postsRows}
        
        </div>
    )
}

export default Posts; 

