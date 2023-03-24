import {useSelector} from "react-redux";
import ProfileDetails from "./profile-details";
import {Link} from "react-router-dom";

const ProfileComponent = () => {
    const user
        = useSelector(state => state.profile);
    return(
        <div>
            <div className="row position-relative">
                <img src={user.bannerPicture}/>
                <img src={user.profilePicture} className="position-absolute wd-nudge-up-left wd-image-size-100-100 rounded-pill"/>
            </div>

             <Link to="../edit-profile" className="btn btn-primary float-end rounded-pill col-3 mt-2" >Edit Profile</Link>

            <br/><br/>
            <ProfileDetails user={user}/>

        </div>
    )
}

export default ProfileComponent;