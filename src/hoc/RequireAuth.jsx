
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"
import { getDataUser } from "../redux/Header-Reducer"
import { AxiosAPI } from "../API/AxiosQuery"

const state_props = (state) => {
    return {
        isGet: state.headerPage.isGet
    }
}
export const RequireAuth_Hoc_Creator = (Component) => {
    return connect(state_props)((props) =>{
        if (!props.isGet) return <Navigate  to='/login' />
        return (
            <Component {...props} />
        )
        
    })
}


