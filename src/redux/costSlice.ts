import { createSlice, current } from "@reduxjs/toolkit";

const initialStateProvince = {
    provinceIDfrom: "1",
    provinceIDTo: "10"
}

const initialStateCity = {
    cityIDFrom: "1",
    cityIDTo: "10"
}

export const provinceSlice = createSlice({
    name: "provinceSlice",
    initialState: initialStateProvince,
    reducers: {
        updateProvinceIDFrom: (state, action) => {
            console.log(current(state), "st")
            console.log(action, "ac")
            // return {
            //     ...state,
            //     provinceIDfrom: action.payload
            // }
            // return {
            //     provinceIDfrom: action.payload,
            //     // provinceIDTo: action.payload
            // }
            state.provinceIDfrom = action.payload
            console.log(current(state), "st2")
        },
        updateProvinceIDTo: (state, action) => {
            // return {
            //     ...state,
            //     provinceIDfrom: action.payload
            // }
            // return {
            //     provinceIDfrom: action.payload,
            //     // provinceIDTo: action.payload
            // }
            state.provinceIDTo = action.payload
            console.log(current(state), "st3")
        }
    }
})

export const citySlice = createSlice({
    name: "citySlice",
    initialState: initialStateCity,
    reducers: {
        updateCityIDFrom: (state, action) => {
            state.cityIDFrom = action.payload
        },
        updateCityIDTo: (state, action) => {
            state.cityIDTo = action.payload
        }
    }
})

export const { updateProvinceIDFrom, updateProvinceIDTo } = provinceSlice.actions
export const { updateCityIDFrom, updateCityIDTo } = citySlice.actions