import avatar from '../../img/avatar.png'
import Loader from '../Loader/Loader';
import { ProfileStatus } from './Profile_Status';
import Loader_main from '../Loader/Loader_main';
const   Profile_head = (props:any) => {
   let profileArr = props.profileUser.map((item:any)=> {
        return (
            <div className="profile_head">
                <div className="head_overlay"></div>
                <div className="head">
                        <img className="head_avatar" src={item.photos.large ? item.photos.large 
                            : avatar} alt="" /> 
                    <div className="head_content">
                        <div className="content_title">{item.fullName}</div>
                        <div className="content_about">{item.aboutMe}</div>
                        <div>{item.contacts.facebook}</div>
                        <div>{item.contacts.vk}</div>
                    </div>
                </div>
            </div>
        )
    })
    return (
       <div>
        <ProfileStatus 
            updateStatus = {props.updateStatus}
            status = {props.status}
             />
        {profileArr}
       </div>
    )
}
export default Profile_head;


{/* <div className="profile_head">
<div className="head_overlay"></div>
<div className="head">
    <img className="head_avatar" src={props.profileUser.photos.large ? props.profileUser.photos.large 
    : avatar} alt="" /> 
    <div className="head_content">
         <div className="content_title">{props.profileUser.fullName}</div>
        <div className="content_about">{props.profileUser.aboutMe}</div>
        <div>{props.profileUser.contacts.facebook}</div>
        <div>{props.profileUser.contacts.vk}</div>
    </div>
</div>
</div> */}