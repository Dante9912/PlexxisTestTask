export interface TaskModalProps {
  open: boolean;
  handleClose?:  () => void;
}
export interface ITask {
  id: number;
  title: string;
  description: string;
  type:string;
  
}

export interface IUSER {
  id: number;
  name: string;
}
export interface UserState {
  loading: boolean;
  users: IUSER[];
  error: string | null;
}
export interface TaskState {
  loading: boolean;
  tasks: ITask[];
  error: string | null;
}

export interface DropDownMenuItem{
  label:string,
  value:number,
  color:string
}
export interface UsersMenuItem{
  id:number,
  name:string
}

//REDUX TYPES AND INTERFACES

 

export enum taskTypes {
  GET_TASK_REQUEST = "GET_TASK_REQUEST",
  GET_TASK_SUCCESS = "GET_TASK_SUCCESS",
  GET_TASK_FAILURE = "GET_TASK_FAILURE"
}





export interface getTaskSuccessPayload {
  tasks: ITask[];
}

export interface getTaskFailurePayload {
  error: string;
}


export interface getTaskRequest {
  type: typeof taskTypes.GET_TASK_REQUEST;
}

export type getTaskSuccess = {
  type: typeof taskTypes.GET_TASK_SUCCESS;
  payload: getTaskSuccessPayload;
};

export type getTaskFailure = {
  type: typeof taskTypes.GET_TASK_FAILURE;
  payload: getTaskFailurePayload;
};


export type TaskActions =
  | getTaskRequest
  | getTaskSuccess
  | getTaskFailure;




  
  export enum userTypes {
    GET_USER_REQUEST = "GET_USER_REQUEST",
    GET_USER_SUCCESS = "GET_USER_SUCCESS",
    GET_USER_FAILURE = "GET_USER_FAILURE"
  }
  
  
  
  
  
  export interface getUsersSuccessPayload {
    users: IUSER[];
  }
  
  export interface getUserFailurePayload {
    error: string;
  }
  
  
  export interface getUserRequest {
    type: typeof userTypes.GET_USER_REQUEST;
  }
  
  export type getUserSuccess = {
    type: typeof userTypes.GET_USER_SUCCESS;
    payload: getUsersSuccessPayload;
  };
  
  export type getUserFailure = {
    type: typeof userTypes.GET_USER_FAILURE;
    payload: getUserFailurePayload;
  };
  
  
  export type UserActions =
    | getUserRequest
    | getUserSuccess
    | getUserFailure;