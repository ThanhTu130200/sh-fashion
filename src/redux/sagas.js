import { call, put, takeEvery } from "redux-saga/effects"
import { loading, loadedCategories, register, updateUserLocal, login } from "./actions"
import getCategories from "../apis/categories"
import { getUsers, postUser } from "../apis/user"

function* loadCategories() {
	try {
		const categories = yield call(getCategories)
		yield put(loading())
		yield put(loadedCategories(categories))
	} catch (e) {
		yield console.log(e.message)
	}
}

function* registerUser(action) {
	try {
		const { username, password } = action.payload

		const user = {
			username,
			password,
		}

		const users = yield call(getUsers)

		const userFound = !!users.find((user) => user.username === username)
		if (userFound) {
			const usernameInput = document.querySelector(".registerPage #validationUsername")
			const usernameFeedback = document.querySelector(".registerPage .usernameFeedback")
			usernameInput.classList.add("invalid")
			usernameFeedback.classList.add("d-block")
			usernameFeedback.innerHTML = "Username is unavailable"
		} else {
			const { id } = yield postUser(user)
			yield put(loading())
			yield put(register({ ...user, id }))
			yield put(updateUserLocal({ ...user, id }))
		}
	} catch (e) {
		yield console.log(e.message)
	}
}

function* loginUser(action) {
	try {
		const { username, password } = action.payload

		const users = yield call(getUsers)

		const userFound = users.find(
			(user) => user.username === username && user.password === password
		)

		if (userFound) {
			const { id } = userFound

			yield put(loading())
			yield put(login(userFound))
			yield put(updateUserLocal({ username, password, id }))
		} else {
			const formFeedback = document.querySelector(".loginPage #loginFeedback")
			formFeedback.innerHTML = "The username or password is incorrect"
		}
	} catch (e) {
		yield console.log(e.message)
	}
}

function* sagas() {
	yield takeEvery("loadingCategories", loadCategories)
	yield takeEvery("registering", registerUser)
	yield takeEvery("loggingIn", loginUser)
}

export default sagas
