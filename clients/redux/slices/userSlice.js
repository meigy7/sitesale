import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  email: null,
  token: null,
  id: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(s, a) {
      s.email = a.payload.email;
      s.token = a.payload.token;
      s.id = a.payload.id;
    },
    removeUser(s) {
      s.email = null;
      s.token = null;
      s.id = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
