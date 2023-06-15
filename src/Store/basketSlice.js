import { createSlice } from '@reduxjs/toolkit'

const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    basketProducts: [],
	basketTotal: 0
  },
  reducers: {
    addProduct(state, action) {
		const isExist = state.basketProducts.some(product => product.id === action.payload.id)
		
		if (isExist) {
			const product = state.basketProducts.find(product => product.id === action.payload.id)
				product.count++
				state.basketTotal += action.payload.price
				return
		}

      state.basketProducts.push({
        ...action.payload,
		count: 1,
      })

	  state.basketTotal += action.payload.price
    },
    removeProduct(state, action) {
      state.basketProducts = state.basketProducts.filter(product => product.id !== action.payload.id)
	
    },
	changeCount(state, action) {
		const product = state.basketProducts.find(product => product.id === action.payload.id)
		
		if (action.payload.action === 'plus') {
			product.count++
			state.basketTotal += +product.price
			return
		}

		if (action.payload.action === 'minus' && product.count > 1) {
			product.count-- 
			state.basketTotal -= +product.price
			return
		}

	},

	changeTotal(state, action) {
		state.basketTotal += action.payload.price
	}
  },
})

export const { addProduct, removeProduct, changeCount, changeTotal } = basketSlice.actions


export default basketSlice.reducer
