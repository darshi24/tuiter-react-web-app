const NavigationSidebar = () => {
    return(`  
        <div class="list-group">
            <a href="#" class="list-group-item">
                <i class="fab fa-twitter"></i>
                <span class="d-none d-xl-inline d-xxl-inline"> </span>
            </a>
            <a href="#" class="list-group-item">
                <i class="fas fa-home"></i>
                <span class="d-none d-xl-inline d-xxl-inline"> Home </span>
            </a>
            <a href="#" class="list-group-item active">
                <i class="fas fa-hashtag"></i>
                <span class="d-none d-xl-inline d-xxl-inline"> Explore </span>
            </a>
            <a href="#" class="list-group-item">
                <i class="fas fa-bell"></i>
                <span class="d-none d-xl-inline d-xxl-inline"> Notifications </span>
            </a>
            <a href="#" class="list-group-item">
                <i class="fas fa-envelope"></i>
                <span class="d-none d-xl-inline d-xxl-inline"> Messages </span>
            </a>
            <a href="#" class="list-group-item">
                <i class="fas fa-bookmark"></i>
                <span class="d-none d-xl-inline d-xxl-inline"> Bookmarks </span>
            </a>
            <a href="#" class="list-group-item">
                <i class="fas fa-list"></i>
                <span class="d-none d-xl-inline d-xxl-inline"> Lists </span>
            </a>
            <a href="#" class="list-group-item">
                <i class="fas fa-user"></i>
                <span class="d-none d-xl-inline d-xxl-inline"> Profile </span>
            </a>
            <a href="#" class="list-group-item">
                <i class="fas fa-ellipsis-h"></i>
                <span class="d-none d-xl-inline d-xxl-inline"> More </span>
            </a>
        </div>
        <div>
            <a href="tweet.html" class="btn btn-primary wd-tweet-button mt-2"> Tweet </a>
        </div>

    `);
}
export default NavigationSidebar;