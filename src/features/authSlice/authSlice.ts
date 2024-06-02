import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IFormInput } from '../../models/IFormInput'
import { IUser } from '../../models/IUser'
import { AuthState } from '../../models/response/AuthResponse'
import AuthService from '../../services/AuthService'

const initialState: AuthState = {
	user: null,
	isAuth: false,
	loading: false,
	error: null,
}

export const checkAuth = createAsyncThunk<IUser, void, { rejectValue: string }>(
	'auth/checkAuth',
	async (_, { rejectWithValue }) => {
		try {
			const response = await AuthService.checkAuth()
			localStorage.setItem('token', response.data.accessToken)
			return response.data.user
		} catch (e: any) {
			return rejectWithValue(e.response?.data?.message)
		}
	}
)

export const login = createAsyncThunk<
	IUser,
	{ email: string; password: string },
	{ rejectValue: string }
>('auth/login', async ({ email, password }, { rejectWithValue }) => {
	try {
		const response = await AuthService.login(email, password)
		localStorage.setItem('token', response.data.accessToken)
		return response.data.user
	} catch (e: any) {
		return rejectWithValue(e.response?.data?.message)
	}
})

export const registration = createAsyncThunk<
	IUser,
	IFormInput,
	{ rejectValue: string }
>(
	'auth/registration',
	async ({ firstName, lastName, email, password }, { rejectWithValue }) => {
		try {
			const response = await AuthService.registration({
				email,
				password,
				firstName,
				lastName,
			})
			localStorage.setItem('token', response.data.accessToken)
			return response.data.user
		} catch (e: any) {
			return rejectWithValue(e.response?.data?.message || 'Ошибка регистрации')
		}
	}
)

export const logout = createAsyncThunk<void, void, { rejectValue: string }>(
	'auth/logout',
	async (_, { rejectWithValue }) => {
		try {
			await AuthService.logout()
			localStorage.removeItem('token')
		} catch (e: any) {
			return rejectWithValue(e.response?.data?.message)
		}
	}
)

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuth(state, action: PayloadAction<boolean>) {
			state.isAuth = action.payload
		},
		setUser(state, action: PayloadAction<IUser | null>) {
			state.user = action.payload
		},
	},
	extraReducers: builder => {
		builder
			.addCase(login.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(login.fulfilled, (state, action: PayloadAction<IUser>) => {
				state.loading = false
				state.isAuth = true
				state.user = action.payload
			})
			.addCase(
				login.rejected,
				(state, action: PayloadAction<string | undefined>) => {
					state.loading = false
					state.error = action.payload ?? 'Login failed'
				}
			)
			.addCase(registration.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(
				registration.fulfilled,
				(state, action: PayloadAction<IUser>) => {
					state.loading = false
					state.isAuth = true
					state.user = action.payload
				}
			)
			.addCase(
				registration.rejected,
				(state, action: PayloadAction<string | undefined>) => {
					state.loading = false
					state.error = action.payload ?? 'Registration failed'
				}
			)
			.addCase(logout.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(logout.fulfilled, state => {
				state.loading = false
				state.isAuth = false
				state.user = null
			})
			.addCase(
				logout.rejected,
				(state, action: PayloadAction<string | undefined>) => {
					state.loading = false
					state.error = action.payload ?? 'Logout failed'
				}
			)
			.addCase(checkAuth.pending, state => {
				state.loading = true
				state.error = null
			})
			.addCase(checkAuth.fulfilled, (state, action: PayloadAction<IUser>) => {
				state.loading = false
				state.isAuth = true
				state.user = action.payload
			})
			.addCase(
				checkAuth.rejected,
				(state, action: PayloadAction<string | undefined>) => {
					state.loading = false
					state.isAuth = false
					state.user = null
					state.error = action.payload ?? 'Check auth failed'
				}
			)
	},
})

export const { setAuth, setUser } = authSlice.actions

export default authSlice.reducer
