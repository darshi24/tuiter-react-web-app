import { createSlice } from "@reduxjs/toolkit";
import profile from "../data/profile.json";

const profileSlice = createSlice({
    name: "currentUser",
    initialState: profile,
    reducers : {
        updateProfile(state, action) {
            state.firstname = action.payload.firstname;
            state.lastname = action.payload.lastname;
            state.bio = action.payload.bio;
            state.location = action.payload.location;
            state.dateOfBirth = action.payload.dateOfBirth;
        }
    }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;