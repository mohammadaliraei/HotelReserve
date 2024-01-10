import { configureStore } from "@reduxjs/toolkit";
import passengerReducer from "../features/Passenger";

export default configureStore({
  reducer: {
    passenger: passengerReducer,
  },
});
