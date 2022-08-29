import { all,  put, takeLatest } from "redux-saga/effects";
import {
  getUsersFailure,
  getUserSucess,
} from "~/redux/actions/UserActions";

import { userTypes } from "~/Interfaces";
import { userDummyData } from "~/global";


function* getUserSaga() {
  try {
    const response = userDummyData;
    yield put(
        getUserSucess({
        users: response
      })
    );
  } catch (e) {
    yield put(
        getUsersFailure({
        error: e.message
      })
    );
  }
}

function* userSaga() {
  yield all([takeLatest(userTypes.GET_USER_REQUEST, getUserSaga)]);
}

export default userSaga;
