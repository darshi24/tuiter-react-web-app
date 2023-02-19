import PostListItem from "./PostListItem.js";
import posts from "./posts.js";

const PostList = () => {
    return(`
        <div class="list-group">
            ${
                posts.map(post => {
                    return(PostListItem(post));
                }).join('')
            }
        </div>    
    `);
}
export default PostList;