import { configureStore } from "@reduxjs/toolkit";
import basketReducer from './basketSlice'
import favoriteReducer from './favoriteSlice'
import newsReducer from './newsSlice'

export default configureStore({
	reducer: {
		basketProducts: basketReducer,
		favoriteProducts: favoriteReducer,
		news: newsReducer
	}
})

