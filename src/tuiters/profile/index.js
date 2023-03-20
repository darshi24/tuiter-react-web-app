import {useSelector} from "react-redux";
import ProfileDetails from "./profile-details";
import {Link} from "react-router-dom";

const ProfileComponent = () => {
    const user
        = useSelector(state => state.profile);
    return(
        <div>
            <div className="row">
                <img src={user.bannerPicture}/>
            </div>
            <div className="row mt-2 justify-content-between align-items-start">
                <img src={user.profilePicture} className="wd-image-size-80-80 col-9 rounded-pill"/>
                <Link to="../edit-profile" className="btn btn-primary float-end rounded-pill col-3">Edit Profile</Link>
            </div>

            <ProfileDetails user={user}/>

        </div>
    )
}

export default ProfileComponent;