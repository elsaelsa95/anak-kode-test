import { configureStore } from "@reduxjs/toolkit";
import { citySlice, provinceSlice } from "./costSlice"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
    reducer: {
        provinceSlice: provinceSlice.reducer,
        citySlice: citySlice.reducer
    }
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector

export default store