import { createSlice } from "@reduxjs/toolkit";

const bookmarkSlice = createSlice({
    name:'bookmarks',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
             state.items.push(action.payload)
        }
    }
})

export const {addItem} = bookmarkSlice.actions;

export default bookmarkSlice.reducer;