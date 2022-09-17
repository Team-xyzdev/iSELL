// Copyright iSELL 💳 2022 
// 17 U.S.C §§ 101-1511

//importing relevant modules + functions
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/user.reducer';
import vendorReducer from './vendor-wallet/wallet.reducer'

// creating store
export const store = configureStore({
  reducer: {
      currentUser : userReducer,
      vendorWallet : vendorReducer
  },
});

// exporting types for dispatch and state
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch