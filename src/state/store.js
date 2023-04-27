import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import recipesSlice from './recipes/recipesSlice';

const logger = createLogger({
  collapsed: true,
});

export const store = configureStore({
  reducer: {
    recipes: recipesSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
