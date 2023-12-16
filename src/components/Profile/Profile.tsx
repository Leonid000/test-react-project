import fon from '../../img/fon.jpg'
import Profile_head from './Profile_Head';
import PostsContainer from './Posts-Container';
import { Navigate } from 'react-router-dom';
import { profile } from 'console';



const Profile = (props:any) => {
    return (
        <div className="content">
                <Profile_head
                    updateStatus = {props.updateStatus}
                    status={props.status}
                     profileUser={props.profileUser} />
                <PostsContainer />
         </div>
    )
}

export default Profile


