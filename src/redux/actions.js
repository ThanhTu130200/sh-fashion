export const loadingCategories = () => ({
	type: "loadingCategories",
})

export const loadedCategories = (payload) => ({
	type: "loadedCategories",
	payload,
})

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
