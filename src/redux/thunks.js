import Categories from "../contents/Categories"
import { loadingCategories, loadedCategories } from "./actions"

export const loadCategories = (dispatch) => {
	Categories().then((res) => {
		dispatch(loadingCategories())
		dispatch(loadedCategories(res))
	})
}
