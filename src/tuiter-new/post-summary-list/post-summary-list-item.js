import React from "react";
const PostSummaryItem = ({post}) => {
    return(
        <div className="list-group-item d-inline-flex justify-content-between">
            <div className="wd-float-left">
                <div className="wd-suggested-post-topic"> {post.topic}</div>
                <div>
                    <span className="wd-suggested-post-author">  {post.userName} </span>
                    <span><i className="fas fa-check-circle" style={{"fontSize": "12px"}}></i></span>
                    <span className="wd-suggested-post-stat">{post.time === '' ? '' : '-'} {post.time} </span>
                </div>
                <div className="wd-suggested-post-text-content"> {post.title}</div>
                <div className="wd-suggested-post-stat">{post.tweets === undefined ? '' : post.tweets}</div>
            </div>

            <img className="wd-float-right wd-image-size-80-80 ms-3" src={post.image}/>
        </div>
    );
};
export default PostSummaryItem;