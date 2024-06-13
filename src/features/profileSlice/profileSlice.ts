import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ProfileState } from '../../models/response/IProfile'
import { UserProfile } from '../../models/response/IUserProfile'
import AuthService from '../../services/AuthService'

const initialState: ProfileState = {
	profile: null,
	status: 'idle',
	error: null,
}

export const fetchProfile = createAsyncThunk<UserProfile>(
	'profile/fetchProfile',
	async () => {
		const response = await AuthService.getProfile()
		return response.data
	}
)

export const updateProfile = createAsyncThunk(
	'profile/updateProfile',
	async (data: any) => {
		const response = await AuthService.updateProfile(data)
		return response.data
	}
)

const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchProfile.pending, state => {
				state.status = 'loading'
			})
			.addCase(fetchProfile.fulfilled, (state, action) => {
				state.status = 'succeeded'
				state.profile = action.payload
			})
			.addCase(fetchProfile.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message || null
			})
			.addCase(updateProfile.pending, state => {
				state.status = 'loading'
			})
			.addCase(updateProfile.fulfilled, (state, action) => {
				state.status = 'succeeded'
				state.profile = action.payload
			})
			.addCase(updateProfile.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message || null
			})
	},
})

export default profileSlice.reducer
