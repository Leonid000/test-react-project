
import { disconnect } from "process";
import React from "react";
import { LanguageServiceMode } from "typescript";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from "./components/Nav/Nav";
// import DialogsContainer from "./components/Dialogs/DIalogs-Container";
import News from "./components/News/News";
import FindUsersContainer from "./components/Find-users/Find-users-Container";
import SettingsPage from "./components/settings/settings";
import ProfileContainer from "./components/Profile/Profile-Container";
import HeaderContainer from "./components/Header/Header-Container";
import Login from "./components/Login/Login";
import {connect} from 'react-redux'
import { initializedApp_Thunk_Creator } from "./redux/App-Reducer";
import Loader_main from "./components/Loader/Loader_main";
import {lazy} from 'react'
import { Suspense } from "react";
const DialogsContainer_lazy = lazy(() => import('./components/Dialogs/DIalogs-Container'));


const App_wrapper = () => {
    return (
        <div className="app_wrapper">
            <HeaderContainer/>
            <Nav/>
            <div className="app_content">
                <Routes>
                    <Route path="/profile/:id?" element={<ProfileContainer/>}/>
                    <Route path="/dialogs" element={
                         <Suspense fallback={<div>loading..</div>}>
                            <DialogsContainer_lazy/>
                         </Suspense>
                    }/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/find-users"element={<FindUsersContainer/>} />
                    <Route path="/settings" element={<SettingsPage/>} />
                    <Route path="/login" element={<Login/>} />
                </Routes>
            </div>
        </div>
    )
}




class App extends React.Component <any,any> {
    
    componentDidMount(){
        this.props.initializedApp_Thunk_Creator()
    }   
    render() {
        return (
            <div>
                {this.props.initialized ? <App_wrapper/> : <p></p>}
            </div>
        )
    }
}


const state_props = (state:any) => {
    return {
        initialized: state.appPage.initialized_App 
    }
}
const dispatch_props = {
    initializedApp_Thunk_Creator
}

const AppConnect = connect(state_props,dispatch_props)(App)

export default AppConnect;

