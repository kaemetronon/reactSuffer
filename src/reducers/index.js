import { combineReducers } from "redux";
import albumReducer from "./album/albumReducer";
import artistReducer from "./artist/artistReducer";
import commentReducer from "./comment/commentReducer";
import songReducer from "./song/songReducer";
import userReducer from "./user/userReducer";


export default combineReducers({
    albumR: albumReducer,
    artistR: artistReducer,
    commentR: commentReducer,
    songR: songReducer,
    userR: userReducer
});