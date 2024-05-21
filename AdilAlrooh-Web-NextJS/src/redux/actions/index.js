import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sitedata: "",
  imageList: "",
  faqs: "",
  features: "",
  article: "",
};

export const SiteDataSlice = createSlice({
  name: "SiteData",
  initialState,
  reducers: {
    setSiteData: (state, action) => {
      state.sitedata = action.payload;
    },
    setFaqsData: (state, action) => {
      state.faqs = action.payload;
    },
    setArticlesData: (state, action) => {
      state.article = action.payload;
    },
    setImagesData: (state, action) => {
      state.imageList = action.payload;
    },
    setFeaturesData: (state, action) => {
      state.features = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setSiteData,
  setFaqsData,
  setArticlesData,
  setImagesData,
  setFeaturesData,
} = SiteDataSlice.actions;

export default SiteDataSlice.reducer;
