import { createSlice } from '@reduxjs/toolkit';

export const appStore = createSlice({
  name: 'appStore',
  initialState: {
    servicesPage: '',
  },
  reducers: {
    setPage: (state, action) => {
      state.servicesPage = action.payload
    },
  },
});

export const { setPage } = appStore.actions;

export default appStore.reducer;
