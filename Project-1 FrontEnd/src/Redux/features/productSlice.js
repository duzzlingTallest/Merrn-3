import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import { BE_URL } from "../../config"

const initialState = { product: [] }

export const fetchProduct = createAsyncThunk("product/fetchProduct", () => {
    console.log("----- Fetched product ------>");
    return axios
        .get(`${BE_URL}/product/getAll`)
        .then((res) => {
            return res?.data?.data
        }).catch((err) => console.log(err))
})

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.fulfilled, (state, { payload }) => {
            state.product = payload
        })
    }
})

export default productSlice.reducer
export const { addProduct } = productSlice.actions