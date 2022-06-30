import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import optionsSlice from "./optionsSlice";
import productSlice from "./productSlice";

// export const store = configureStore({
//   reducer: {
//     product: productSlice,
//     options: optionsSlice,
//   },
// });

// const combineReducer = combineReducers({
//   options,
//   product,
// });

// const masterReducer = (state, action) => {
//   if (action.type === HYDRATE) {
//     const nextState = {
//       ...state, // use previous state
//     };
//     return nextState;
//   } else {
//     return combineReducer(state, action);
//   }
// };

// export const makeStore = () =>
//   configureStore({
//     reducer: masterReducer,
//   });
// // export const makeStore = () =>
// //   configureStore({
// //     reducer: {
// //       product: productSlice,
// //       options: optionsSlice,
// //     },
// //   });

// export const wrapper = createWrapper(makeStore);

const makeStore = () =>
  configureStore({
    reducer: {
      options: optionsSlice,
      product: productSlice,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
