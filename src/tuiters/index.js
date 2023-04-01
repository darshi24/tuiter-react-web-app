
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import HomeComponent from "./home";
import ReduxHomeComponent from "./new-home";
import {Route, Routes} from "react-router";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import ProfileComponent from "./profile";
import profileReducer from "./reducers/profile-reducer";
import EditProfileComponent from "./edit-profile";
const store = configureStore(
    {reducer: {who: whoReducer, tuitsData:tuitsReducer, profile:profileReducer}});


function Tuiter() {
    return(
        <Provider store={store}>
            <div className="row mt-2">
                <NavigationSidebar/>
                <div className="col-10 col-lg-7 col-xl-6">
                    <Routes>
                        <Route path="home" element={<ReduxHomeComponent/>}/>
                        <Route path="explore" element={<ExploreComponent/>}/>
                        <Route path="profile" element={<ProfileComponent/>}/>
                        <Route path="edit-profile" element={<EditProfileComponent/>}/>
                    </Routes>
                </div>
                <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 ">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>

    );
}
export default Tuiter