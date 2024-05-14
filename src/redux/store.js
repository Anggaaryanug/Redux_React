import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import userSlice from './slices/userSlice';
const store = configureStore({ 
reducer: { 
counter: counterReducer ,
user: userSlice, 
} 
}); 
export default store;