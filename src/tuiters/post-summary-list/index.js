import React from "react";
// import postsArray from './posts.json';
import PostSummaryItem from "./post-summary-list-item";
import {useSelector} from "react-redux";

const PostSummaryList = () => {
    const postsArray = useSelector((state) => state.tuits)
    return(
        <div className="list-group mt-1">
            {
                postsArray.map(post =>
                    <PostSummaryItem
                        key={post._id} post={post}/> )

            }
        </div>
    );
};
export default PostSummaryList;