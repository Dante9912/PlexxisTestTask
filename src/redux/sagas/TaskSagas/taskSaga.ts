import { all,  put, takeLatest } from "redux-saga/effects";
import {
  getTasksFailure,
  getTasksSucess,
} from "~/redux/actions/TaskActions";
import { taskTypes } from "~/Interfaces";
import { taskDummyData } from "~/global";


function* getTaskSaga() {
  try {
    const response = taskDummyData;
    yield put(
        getTasksSucess({
        tasks: response
      })
    );
  } catch (e) {
    yield put(
        getTasksFailure({
        error: e.message
      })
    );
  }
}

function* taskSaga() {
  yield all([takeLatest(taskTypes.GET_TASK_REQUEST, getTaskSaga)]);
}

export default taskSaga;
