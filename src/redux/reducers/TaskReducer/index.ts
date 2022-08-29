import { TaskActions, TaskState,taskTypes } from "~/Interfaces";

const initialState: TaskState = {
  loading: false,
  tasks: [],
  error: null
};

export default (state = initialState, action: TaskActions) => {
  switch (action.type) {
    case taskTypes.GET_TASK_REQUEST:
      return {
        ...state,
        loading: true
      };
    case taskTypes.GET_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: action.payload.tasks,
        error: null
      };
    case taskTypes.GET_TASK_FAILURE:
      return {
        ...state,
        loading: false,
        tasks: [],
        error: action.payload.error
      };
    default:
      return {
        ...state
      };
  }
};
