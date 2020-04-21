/**
 * Define the module actions.
 */

const MODULE = 'WEATHER';


const actions = {
  CRUD_API: `CRUD_API_${MODULE}`,
  LOAD_SUCCESS: `LOAD_SUCCESS_${MODULE}`,
  LOAD_ERROR: `LOAD_ERROR_${MODULE}`,

  onCrudApi: (actionName, data) => ({
    type: actions.CRUD_API,
    payload: { data, actionName }
  }),

  onLoadSuccess: (data) => ({
    type: actions.LOAD_SUCCESS,
    payload: { data }
  }),

  onLoadError: (error) => ({
    type: actions.LOAD_ERROR,
    payload: { error }
  }),

};

export default actions;
