// Copyright iSELL 💳 2022 
// 17 U.S.C §§ 101-1511

// importing relevant module
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VENDOR_ACTION_TYPES } from './vendor.types';

// user types
interface vendorWalletTypes {
   vendorWallet : null
}

// initial state
const initialState: vendorWalletTypes= {
  vendorWallet : null
}

// setting user actions
export const WalletSlice = createSlice({
  name: VENDOR_ACTION_TYPES.SET_VENDOR_WALLET,
  initialState,
  reducers : {
   setVendorWallet : (state :any, action :PayloadAction<string>) => {
    state.vendorWallet = action.payload
   }
  }
  
})

// dispatch
export const {setVendorWallet} = WalletSlice.actions

//reducer
export default WalletSlice.reducer