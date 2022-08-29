import { combineReducers } from "redux";
import TaskReducer from "./reducers/TaskReducer";
import UserReducer from "./reducers/UserReducer";

const rootReducer = combineReducers({
  tasks: TaskReducer,
 users:UserReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
