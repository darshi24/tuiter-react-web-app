const HomeItem = ({post}) => {
    return(
        <div className="row list-group-item d-inline-flex ">
            <div className="col-1 ps-1 pe-1 d-flex justify-content-center">
                <img src={post.avatarIcon} className="wd-user-image"/>
            </div>
            <div className="col-11 ps-3 pe-1">
                <div>
                    <span className="wd-suggested-post-author">{post.name} </span>
                    <span><i className="fas fa-check-circle" style={{"fontSize": "12px"}}></i></span>
                    <span className="wd-font-size-12 wd-light-gray-text"> {post.username}</span>
                    <span className="wd-font-size-12 wd-light-gray-text"> - ${post.postTime}</span>
                </div>
                <div className="wd-font-size-13">
                    {post.postContent}
                </div>
                <div className="list-group rounded-4">
                    <img src={post.postImage} className="list-group-item p-0"/>
                    <div className="list-group-item p-1">
                        <div
                            className="wd-font-size-13">{post.featuredPostTitle === undefined ? '' : post.featuredPostTitle}</div>
                        <div
                            className="wd-font-size-13 wd-light-gray-text">{post.featuredPostContent === undefined ? '' : post.featuredPostContent}</div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-3">
                        <span><i className="far fa-comment" style={{"color": "rgb(110,118,125)"}}></i></span>
                        <span className="wd-light-gray-text wd-font-size-13">{post.postComments}</span>
                    </div>
                    <div className="col-3">
                        <span><i className="fas fa-retweet" style={{"color": "rgb(110,118,125)"}}></i></span>
                        <span className="wd-light-gray-text wd-font-size-13">{post.postReplies}</span>
                    </div>
                    <div className="col-3">
                        <span><i className="far fa-heart" style={{"color": "rgb(110,118,125)"}}></i></span>
                        <span className="wd-light-gray-text wd-font-size-13">{post.postLikes}</span>
                    </div>
                    <div className="col-3">
                        <span><i className="fas fa-inbox" style={{"color": "rgb(110,118,125)"}}></i></span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default HomeItem;