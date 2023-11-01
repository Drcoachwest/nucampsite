import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { campsitesReducer } from "../features/campsites/campsitesSlice";
import { promotionsReducer } from "../features/Promotions/promotionsSlice";
import { commentsReducer } from '../features/comments/commentsSlice';
import { partnersReducer } from "../features/partners/partnersSlice";

export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
    comments: commentsReducer,
    partners: partnersReducer,
    promotions: promotionsReducer,
  },
});

