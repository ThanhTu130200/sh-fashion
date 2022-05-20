import axios from "axios"
import Swal from "sweetalert2"

const initState = {
	user: null,
	cart: JSON.parse(localStorage.getItem("cart")) || [],
	loading: false,
	categories: [],
}

const updateCartAPI = (state) => {
	const { user, cart } = state

	if (user) {
		axios
			.put(`https://627cc7abe5ac2c452af68326.mockapi.io/users/${user.id}`, {
				...user,
				cart,
			})
			.catch((err) => alert(err))
	} else {
		localStorage.setItem("cart", JSON.stringify(cart))
	}
}

const rootReducer = (state = initState, action) => {
	switch (action.type) {
		case "loading":
			return {
				...state,
				loading: true,
			}

		// Categories
		case "loadedCategories":
			return {
				...state,
				loading: false,
				categories: action.payload,
			}

		// User
		case "updateUserLocal": {
			if (action.payload) localStorage.setItem("user", JSON.stringify(action.payload))
			else localStorage.removeItem("user")

			return state
		}
		case "register": {
			const { username, password, id } = action.payload
			const newState = {
				...state,
				loading: false,
				user: { username, password, id },
				cart: [],
			}
			return newState
		}
		case "login": {
			const { username, password, id, cart } = action.payload
			const newState = {
				...state,
				loading: false,
				user: { username, password, id },
				cart,
			}

			Swal.fire({
				titleText: "Login success",
				toast: true,
				icon: "success",
				position: "top-end",
				showConfirmButton: false,
				timer: 1500,
				timerProgressBar: true,
				customClass: {
					container: "toastContainer",
				},
			})

			return newState
		}
		case "logout": {
			const newState = {
				...state,
				user: null,
				cart: JSON.parse(localStorage.getItem("cart")) || [],
			}

			Swal.fire({
				titleText: "Logout success",
				toast: true,
				icon: "success",
				position: "top-end",
				showConfirmButton: false,
				timer: 1500,
				timerProgressBar: true,
				customClass: {
					container: "toastContainer",
				},
			})

			return newState
		}

		// Cart
		case "addItem": {
			let newState = state

			const itemFound = newState.cart.find((item) => item.id === action.payload.id)

			if (itemFound) {
				itemFound.quantity += 1
			} else {
				newState = {
					...newState,
					cart: [...newState.cart, { ...action.payload, quantity: 1 }],
				}
			}

			updateCartAPI(newState)

			Swal.fire({
				titleText: "Added to card",
				toast: true,
				icon: "success",
				position: "top-end",
				showConfirmButton: false,
				timer: 1500,
				timerProgressBar: true,
				customClass: {
					container: "toastContainer",
				},
			})

			return newState
		}
		case "removeItem": {
			const newState = {
				...state,
				cart: state.cart.filter((item) => item.id !== action.payload.id),
			}

			updateCartAPI(newState)

			Swal.fire({
				titleText: "Removed from card",
				toast: true,
				icon: "success",
				position: "top-end",
				showConfirmButton: false,
				timer: 1500,
				timerProgressBar: true,
				customClass: {
					container: "toastContainer",
				},
			})

			return newState
		}
		case "increaseItem": {
			let itemIncrease = state.cart.find((item) => item.id === action.payload.id)
			const i = state.cart.indexOf(itemIncrease)
			const newCart = state.cart.filter((item) => item.id !== action.payload.id)
			newCart.splice(i, 0, {
				...itemIncrease,
				quantity: itemIncrease.quantity + 1,
			})

			const newState = {
				...state,
				cart: newCart,
			}

			updateCartAPI(newState)

			return newState
		}
		case "decreaseItem": {
			let itemDecrease = state.cart.find((item) => item.id === action.payload.id)
			if (itemDecrease.quantity <= 1) {
				const newState = {
					...state,
					cart: state.cart.filter((item) => item.id !== action.payload.id),
				}

				updateCartAPI(newState)

				return newState
			}
			const i = state.cart.indexOf(itemDecrease)
			const newCart = state.cart.filter((item) => item.id !== action.payload.id)
			newCart.splice(i, 0, {
				...itemDecrease,
				quantity: itemDecrease.quantity - 1,
			})
			const newState = {
				...state,
				cart: newCart,
			}

			updateCartAPI(newState)

			return newState
		}
		case "order": {
			const newState = {
				...state,
				cart: [],
			}

			updateCartAPI(newState)

			Swal.fire({
				titleText: "ORDER SUCCESS",
				icon: "success",
				text: "Thank you for shopping with us! We'd like to let you know that SH-fashion has received your order, and is preparing for shipment.",
				customClass: {
					popup: "br_0",
					title: "fs_26",
					htmlContainer: "fs_16",
					confirmButton: "bg_primary br_0 px-5",
				},
			})

			return newState
		}

		default:
			return state
	}
}

export default rootReducer
