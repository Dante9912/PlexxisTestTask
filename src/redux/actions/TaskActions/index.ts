import { getTaskFailure, getTaskFailurePayload, getTaskRequest, getTaskSuccess, getTaskSuccessPayload, taskTypes } from "~/Interfaces";



export const getTasksRequest = (): getTaskRequest => ({
  type: taskTypes.GET_TASK_REQUEST
});

export const getTasksSucess = (
  payload: getTaskSuccessPayload
): getTaskSuccess => ({
  type: taskTypes.GET_TASK_SUCCESS,
  payload
});

export const getTasksFailure = (
  payload: getTaskFailurePayload
): getTaskFailure => ({
  type: taskTypes.GET_TASK_FAILURE,
  payload
});