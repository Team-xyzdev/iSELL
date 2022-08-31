import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/user.reducer';

export default configureStore({
  reducer: {
      currentUser : userReducer
  },
});
