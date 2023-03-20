import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {updateProfile} from "../reducers/profile-reducer";
import {useState} from "react";
import {redirect} from "react-router";
const EditProfileComponent = () => {
    const user = useSelector(state => state.profile);
    const [profile, setProfile] = useState({
        "firstname" : user.firstname,
        "lastname" : user.lastname,
        "bio" : user.bio,
        "location" : user.location,
        "dateOfBirth" : user.dateOfBirth
    });
    const dispatch = useDispatch();
    const saveDetailsHandler = (user) => {
        dispatch(updateProfile(user))
    }
    const firstnameChangeHandler = (event) => {
        const newfirstname = event.target.value;
        const newProfile = {
            ...profile,
            firstname : newfirstname
        }
        setProfile(newProfile)
    }
    const lastnameChangeHandler = (event) => {
        const newlastname = event.target.value;
        const newProfile = {
            ...profile,
            lastname : newlastname
        }
        setProfile(newProfile)
    }
    const bioChangeHandler = (event) => {
        const newbio = event.target.value;
        const newProfile = {
            ...profile,
            bio : newbio
        }
        setProfile(newProfile)
    }
    const locationChangeHandler = (event) => {
        const newlocation = event.target.value;
        const newProfile = {
            ...profile,
            location : newlocation
        }
        setProfile(newProfile)
    }
    const dobChangeHandler = (event) => {
        const newdob = event.target.value;
        const newProfile = {
            ...profile,
            dateOfBirth : newdob
        }
        setProfile(newProfile)
    }
    const cancelProfileSaveHandler = () => {

    }
    return(
        <div>
            <div className="justify-content-between">
                <Link to="../profile" className="text-decoration-none"> X </Link>
            </div>
            <div className="row">
                <img src={user.bannerPicture}/>
            </div>
            <div className="row mt-2 justify-content-between align-items-start">
                <img src={user.profilePicture} className="wd-image-size-80-80 col-9 rounded-pill"/>
                <Link to="../edit-profile" className="btn btn-primary float-end rounded-pill col-3">Edit Profile</Link>
            </div>


            <label className="form-label">First Name</label>
            <input onChange={firstnameChangeHandler} className="form-control" value={profile.firstname}/>

            <label className="form-label">Last Name</label>
            <input onChange={lastnameChangeHandler} className="form-control" value={profile.lastname}/>

            <label className="form-label">Bio</label>
            <input onChange={bioChangeHandler} className="form-control" value={profile.bio}/>

            <label className="form-label">Location</label>
            <input onChange={locationChangeHandler} className="form-control" value={profile.location}/>

            <label className="form-label">Date Of Birth</label>
            <input onChange={dobChangeHandler}className="form-control" value={profile.dateOfBirth}/>

            <Link to="../profile" onClick={() => saveDetailsHandler(profile)} className="mt-2 btn btn-primary rounded-pill"> Save </Link>
        </div>

    )
}

export default EditProfileComponent;