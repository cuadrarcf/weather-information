/**
 * Define the Module Sagas
 */
import { all, takeEvery, call, put } from 'redux-saga/effects';
import { message as MessageManager } from 'antd';
import servicesApi from './services';
import actions from './actions';


/**
 * Manage the basic CRUD REST API: [CREATE, READ, UPDATE, DELETE]
 * @param payload {any}
 */
function* crudToApi({ payload }) {
  const { data, actionName } = payload;
  const id = data ? data.id : 0;
  let result = null;

  try {
    switch (actionName) {
      case 'CREATE':
        result = yield call(servicesApi.create, data);
        break;

      case 'READ':
        result = yield call(servicesApi.list, data);
        break;

      case 'UPDATE':
        result = yield call(servicesApi.update, id, data);
        break;

      case 'DELETE':
        result = yield call(servicesApi.delete, id);
        break;

      default:
        break;
    }

    // manage error
    if (result.isAxiosError || result.status !== 200) {
      const { message } = result;

      if(result.status === 404){
        // manage not found
      }


      if(result.status === 401){
        // manage unauthorized
      }

      yield put(actions.onLoadError({ error: message }));
      setTimeout(() => MessageManager.error(message), 500);
    }

    // success
    yield put(actions.onLoadSuccess(result.data));

  } catch (error) {
    yield put(actions.onLoadError(error));
  }
}

export default function* rootSaga() {
  yield all([takeEvery(actions.CRUD_API, crudToApi)]);
}
