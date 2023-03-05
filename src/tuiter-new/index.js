
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import HomeComponent from "./home";
import {Route, Routes} from "react-router";
function Tuiter() {
    return(
        <div className="row mt-2">
            <NavigationSidebar activePage='explore'/>
            <div className="col-10 col-lg-7 col-xl-6">
                <Routes>
                    <Route path="home" element={<HomeComponent/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                </Routes>
            </div>
            <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 ">
                <WhoToFollowList/>
            </div>
        </div>
    );
}
export default Tuiter