import { all, fork } from "redux-saga/effects";
import taskSaga from "~/redux/sagas/TaskSagas/taskSaga";
import userSaga from "./UserSagas/userSaga";

export function* rootSaga() {
  yield all([
    fork(taskSaga),
    fork(userSaga)
   ]);
}
