import axios from "axios"

export default async function Categories() {
	return await axios
		.get("https://627cc7abe5ac2c452af68326.mockapi.io/categories")
		.then((res) => res.data)
		.catch((err) => alert(err.message))
}
