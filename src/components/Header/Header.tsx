import { DiffieHellman, DiffieHellmanGroup } from 'crypto';
import image from '../../img/coca-colla.png'
import { NavLink } from 'react-router-dom';



const Header = (props:any) => {

    return (
        <header className="header">
                <img className="img_coca" src={image} alt="" />
                
                <div className='header_login'>
                {props.isGet ? props.login : <NavLink to='/login'>Login</NavLink>  }
                
                </div>
        </header>
    )
}

export default Header; 
