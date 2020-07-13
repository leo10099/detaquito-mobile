// Config
import { Api } from '~/api/api';

// Redux Sagas
import { put, takeLatest } from 'redux-saga/effects';

// Auth Slice
import Auth from './Auth.reducer';

// Types
import { BaseAction } from '~/typings';

// Helpers
import { invalidToken } from '~/utils';

const { actions } = Auth;

// Registration
function* trySignUp({ payload }: BaseAction) {
	try {
		const { data, response } = yield Api('auth/local/register', {
			method: 'POST',
			data: payload,
		});

		if (!data) {
			if (response?.data) {
				return yield put(actions.registrationFailure(response.data));
			}
			return yield put(actions.registrationFailure(invalidToken));
		}

		return yield put(actions.registrationSuccess(data));
	} catch (e) {
		return yield put(actions.registrationFailure(e.response.data));
	}
}

export default [takeLatest(actions.registrationRequest, trySignUp)];
