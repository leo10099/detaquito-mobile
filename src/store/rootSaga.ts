import { all } from 'redux-saga/effects';

import AuthSagas from '~/store/Auth/Auth.sagas';

export default function* rootSaga() {
	yield all([...AuthSagas]);
}
