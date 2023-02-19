const PostSummaryItem = (post) => {
    return(`
        <div class="list-group-item d-inline-flex justify-content-between">
            <div class="wd-float-left">
                <div class="wd-suggested-post-topic"> ${post.topic}</div>
                <div>
                    <span class="wd-suggested-post-author">  ${post.userName} </span>
                    <span><i class="fas fa-check-circle" style="font-size: 0.8em"></i></span>
                    <span class="wd-suggested-post-stat">${post.time === '' ? '' : '-'} ${post.time} </span>
                </div>
                <div class="wd-suggested-post-text-content"> ${post.title}</div>
                <div class="wd-suggested-post-stat">${post.tweets === undefined ? '' : post.tweets}</div>
            </div>
            
            <img class="wd-float-right wd-image-size-80-80 ms-3" src="${post.image}"/>
        </div>
    
    `)


}

export default PostSummaryItem;
