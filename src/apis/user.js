import axios from "axios"

export function getUsers() {
	return axios
		.get("https://627cc7abe5ac2c452af68326.mockapi.io/users")
		.then((res) => res.data)
		.catch((err) => alert(err.message))
}

export function postUser(user) {
	return axios
		.post("https://627cc7abe5ac2c452af68326.mockapi.io/users", user)
		.then((res) => res.data)
		.catch((err) => alert(err.message))
}
