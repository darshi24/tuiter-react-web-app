import React from "react";
const WhoToFollowListItem = (
    {who}) => {
        return (
            <div className="list-group-item d-inline-flex justify-content-between">
                <div className="wd-float-left d-inline-flex">
                    <img className="wd-user-image" src={who.avatarIcon}/>
                    <div className="ms-2">
                        <div>
                            <span className="wd-suggested-post-author"> {who.userName} </span>
                            <span><i className="fas fa-check-circle" style={{"fontSize": "12px"}}></i></span>
                        </div>
                        <div>@{who.handle}</div>
                    </div>
                </div>
                <button className="btn btn-primary wd-follow-button">Follow</button>

            </div>
        );
}

export default WhoToFollowListItem;