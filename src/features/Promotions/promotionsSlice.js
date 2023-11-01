import { PROMOTIONS } from "../../app/shared/PROMOTIONS";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  promotionsArray: PROMOTIONS
};

const promotionsSlice = createSlice ({
  name: 'promotions',
  initialState
});


export const selectFeaturedPromotion = () => {
  return PROMOTIONS.find((promotion) =>promotion.featured)
};
export const promotionsReducer = promotionsSlice.reducer;