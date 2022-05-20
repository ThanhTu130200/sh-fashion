export const loading = () => ({
	type: "loading",
})

// Categories
export const loadedCategories = (payload) => ({
	type: "loadedCategories",
	payload,
})

// User
export const updateUserLocal = (payload) => ({
	type: "updateUserLocal",
	payload,
})
export const register = (payload) => ({
	type: "register",
	payload,
})

export const login = (payload) => ({
	type: "login",
	payload,
})

export const logout = () => ({
	type: "logout",
})

// Cart
export const addItem = (payload) => ({
	type: "addItem",
	payload,
})

export const removeItem = (payload) => ({
	type: "removeItem",
	payload,
})

export const increaseItem = (payload) => ({
	type: "increaseItem",
	payload,
})

export const decreaseItem = (payload) => ({
	type: "decreaseItem",
	payload,
})

export const order = () => ({
	type: "order",
})
