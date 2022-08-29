import { userTypes, UserState,UserActions } from "~/Interfaces";

const initialState: UserState = {
  loading: false,
  users: [],
  error: null
};

export default (state = initialState, action: UserActions) => {
  switch (action.type) {
    case userTypes.GET_USER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case userTypes.GET_USER_SUCCESS:
        console.log('action.payload',action.payload)
      return {
        ...state,
        loading: false,
        users: action.payload.users,
        error: null
      };
    case userTypes.GET_USER_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload.error
      };
    default:
      return {
        ...state
      };
  }
};
