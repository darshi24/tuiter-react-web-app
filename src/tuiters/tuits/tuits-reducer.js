import {createSlice} from "@reduxjs/toolkit";
// import tuits from "./tuits.json"

import {findTuitsThunk, deleteTuitThunk, createTuitThunk, updateTuitThunk} from "../../services/tuits-thunks";

// const currentUser = {
//     "userName": "NASA",
//     "handle": "@nasa",
//     "avatarIcon": "../../images/nasa.png",
// };

// const templateTuit = {
//     ...currentUser,
//     "topic": "Space",
//     "time": "2h",
//     "liked": false,
//     "replies": 0,
//     "retuits": 0,
//     "likes": 0,
// }
const initialState = {
    tuits: [],
    loading: false
}

const tuitsSlice = createSlice({
    name : 'tuits',
    // initialState : tuits,
    initialState,
    // reducers : {
    //     tuitLikeToggle(state, action) {
    //         const tuit = state.find((tuit) =>
    //             tuit._id === action.payload._id)
    //         tuit.liked = !tuit.liked
    //         tuit.liked === false ? tuit.likes = tuit.likes - 1 : tuit.likes = tuit.likes + 1
    //
    //     },
    //     createTuit(state, action) {
    //         state.unshift({
    //             ...action.payload,
    //             ...templateTuit,
    //             _id: (new Date()).getTime(),
    //         })
    //     },
    //     deleteTuit(state, action) {
    //         const index = state
    //             .findIndex(tuit =>
    //                 tuit._id === action.payload);
    //         state.splice(index, 1);
    //     },
    //
    // },
    reducers:{},
    extraReducers: {
        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true
                state.tuits = []
            },
        [findTuitsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = payload
            },
        [findTuitsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [deleteTuitThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.tuits = state.tuits
                    .filter(t => t._id !== payload)
            },
        [createTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits.push(payload)
            },
        [updateTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const tuitNdx = state.tuits
                    .findIndex((t) => t._id === payload._id)
                state.tuits[tuitNdx] = {
                    ...state.tuits[tuitNdx],
                    ...payload
                }
            }



    }
})

// export const {tuitLikeToggle, createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;