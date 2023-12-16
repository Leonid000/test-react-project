import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import { authorized_Thunk_Creator } from '../../redux/Header-Reducer'
import { deleteAuthorized_Thunk_Creator } from '../../redux/Header-Reducer'
import Input_app from '../Forms/Input_app'
import { requiredField } from '../../validators/Validator'



const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field  placeholder='login'  name='login' component={Input_app}
                validate = {[requiredField]}
                />
            </div>
            <div>
                <Field  placeholder='password' name='password' component='input' />
            </div>
            <div>
                <Field  type='checkbox' name='rememberMe' component='input' /> checkbox
            </div>
            <div className={`${props.error && 'form_common_error'}`} >
                    {props.error}
            </div>
            <br />
            <button type="submit" >submit</button>
            <div>-</div>
            <div>-</div>
            <div>-</div>
            <div>zhora.fedorov.1994@bk.ru</div>
            <div>Ohadi382</div>
        </form>
    )
}

const LoginRedux_Form = reduxForm({
    form: 'login'
})(LoginForm)




const Login_page = (props) => {
    const getData = (formData) => {
        const {login,password,rememberMe} = formData
        props.authorized_Thunk_Creator(login,password,rememberMe)
    }
    return (
        <>
            {
                !props.isGet && 
                    <LoginRedux_Form onSubmit={getData} />
            }
            {
                props.isGet && 
                    <div>
                        <button onClick={props.deleteAuthorized_Thunk_Creator}>logOut</button>
                    </div>
            }
        </>
       
    )
}

const state_props = (state) => {
    return {
        isGet: state.headerPage.isGet
    }
}
const dispatch_props = {
   authorized_Thunk_Creator,
   deleteAuthorized_Thunk_Creator
    
}
const Login_page_connect = connect(state_props,dispatch_props)(Login_page)

export default Login_page_connect


