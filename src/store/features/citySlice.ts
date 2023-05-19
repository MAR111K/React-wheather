import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: CityState = {
  key: null,
  cities: [],
};

export const fetchCity = createAsyncThunk("/city", async (name: string, { getState }) => {
  const { city } = getState() as { city: { key: string } };
  const { data } = await axios.get(
    `http://api.weatherapi.com/v1/current.json?key=${city.key}&q=${name}&aqi=no`
  );
  return data;
});

export const CitySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setKey: (state, action: PayloadAction<string>) => {
      state.key = action.payload;
    },
    deleteCity: (state, action: PayloadAction<number>) => {
      state.cities = state.cities.filter((_, index) => index !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCity.fulfilled, (state, action) => {
      state.cities.unshift(action.payload);
    });
  },
});

export default CitySlice.reducer;
export const { setKey, deleteCity } = CitySlice.actions;
