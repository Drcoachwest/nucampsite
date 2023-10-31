import { CAMPSITES } from "../../app/shared/CAMPSITES";
import { createSlice } from "@reduxjs/toolkit";

export const selectAllCampsites = (state) => {
  return state.campsites.campsitesArray;
};

//  export const selectRandomCampsite = () =>{
//   return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
//  };

export const selectCampsiteById = (id) => (state) => {
  return state.campsites.campsitesArray.find(
    (campsite) => campsite.id === parseInt(id)
  );
};

export const selectFeaturedCampsite = (s) => {
  return s.campsites.campsitesArray.find((campsite) => campsite.featured);
};

const initialState = {
  campsitesArray: CAMPSITES,
};

const campsiteSlice = createSlice({
  name: "campsites",
  initialState,
});

export const campsitesReducer = campsiteSlice.reducer;
