import { combineReducers } from "redux";

import authentication from "../containers/auth/slice";
import api from "../api/apiSlice";
import playlistReducer from "../containers/playlist/slice";

const rootReducer = combineReducers({
  authentication,
  api,
  playlist: playlistReducer
});

export default rootReducer;
