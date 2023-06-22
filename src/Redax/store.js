 
  import { configureStore } from "@reduxjs/toolkit";
 import  cartReducer from './cartSlice';
  import storage from 'redux-persist/lib/storage';
  import { persistReducer, persistStore } from 'redux-persist';
  import thunk from 'redux-thunk';

  const persistConfig = {
    key: 'root',
    storage,
  }

 const persistedReducer = persistReducer(persistConfig, cartReducer)

  export const store = configureStore({
    reducer: { cart :  persistedReducer,
     },  
      devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
  })

  export const persistor = persistStore(store)




// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from './cartSlice';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'

//  const persistConfig = {
//     key: 'root',
//     storage: storage,
//      }

//const cartReducer = persistReducer(persistConfig)

// export const store = configureStore({
//     reducer: cartReducer,
//     devTools: process.env.NODE_ENV !== 'production',
// })
//const cartReducer = persistReducer(persistConfig)
// const store = configureStore({
//     reducer: {
//         reducer: cartReducer,
//         storage
//        },
//    });


// export default store;

