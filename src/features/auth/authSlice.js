// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   prn: null,
//   isAuthenticated: false
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     login: (state, action) => {
//       state.prn = action.payload;
//       state.isAuthenticated = true;
//     },
//     logout: (state) => {
//       state.prn = null;
//       state.isAuthenticated = false;
//     }
//   }
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;



// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   prn: null,
//   isAuthenticated: false,
//   loading: false,
//   error: null
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     loginStart: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     loginSuccess: (state, action) => {
//       state.prn = action.payload;
//       state.isAuthenticated = true;
//       state.loading = false;
//       state.error = null;
//     },
//     loginFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     },
//     logout: (state) => {
//       state.prn = null;
//       state.isAuthenticated = false;
//     }
//   }
// });

// export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;
// export default authSlice.reducer;


// // features/auth/authSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   user: null,
//   loading: false,
//   error: null,
// };

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     loginStart(state) {
//       state.loading = true;
//       state.error = null;
//     },
//     loginSuccess(state, action) {
//       state.loading = false;
//       state.user = { prn: action.payload };
//     },
//     loginFailure(state, action) {
//       state.loading = false;
//       state.error = action.payload;
//       state.user = null;
//     },
//     logout(state) {
//       state.user = null;
//       state.error = null;
//       state.loading = false;
//     }
//   }
// });

// export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;
// export default authSlice.reducer;

// // 
// import { someApiFunc } from './api/api';
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// // import { loginUser } from './api/api';
// import { loginUser } from '../../api/api';

// export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
//   try {
//     const data = await loginUser(credentials);
//     localStorage.setItem('token', data.token);
//     return data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.response.data.message || 'Login failed');
//   }
// });

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: null,
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     logout: (state) => {
//       localStorage.removeItem('token');
//       state.user = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(login.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload;
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;





// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { loginUser } from '../../api/api';

// export const login = createAsyncThunk('auth/login', async (prn, thunkAPI) => {
//   try {
//     const data = await loginUser(prn);
//     localStorage.setItem('token', data.token);
//     return data.user;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.response?.data?.message || 'Login failed');
//   }
// });

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: null,
//     loading: false,
//     error: null,
//     token: localStorage.getItem('token') || null,
//   },
//   reducers: {
//     logout: (state) => {
//       localStorage.removeItem('token');
//       state.user = null;
//       state.token = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(login.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload;
//         // token is already saved to localStorage
//         state.token = localStorage.getItem('token');
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

 //export const { logout } = authSlice.actions;
// export default authSlice.reducer;


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk(
  'auth/login',
  async (prn, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/api/auth/login', { prn });
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data.error);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    user: null,
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;