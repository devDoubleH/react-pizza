import { combineReducers } from "redux";

import reducer from "./reducer";

const reducers = combineReducers({
  reducer,
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

export default rootReducer;
