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
            <div className="row position-relative">
                <img src={user.bannerPicture}/>
                <img src={user.profilePicture} className="position-absolute wd-nudge-up-left wd-image-size-100-100 rounded-pill"/>
            </div>

            <br/>
            <br/>

            <div class="form-group">
                <div className="form-floating">
                    <input onChange={firstnameChangeHandler} className="form-control" value={profile.firstname}/>
                    <label className="form-label">First Name</label>
                </div>

                <div className="form-floating mt-2">
                    <input onChange={lastnameChangeHandler} className="form-control" value={profile.lastname}/>
                    <label className="form-label">Last Name</label>
                </div>

                <div className="form-floating mt-2">
                    <input onChange={bioChangeHandler} className="form-control" value={profile.bio}/>
                    <label className="form-label">Bio</label>
                </div>

                <div className="form-floating mt-2">
                    <input onChange={locationChangeHandler} className="form-control" value={profile.location}/>
                    <label className="form-label">Location</label>
                </div>

                <div className="form-floating mt-2">
                    <input onChange={dobChangeHandler}className="form-control" value={profile.dateOfBirth}/>
                    <label className="form-label">Date Of Birth</label>
                </div>


            </div>

            <Link to="../profile" onClick={() => saveDetailsHandler(profile)} className="mt-2 btn btn-primary rounded-pill"> Save </Link>
        </div>

    )
}

export default EditProfileComponent;