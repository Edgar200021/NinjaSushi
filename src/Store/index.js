import { configureStore } from "@reduxjs/toolkit";
import basketReducer from './basketSlice'
import favoriteReducer from './favoriteSlice'

export default configureStore({
	reducer: {
		basketProducts: basketReducer,
		favoriteProducts: favoriteReducer
	}
})

