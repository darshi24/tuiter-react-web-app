import HomeItem from "./home-item";
import posts from "./posts.json";

const HomeComponent = () => {
    return(
        <div class="list-group">
            {
                posts.map(post =>
                    <HomeItem key={post._id} post={post}/>
                )
            }
        </div>    
    );
}
export default HomeComponent;