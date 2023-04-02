import React from "react";
import {tuitLikeToggle} from "../tuits-reducer"
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../../services/tuits-thunks";
const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();

    const likeHandler = (tuit) => {

        dispatch(updateTuitThunk({
            ...tuit,
            liked : true,
            likes : tuit.likes + 1
        }))
    }

    const dislikeHandler = (tuit) => {

        dispatch(updateTuitThunk({
            ...tuit,
            liked : false,
            likes : tuit.likes - 1
        }))
    }

    return(
        <div className="row mt-2">
            <div className="col-3">
                <span><i className="far fa-comment" style={{"color": "rgb(110,118,125)"}}></i></span>
                <span className="wd-light-gray-text wd-font-size-13">{tuit.replies}</span>
            </div>
            <div className="col-3">
                <span><i className="fas fa-retweet" style={{"color": "rgb(110,118,125)"}}></i></span>
                <span className="wd-light-gray-text wd-font-size-13">{tuit.retuits}</span>
            </div>
            <div className="col-3">
                {
                    tuit.liked ?
                        (<span><i onClick={() => dislikeHandler(tuit)} className="fas fa-heart" style={{"color": "red"}}></i></span>)
                        : (<span><i onClick={() => likeHandler(tuit)} className="far fa-heart" style={{"color": "rgb(110,118,125)"}}></i></span>)
                }
                {
                    tuit.liked ?
                        (<span onClick={() => dislikeHandler(tuit)} className="wd-light-gray-text wd-font-size-13" style={{"color": "red"}}>{tuit.likes}</span>)
                        : (<span onClick={() => likeHandler(tuit)} className="wd-light-gray-text wd-font-size-13">{tuit.likes}</span>)
                }
            </div>
            <div className="col-3">
                <span><i className="fas fa-inbox" style={{"color": "rgb(110,118,125)"}}></i></span>
            </div>
        </div>
    )
}

export default TuitStats;