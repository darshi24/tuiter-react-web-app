const PostListItem = (post) => {
    return(`
        <div class="row list-group-item d-inline-flex ">
            <div class="col-1 ps-1 pe-1 d-flex justify-content-center">
                <img src="${post.avatarIcon}" class="wd-user-image"/>
            </div>
            <div class="col-11 ps-3 pe-1">
                <div>
                    <span class="wd-suggested-post-author">${post.name}</span>
                    <span><i class="fas fa-check-circle" style="font-size: 0.8em"></i></span>
                    <span class="wd-font-size-12 wd-light-gray-text">${post.username}</span>
                    <span class="wd-font-size-12 wd-light-gray-text"> - ${post.postTime}</span>
                </div>
                <div class="wd-font-size-13">
                    ${post.postContent}
                </div>
                <div class="list-group rounded-4">
                    <img src="${post.postImage}" class="list-group-item p-0"/>
                    <div class="list-group-item p-1">
                        <div class="wd-font-size-13">${post.featuredPostTitle === undefined ? '' : post.featuredPostTitle}</div>
                        <div class="wd-font-size-13 wd-light-gray-text">${post.featuredPostContent === undefined ? '' : post.featuredPostContent}</div>
                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-3">
                        <span><i class="far fa-comment" style="color: rgb(110,118,125)"></i></span>
                        <span class="wd-light-gray-text wd-font-size-13">${post.postComments}</span>
                    </div>
                    <div class="col-3">
                        <span><i class="fas fa-retweet" style="color: rgb(110,118,125)"></i></span>
                        <span class="wd-light-gray-text wd-font-size-13">${post.postReplies}</span>
                    </div>
                    <div class="col-3">
                        <span><i class="far fa-heart" style="color: rgb(110,118,125)"></i></span>
                        <span class="wd-light-gray-text wd-font-size-13">${post.postLikes}</span>
                    </div>
                    <div class="col-3">
                        <span><i class="fas fa-inbox" style="color: rgb(110,118,125)"></i></span>
                    </div>
                </div>
            </div>
        </div>
    `)
}

export default PostListItem;