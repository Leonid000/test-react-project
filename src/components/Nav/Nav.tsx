import {NavLink} from 'react-router-dom'




const Nav = ()=> {

    return (
        
             <nav className="nav">
                <NavLink to='/profile' ><div className="item">Profile</div></NavLink> 
                <NavLink  to='/dialogs' > <div className="item"> Dialogs </div> </NavLink>
                <NavLink  to='/news'><div className="item"> News  </div></NavLink>
                <NavLink  to='/find-users'><div className="item"> Find-Users  </div></NavLink>
                <NavLink  to='/settings'><div className="item"> Settings</div></NavLink>
                <NavLink  to='/login'><div className="item"> Login</div></NavLink>
                <div> 
                    
    
                </div>
            </nav>
       
        
    )
}

export default Nav; 