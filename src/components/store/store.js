import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "components/features/contactsSlice";
import { filteredReducer } from "components/features/filteredSlice";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore } from "redux-persist";



export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filteredReducer,
    },
    middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});


export const persistor = persistStore(store);







