const WhoToFollowListItem = (who) => {
    return(`
        <div class="list-group-item d-inline-flex justify-content-between">
            <div class="wd-float-left d-inline-flex">
                <img class="wd-user-image" src="${who.avatarIcon}"/>
                <div class="ms-2">
                    <div>
                        <span class="wd-suggested-post-author"> ${who.userName} </span>
                        <span><i class="fas fa-check-circle" style="font-size: 0.8em"></i></span>
                    </div>
                    <div>@${who.handle}</div>
                </div>
            </div>
            <button class="btn btn-primary wd-follow-button">Follow</button>
        </div>
    
    `);
}

export default WhoToFollowListItem;