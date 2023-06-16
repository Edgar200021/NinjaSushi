import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
	name: 'favoritre',
	initialState: {
		products: []
	},
	reducers: {
		addProduct (state, action) {
			const isExist = state.products.some(product => product.id === action.payload.id)

			if (isExist) {
				state.products = state.products.filter(product => product.id !== action.payload.id)
				return
			} 

			state.products.push({
				...action.payload,
			})
		},
		removeProduct (state, action) {
			state.products.filter(product => product.id !== action.payload.id)
		}
	}
})

export const {addProduct, removeProduct} = favoriteSlice.actions

export default favoriteSlice.reducer