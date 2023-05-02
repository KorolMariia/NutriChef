import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import recipesSlice from './recipes/recipesSlice';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    collapsed: true,
  });

  middlewares.push(logger);
}

export const store = configureStore({
  reducer: {
    recipes: recipesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
});