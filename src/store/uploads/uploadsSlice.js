import { createSlice } from '@reduxjs/toolkit';
export const uploadsSlice = createSlice({
name: 'uploads',
initialState: {
uploads: [],
displayName:null,
},
reducers: {
uploadMethod: (state,  {payload}  ) => {
    state.uploads.push(payload);
},
onUserAuth: (state, {payload}) => {
    state.displayName = payload;
}
}
});
export const { uploadMethod,onUserAuth} = uploadsSlice.actions;