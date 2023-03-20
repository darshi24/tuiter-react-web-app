import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const activePage = paths[2];
    return (
        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
            <div className="list-group">
                <a href="twitter.html" className="list-group-item">
                    <i className="fab fa-twitter"></i>
                    <span className="d-none d-xl-inline d-xxl-inline"> </span>
                </a>
                <Link to="/tuiters/home" className={`list-group-item ${activePage === 'home' ? 'active' : ''}`}
                   id="home">
                    <i className="fas fa-home"></i>
                    <span className="d-none d-xl-inline d-xxl-inline"> Home </span>
                </Link>
                <Link to="/tuiters/explore" className={`list-group-item ${activePage === 'explore' ? 'active' : ''}`}
                   id="explore">
                    <i className="fas fa-hashtag"></i>
                    <span className="d-none d-xl-inline d-xxl-inline"> Explore </span>
                </Link>
                <Link to="/" className="list-group-item">
                    Labs
                </Link>
                <a href="notifications.html" className="list-group-item">
                    <i className="fas fa-bell"></i>
                    <span className="d-none d-xl-inline d-xxl-inline"> Notifications </span>
                </a>
                <a href="messages.html" className="list-group-item">
                    <i className="fas fa-envelope"></i>
                    <span className="d-none d-xl-inline d-xxl-inline"> Messages </span>
                </a>
                <a href="bookmarks.html" className="list-group-item">
                    <i className="fas fa-bookmark"></i>
                    <span className="d-none d-xl-inline d-xxl-inline"> Bookmarks </span>
                </a>
                <a href="lists.html" className="list-group-item">
                    <i className="fas fa-list"></i>
                    <span className="d-none d-xl-inline d-xxl-inline"> Lists </span>
                </a>
                <Link to="/tuiters/profile" className={`list-group-item ${activePage === 'profile' || activePage === 'edit-profile' ? 'active' : ''}`}>
                    <i className="fas fa-user"></i>
                    <span className="d-none d-xl-inline d-xxl-inline"> Profile </span>
                </Link>
                <a href="more.html" className="list-group-item">
                    <i className="fas fa-ellipsis-h"></i>
                    <span className="d-none d-xl-inline d-xxl-inline"> More </span>
                </a>
            </div>
            <div>
                <a href="tweet.html" className="btn btn-primary wd-tweet-button mt-2"> Tweet </a>
            </div>

        </div>


    );
};

export default NavigationSidebar;

