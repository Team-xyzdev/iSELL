// Copyright Paylancers 💳 2022 
// 17 U.S.C §§ 101-1511

// importing relevant module
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_ACTION_TYPES } from './user.types';

// user types
interface currentUserTypes {
   currentUser : null
}

// initial state
const initialState: currentUserTypes= {
  currentUser : null
}

// setting user actions
export const userSlice = createSlice({
  name: USER_ACTION_TYPES.SET_CURRENT_USER,
  initialState,
  reducers : {
   setCurrentUser : (state :any, action :PayloadAction<Array<any>>) => {
    state.currentUser = action.payload
   }
  }
  
})

// dispatch
export const {setCurrentUser} = userSlice.actions

//reducer
export default userSlice.reducer