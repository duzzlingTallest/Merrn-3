import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BE_URL } from "../../config";
import axios from "axios";

const initialState = {
    cart: [],
    qty: 0,
    price: 0,
}

export const fetchcart = createAsyncThunk("cart/fetchcart", () => {
    return axios({
        method: "get",
        url: `${BE_URL}/cart/getAll`,
        headers: {
            authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        }
    })

        .then((res) => {
            return res?.data?.data
        })
        .catch((err) => console.log(err))
})

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action) => {
            return
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchcart.fulfilled, (state, { payload }) => {
            console.log("🚀 ~ file: cartSlice.js:38 ~ builder.addCase ~ payload:", payload)
            state.cart = payload[0].products
        })
    }
})


export const { addCart } = cartSlice.actions

export default cartSlice.reducer