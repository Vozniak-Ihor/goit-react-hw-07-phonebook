import { configureStore } from "@reduxjs/toolkit";
import rootReduser from 'redux/contactSlice/contactSlice'

const store = configureStore({reducer: rootReduser})
export default store