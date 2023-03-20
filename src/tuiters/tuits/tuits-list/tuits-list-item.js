import React from "react";
import TuitStats from "../tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../tuits-reducer";
const TuitsListItem = ({tuit}) => {
    const dispatch = useDispatch()
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return(
        <div className="row list-group-item d-inline-flex ">
            <div className="col-1 ps-1 pe-1 d-flex justify-content-center">
                <img src={tuit.avatarIcon} className="wd-user-image"/>
            </div>
            <div className="col-11 ps-3 pe-1">
                <div>
                    <span className="wd-suggested-post-author">{tuit.userName} </span>
                    <span><i className="fas fa-check-circle" style={{"fontSize": "12px"}}></i></span>
                    <span className="wd-font-size-12 wd-light-gray-text"> {tuit.handle}</span>
                    <span className="wd-font-size-12 wd-light-gray-text"> - {tuit.time}</span>
                    <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit._id)}></i>
                </div>
                <div className="wd-font-size-13">
                    {tuit.tuit}
                </div>

                <TuitStats tuit={tuit}/>

            </div>
        </div>
    );
};
export default TuitsListItem;