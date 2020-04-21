/**
 * Define Module Reducer
 */
import actions from './actions';


/**
 * Initial State
 */
const initState ={
  isLoading: false,
  errorMessage: false,
  models: [],
};

/**
 * Reducer
 */
export default function reducer(state = initState, action) {
  const { type, payload } = action;

  switch (type) {
    case actions.CRUD_API:
      return {
        ...state,
        isLoading: true,
      };

    case actions.LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        models: payload.data,
      };

    case actions.LOAD_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: 'There is a loading problem'
      };

    default:
      return state;
  }
}

