import {configureStore} from "@reduxjs/toolkit"
import BookmarkSlice from "./BookmarkSlice";
const store = configureStore({
reducer:{
    bookmarks:BookmarkSlice
}
})
export default store;