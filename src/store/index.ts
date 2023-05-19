import { configureStore } from "@reduxjs/toolkit";
import { CitySlice } from "./features/citySlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    city: CitySlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> =
  useSelector;
export type RootState = ReturnType<typeof store.getState>;
