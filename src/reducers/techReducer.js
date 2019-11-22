import { GET_TECHS, SET_LOADING_TECHS, ADD_TECH, DELETE_TECH } from "../actions/types";

const initialState = {
  techs: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS:
      return {
        ...state,
        techs: action.payload,
        loading: false
      };
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, action.payload],
        loading: false,
      }
    case DELETE_TECH:
      const deletedTech = state.techs.filter(tech => tech.id !== action.payload);
      return {
        ...state,
        techs: deletedTech,
        loading: false,
      }
    case SET_LOADING_TECHS:
      return {
        ...state,
        loading: true,
      }
    default:
      return state;
  }
};
