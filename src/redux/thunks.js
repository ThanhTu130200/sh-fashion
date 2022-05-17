import axios from "axios"
import Categories from "../contents/Categories"
import { loading, loadedCategories, register, login, updateUserLocal } from "./actions"

export const loadCategories = (dispatch) => {
	Categories()
		.then((res) => {
			dispatch(loading())
			dispatch(loadedCategories(res))
		})
		.catch((err) => alert(err.message))
}

export const registerUser = (dispatch, data) => {
	const { username, password } = data

	const user = {
		username,
		password,
	}

	axios
		.get("https://627cc7abe5ac2c452af68326.mockapi.io/users")
		.then((res) => {
			const userFound = !!res.data.find((user) => user.username === username)
			if (userFound) {
				const usernameInput = document.querySelector(".registerPage #validationUsername")
				const usernameFeedback = document.querySelector(".registerPage .usernameFeedback")
				usernameInput.classList.add("invalid")
				usernameFeedback.classList.add("d-block")
				usernameFeedback.innerHTML = "Username is unavailable"
			} else {
				axios
					.post("https://627cc7abe5ac2c452af68326.mockapi.io/users", user)
					.then((res) => {
						const { username, password, id } = res.data
						dispatch(loading())
						dispatch(register(res.data))
						dispatch(updateUserLocal({ username, password, id }))
					})
					.catch((err) => alert(err.message))
			}
		})
		.catch((err) => alert(err.message))
}

export const loginUser = (dispatch, data) => {
	const { username, password } = data

	axios
		.get("https://627cc7abe5ac2c452af68326.mockapi.io/users")
		.then((res) => {
			const userFound = res.data.find(
				(user) => user.username === username && user.password === password
			)
			if (userFound) {
				const { id } = userFound

				dispatch(loading())
				dispatch(login(userFound))
				dispatch(updateUserLocal({ username, password, id }))
			} else {
				const formFeedback = document.querySelector(".loginPage #loginFeedback")
				formFeedback.innerHTML = "The username or password is incorrect"
			}
		})
		.catch((err) => alert(err.message))
}
