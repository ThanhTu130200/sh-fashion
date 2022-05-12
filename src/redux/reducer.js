const initState = {
	cart: JSON.parse(localStorage.getItem("cart")) || [],
}

const rootReducer = (state = initState, action) => {
	switch (action.type) {
		case "addItem": {
			let itemFound = state.cart.find((item) => item.id === action.payload.id)
			if (itemFound) {
				itemFound.quantity += 1
				const newState = state

				localStorage.setItem("cart", JSON.stringify(newState.cart))

				return newState
			}
			const newState = {
				...state,
				cart: [...state.cart, { ...action.payload, quantity: 1 }],
			}

			localStorage.setItem("cart", JSON.stringify(newState.cart))

			return newState
		}
		case "removeItem": {
			const newState = {
				...state,
				cart: state.cart.filter((item) => item.id !== action.payload.id),
			}

			localStorage.setItem("cart", JSON.stringify(newState.cart))

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

			localStorage.setItem("cart", JSON.stringify(newState.cart))

			return newState
		}
		case "decreaseItem": {
			let itemDecrease = state.cart.find((item) => item.id === action.payload.id)
			if (itemDecrease.quantity <= 1) {
				console.log("delete item")
				const newState = {
					...state,
					cart: state.cart.filter((item) => item.id !== action.payload.id),
				}

				localStorage.setItem("cart", JSON.stringify(newState.cart))

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

			localStorage.setItem("cart", JSON.stringify(newState.cart))

			return newState
		}
		default:
			return state
	}
}

export default rootReducer
