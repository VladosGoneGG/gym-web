import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../models/IUser'
import UserService from '../../services/UserService'

interface UserProfileState {
	user: IUser | null
	loading: boolean
	error: string | null
}

const initialState: UserProfileState = {
	user: null,
	loading: false,
	error: null,
}

interface UpdateUserProfileParams {
	userId: string
	updateData: Partial<IUser>
}

export const fetchUserProfile = createAsyncThunk(
	'userProfile/fetchUserProfile',
	async (userId: string, { rejectWithValue }) => {
		try {
			const response = await UserService.getUserProfile(userId)
			return response.data
		} catch (error: any) {
			return rejectWithValue(error.response.data)
		}
	}
)

export const updateUserProfile = createAsyncThunk(
	'userProfile/updateUserProfile',
	async (params: UpdateUserProfileParams, { rejectWithValue }) => {
		const { userId, updateData } = params
		try {
			const response = await UserService.updateUserProfile(userId, updateData)
			return response.data
		} catch (error: any) {
			return rejectWithValue(error.response.data)
		}
	}
)

const userProfileSlice = createSlice({
	name: 'userProfile',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchUserProfile.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(
				fetchUserProfile.fulfilled,
				(state, action: PayloadAction<IUser>) => {
					state.loading = false
					state.user = action.payload
				}
			)
			.addCase(
				fetchUserProfile.rejected,
				(state, action: PayloadAction<any>) => {
					state.loading = false
					state.error = action.payload
				}
			)
			.addCase(updateUserProfile.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(
				updateUserProfile.fulfilled,
				(state, action: PayloadAction<IUser>) => {
					state.loading = false
					state.user = action.payload
				}
			)
			.addCase(
				updateUserProfile.rejected,
				(state, action: PayloadAction<any>) => {
					state.loading = false
					state.error = action.payload
				}
			)
	},
})

export default userProfileSlice.reducer
