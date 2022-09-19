// Copyright iSELL 💳 2022 
// 17 U.S.C §§ 101-1511

// importing relevant module
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ERROR_ACTION_TYPES } from './error-message.types';

// user types
interface errorTypes {
   errorMessage:  { openModal: boolean, modalContent: any },
}

// initial state
const initialState: errorTypes= {
  errorMessage : {openModal : false, modalContent: ""}
}

// setting user actions
export const errorSlice= createSlice({
  name: ERROR_ACTION_TYPES.ERROR_TYPE,
  initialState,
  reducers : {
   error : (state :any, action :PayloadAction<string>) => {
    state.errorMessage.openModal = true
    state.errorMessage.modalContent= action.payload 
   },
  close : (state :any, action :PayloadAction<string>)  => {
    state.errorMessage.openModal = false
  }
  }

  
})

// dispatch
export const {error, close} = errorSlice.actions

//reducer
export default errorSlice.reducer