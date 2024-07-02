import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name : "config",
    initialState : {
        lang : "en",
        showProfilePicture : false,
        movieCategories : []
    },
    reducers : {
        changeLanguage : (state, action) => {
            state.lang = action.payload
        },
        modifyAppConfig : (state, action) => {
            return state = {
                ...state,
                ...action.payload
            }
        }
    }
})

export const {changeLanguage, modifyAppConfig}  =  configSlice.actions

export default configSlice.reducer