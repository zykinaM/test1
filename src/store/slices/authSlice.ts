import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import { AuthData } from '../../interfaces/user';

export interface AuthState {
  loginLoading: boolean;
  error: string | null;
  checkAuthLoading: boolean;
  checkAuthError: string | null;
  isAuthenticated: boolean;
  user: string;
}

export const initialState: AuthState = {
  loginLoading: false,
  error: null,
  checkAuthLoading: false,
  checkAuthError: null,
  isAuthenticated: false,
  user: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutRequest: (state) => {
      state.loginLoading = false;
      state.error = null;
      state.checkAuthLoading = false;
      state.checkAuthError = null;
      state.isAuthenticated = false;
      state.user = '';
    },
    loginRequest: (state) => {
      state.loginLoading = true;
    },
    loginSuccess: (state) => {
      state.loginLoading = false;
      state.isAuthenticated = true;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.loginLoading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },
    checkAuthRequest: (state) => {
      state.checkAuthLoading = true;
    },
    ckeckAuthSuccess: (state, action: PayloadAction<string>) => {
      state.checkAuthLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    checkAuthFailure: (state, action: PayloadAction<string>) => {
      state.checkAuthLoading = false;
      state.checkAuthError = action.payload;
      state.isAuthenticated = false;
    },
  },
});

export const {
  logoutRequest,
  loginRequest,
  loginSuccess,
  loginFailure,
  checkAuthRequest,
  ckeckAuthSuccess,
  checkAuthFailure,
} = authSlice.actions;

export const login = (
  data: AuthData
): AppThunk => async (
  dispatch
) => {
    dispatch(loginRequest());
    if (data.username === 'Test' && data.password === '123456789') {
      localStorage.setItem('isAuth', 'true');
      localStorage.setItem('username', data.username);
      dispatch(loginSuccess());
    } else {
      dispatch(loginFailure('error'));
    }
  };

export const logout = (): AppThunk => async (
  dispatch
) => {
  dispatch(logoutRequest());
  localStorage.clear();
};

export const checkAuth = (): AppThunk => async (dispatch) => {
  dispatch(checkAuthRequest());
  if (localStorage.getItem("isAuth") === 'true') {
    const username = localStorage.getItem("username")
    dispatch(ckeckAuthSuccess(username));
  } else {
    dispatch(checkAuthFailure('error'));
  }
};

export default authSlice.reducer;
