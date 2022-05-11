import { createSlice } from '@reduxjs/toolkit';

type AuthType = {
  accessToken: string | null;
}

const initialState: AuthType = {
  accessToken: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setItem(state, action) {
      Object.assign(state, action.payload);
    }
  }
});

export const { setItem } = authSlice.actions;

export default authSlice.reducer;