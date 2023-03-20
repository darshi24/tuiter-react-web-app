import {createSlice} from "@reduxjs/toolkit";
import tuits from "./tuits.json"

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "avatarIcon": "../../images/nasa.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const tuitsSlice = createSlice({
    name : 'tuits',
    initialState : tuits,
    reducers : {
        tuitLikeToggle(state, action) {
            const tuit = state.find((tuit) =>
                tuit._id === action.payload._id)
            tuit.liked = !tuit.liked
            tuit.liked === false ? tuit.likes = tuit.likes - 1 : tuit.likes = tuit.likes + 1

        },
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        },

    }
})

export const {tuitLikeToggle, createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;