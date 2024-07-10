import { configureStore } from '@reduxjs/toolkit';
import rootReducers from './reducer';

export const Store = configureStore({
    reducer: rootReducers,
})