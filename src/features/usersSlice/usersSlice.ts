import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../models/IUser'
import AuthService from '../../services/AuthService'

interface UsersState {
	users: IUser[]
	status: 'idle' | 'loading' | 'succeeded' | 'failed'
	error: string | null
}

const initialState: UsersState = {
	users: [],
	status: 'idle',
	error: null,
}

export const fetchUsers = createAsyncThunk<
	IUser[],
	void,
	{ rejectValue: string }
>('users/fetchUsers', async (_, { rejectWithValue }) => {
	try {
		const response = await AuthService.getAllUsers()
		return response.data
	} catch (e: any) {
		return rejectWithValue(e.response?.data?.message)
	}
})

export const updateUserProfile = createAsyncThunk<
	IUser,
	{ id: string; data: Partial<IUser> },
	{ rejectValue: string }
>('users/updateUserProfile', async ({ id, data }, { rejectWithValue }) => {
	try {
		const response = await AuthService.updateUserProfile(id, data)
		return response.data
	} catch (e: any) {
		return rejectWithValue(e.response?.data?.message)
	}
})

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchUsers.pending, state => {
				state.status = 'loading'
				state.error = null
			})
			.addCase(
				fetchUsers.fulfilled,
				(state, action: PayloadAction<IUser[]>) => {
					state.status = 'succeeded'
					state.users = action.payload
				}
			)
			.addCase(fetchUsers.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.payload ?? 'Failed to fetch users'
			})
			.addCase(
				updateUserProfile.fulfilled,
				(state, action: PayloadAction<IUser>) => {
					state.users = state.users.map(user =>
						user._id === action.payload._id ? action.payload : user
					)
				}
			)
	},
})

export default usersSlice.reducer
