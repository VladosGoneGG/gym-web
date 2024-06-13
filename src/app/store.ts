import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/authSlice/authSlice'
import profileReducer from '../features/profileSlice/profileSlice'
import userProfileReducer from '../features/userProfileSlice/userProfileSlice'
import userReducer from '../features/usersSlice/usersSlice'

export const store = configureStore({
	reducer: {
		auth: authReducer,
		users: userReducer,
		profile: profileReducer,
		userProfile: userProfileReducer,
	},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
