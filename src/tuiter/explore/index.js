import PostSummaryList from "../post-summary-list";
import React from "react";
const ExploreComponent = () => {
    return(
        <div>
            <div className="row align-items-center">
                <div className="col-11">
                    <div className="position-relative">
                        <input type="text" className="form-control rounded-pill ps-5" placeholder="Search Twitter"/>
                    <span className="position-absolute wd-nudge-bottom-left-7">
                        <i className="fa fa-search"></i>
                    </span>
                    </div>
                </div>
                <div className="col-1 p-1">
                    <a href="explore-settings.html"
                       className="fa fa-cog ms-2 border-0 text-decoration-none  text-primary"></a>
                </div>
            </div>
            <div>
                <ul className="nav nav-tabs mt-2">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">For you</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Trending</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Sports</a>
                    </li>
                    <li className="nav-item d-none d-md-block">
                        <a className="nav-link" href="#">Entertainment</a>
                    </li>
                </ul>
            </div>
            <div className="list-group">
                <div className="list-group-item p-0 ">
                    <img src="../../../public/images/startship.jpg" className="card-img"/>
                    <div className="wd-text-on-image">SpaceX's Starship</div>

                </div>
                <PostSummaryList/>


            </div>
        </div>
    );
};
export default ExploreComponent;