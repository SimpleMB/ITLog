import { SET_LOADING, LOGS_ERROR, GET_LOGS, ADD_LOG, DELETE_LOG, SET_CURRENT, CLEAR_CURRENT, UPDATE_LOG } from "../actions/types";


const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
  search: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false,
      }
    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false,
      }
    case DELETE_LOG:
      const newLogs = state.logs.filter(log => log.id !== action.payload)
      return {
        ...state,
        logs: newLogs,
        loading: false,
      }
      case UPDATE_LOG:
        const updatedLogs = state.logs.map(log => log.id === action.payload.id ? action.payload : log)
        return {
          ...state,
          logs: updatedLogs,
          loading: false,
        }
      case SET_CURRENT:
        return {
          ...state,
          current: action.payload,
          loading: false,
        }
      case CLEAR_CURRENT:
        return {
          ...state,
          current: null,
        }
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }
    case LOGS_ERROR:
      console.log(action.payload);
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state;
  }
};
