import { createSlice, current } from "@reduxjs/toolkit";

// const initialStateProvince = {
//     provinceIDfrom: "1",
//     provinceIDTo: "10"
// }

const initialStateCity = {
    cityIDFrom: "",
    cityIDTo: ""
}

// export const provinceSlice = createSlice({
//     name: "provinceSlice",
//     initialState: initialStateProvince,
//     reducers: {
//         updateProvinceIDFrom: (state, action) => {
//             state.provinceIDFrom = action.payload
//         },
//         updateProvinceIDTo: (state, action) => {
//             state.provinceIDTo = action.payload
//         }
//     }
// })

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

// export const { updateProvinceIDFrom, updateProvinceIDTo } = provinceSlice.actions
export const { updateCityIDFrom, updateCityIDTo } = citySlice.actions