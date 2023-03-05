import PostSummaryList from "./PostSummaryList.js";

const ExploreComponent = () => {
    return(`
        <div class="row align-items-center">
            <div class="col-11">
                <div class="position-relative">
                    <input type="text" class="form-control rounded-pill ps-5" placeholder="Search Twitter">
                    <span class="position-absolute wd-nudge-bottom-left-7">
                        <i class="fa fa-search"></i>
                    </span>
                </div>
            </div>
            <div class="col-1 p-1">
                <a href="explore-settings.html" class="fa fa-cog ms-2 border-0 text-decoration-none  text-primary" ></a>
            </div>
        </div>
        <div>
            <ul class="nav nav-tabs mt-2">
                <li class="nav-item">
                    <a class="nav-link active" href="#">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" >Sports</a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link" href="#" >Entertainment</a>
                </li>
            </ul>
        </div>
        <div class="list-group">
            <div class="list-group-item p-0 ">
                <img src="../../images/starship.jpg" class="card-img"/>
                <div class="wd-text-on-image">SpaceX's Starship</div>
        
            </div>
<!--            <PostSummaryList/>-->
            
            
        </div>
    `);
}

export default ExploreComponent;

// <div className="list-group-item d-inline-flex justify-content-between">
//     <div className="float-left">
//         <div className="wd-suggested-post-topic"> Web Development</div>
//         <div>
//             <span className="wd-suggested-post-author"> ReactJS </span>
//             <span><i className="fas fa-check-circle" style="font-size: 0.8em"></i></span>
//             <span className="wd-suggested-post-stat"> - 2h </span>
//         </div>
//         <div className="wd-suggested-post-text-content"> React.js is a component based front end library that makes it
//             very easy to build Single Page Applications or SPAs
//         </div>
//     </div>
//     <img className="wd-float-right wd-image-size-80-80 ms-3" src="../../images/react.png"/>
// </div>
// <div className="list-group-item d-inline-flex justify-content-between">
//     <div className="wd-float-left">
//         <div>
//             <span className="wd-suggested-post-author"> JavaScript </span>
//             <span><i className="fas fa-check-circle" style="font-size: 0.8em"></i></span>
//             <span className="wd-suggested-post-stat"> - 2h </span>
//         </div>
//         <div className="wd-suggested-post-text-content"> JavaScript is a programming language that can run on browsers
//             as well as desktops
//         </div>
//         <div className="wd-suggested-post-stat"> 123K Tweets</div>
//     </div>
//     <img className="wd-float-right wd-image-size-80-80 ms-3" src="../../images/javascript.png"/>
// </div>
// <div className="list-group-item d-inline-flex justify-content-between">
//     <div className="wd-float-left">
//         <div className="wd-suggested-post-topic"> Web Development</div>
//         <div>
//             <span className="wd-suggested-post-author"> JQuery </span>
//             <span><i className="fas fa-check-circle" style="font-size: 0.8em"></i></span>
//             <span className="wd-suggested-post-stat"> - 2h </span>
//         </div>
//         <div className="wd-suggested-post-stat"> 123K Tweets</div>
//     </div>
//     <img className="wd-float-right wd-image-size-80-80 ms-3" src="../../images/jquery.png"/>
// </div>
// <div className="list-group-item d-inline-flex justify-content-between">
//     <div className="wd-float-left">
//         <div className="wd-suggested-post-topic"> Web Development</div>
//         <div>
//             <span className="wd-suggested-post-author"> NodeJS </span>
//             <span><i className="fas fa-check-circle" style="font-size: 0.8em"></i></span>
//             <span className="wd-suggested-post-stat"> - 2h </span>
//         </div>
//         <div className="wd-suggested-post-stat"> 123K Tweets</div>
//     </div>
//     <img className="wd-float-right wd-image-size-80-80 ms-3" src="../../images/node.png"/>
// </div>