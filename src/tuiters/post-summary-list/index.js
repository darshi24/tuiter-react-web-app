import React from "react";
// import postsArray from './posts.json';
import PostSummaryItem from "./post-summary-list-item";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findTuitsThunk} from "../../services/tuits-thunks";

const PostSummaryList = () => {
    const postsArray = useSelector(state => state.tuitsData)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])
    console.log(postsArray.tuits)
    return(
        <div className="list-group mt-1">
            {
                postsArray.tuits.map(post =>
                    <PostSummaryItem
                        key={post._id} post={post}/> )

            }
        </div>
    );
};
export default PostSummaryList;