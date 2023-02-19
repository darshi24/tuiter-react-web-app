import who from "./whos.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return(`
        <div class="list-group">
            <div class="list-group-item "> <b>Who to follow</b> </div>
            ${
                who.map(who_item => {
                    return (WhoToFollowListItem(who_item));
                }).join('')
            }
        </div>        
    `);
}

export default WhoToFollowList;
