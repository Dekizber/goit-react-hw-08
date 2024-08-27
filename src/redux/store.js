import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/slice';
import persistReducer from 'redux-persist/lib/persistReducer';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import { filterSlice } from './filters/filtersSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['token', 'user', 'isLoggedIn'],
};

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterSlice,
    auth: persistReducer(persistConfig, authReducer),
  }, middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
