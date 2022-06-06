export const loading = () => ({
	type: "loading",
})

// Categories
export const loadingCategories = () => ({
	type: "loadingCategories",
})

export const loadedCategories = (payload) => ({
	type: "loadedCategories",
	payload,
})

// User
export const updateUserLocal = (payload) => ({
	type: "updateUserLocal",
	payload,
})
export const registering = (payload) => ({
	type: "registering",
	payload,
})
export const register = (payload) => ({
	type: "register",
	payload,
})

export const loggingIn = (payload) => ({
	type: "loggingIn",
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

export const order = (payload) => ({
	type: "order",
	payload,
})
