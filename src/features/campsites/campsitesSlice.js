//import { CAMPSITES } from "../../app/shared/CAMPSITES";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../app/shared/baseUrl";
import { mapImageURL } from "../../utils/mapImageURL";

export const fetchCampsites = createAsyncThunk(
  "campsites/fetchCampsites",
  async () => {
    const response = await fetch(baseUrl + "campsites");
    if (!response.ok) {
      return Promise.reject("Unable to fetch, status: " + response.status);
    }
    const data = await response.json();
    return data;
  }
);

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

/** Examples */
const obj = {
  featureItem: { id: 123, campsiteName: "campHello" },
  isLoading: false,
  errMsg: "",
};
/** Destructuring 3 properties from object (obj) */
const { featureItem, isLoading, errMsg } = obj;
/** END examples */

export const selectFeaturedCampsite = (state) => {
  return {
    featuredItem: state.campsites.campsitesArray.find(
      (campsite) => campsite.featured
    ),
    isLoading: state.campsites.isLoading,
    errMsg: state.campsites.errMsg,
  };
};

const initialState = {
  campsitesArray: [],
  isLoading: true,
  errMsg: "",
};

const campsiteSlice = createSlice({
  name: "campsites",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCampsites.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCampsites.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMsg = "";
      state.campsitesArray = mapImageURL(action.payload);
    },
    [fetchCampsites.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMsg = action.error ? action.error.message : "Fetch failed";
    },
  },
});

export const campsitesReducer = campsiteSlice.reducer;
