const ProfileDetails = ({user}) => {
    return (
        <div>
            <div className="wd-suggested-post-author fs-3"> {user.firstname} {user.lastname} </div>
            <div className="wd-suggested-post-stat fs-6"> {user.handle} </div>
            <div> {user.bio}</div>
            <div >
                    <span className="pe-2">
                        <i className="fas fa-map-marker-alt"></i> {user.location}
                    </span>
                <span className="p-2">
                        <i className="fas fa-birthday-cake"></i> Born {user.dateOfBirth}
                    </span>
                <span className="p-2">
                        <i className="fas fa-calendar-alt"></i> Joined on {user.dateJoined}
                    </span>
            </div>
            <div >
                    <span className="pe-2">
                        <b>{user.followingCount}</b> Following
                    </span>
                <span className="pe-2">
                        <b>{user.followersCount}</b> Following
                    </span>
            </div>

        </div>
    )
}

export default ProfileDetails;