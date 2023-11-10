import { createSlice } from "@reduxjs/toolkit"

const data = localStorage.getItem("user") || "{}"
const token = localStorage.getItem("token")

const initialState = { user: JSON.parse(data), token }

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, { payload }) => {
            console.log("🚀 ~ file: authSlice.js:13 ~ payload:", payload)
            localStorage.setItem("user", JSON.stringify(payload.data))
            localStorage.setItem("token", JSON.stringify(payload.token))
            state.user = payload.data
            state.token = payload.token
        },
        logout: (state, { payload }) =>{
            state.user= {} 
            state.token=""
            localStorage.clear()

        }
    }
})

export const { login, logout } = AuthSlice.actions
export default AuthSlice.reducer