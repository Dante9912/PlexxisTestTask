import { getUserFailure, getUserFailurePayload, getUserRequest, getTaskSuccess, getUsersSuccessPayload, userTypes, getUserSuccess } from "~/Interfaces";



export const getUsersRequest = (): getUserRequest => ({
  type: userTypes.GET_USER_REQUEST
});

export const getUserSucess = (
  payload: getUsersSuccessPayload
): getUserSuccess => ({
  type: userTypes.GET_USER_SUCCESS,
  payload
});

export const getUsersFailure = (
  payload: getUserFailurePayload
): getUserFailure => ({
  type: userTypes.GET_USER_FAILURE,
  payload
});