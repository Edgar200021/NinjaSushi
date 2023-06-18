import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
	name: 'news',
	initialState: {
		news: [],
	},
	reducers: {
		 getNews (state, action) {
			state.news.push(...action.payload)
		}
	}
})


export const {getNews}  = newsSlice.actions

export default newsSlice.reducer