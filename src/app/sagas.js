import { all } from 'redux-saga/effects';
import alertsSagas from '../modules/alerts/sagas';

/**
 * Select all app sagas.
 */
export function mergeSagas() {
  const allSagasArray = [
      alertsSagas()
  ];

  return function* rootSaga() {
    yield all(allSagasArray);
  };
}
