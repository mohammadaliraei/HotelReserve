import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  adults: number;
  children: number;
  infants: number;
  valueReserve: string;
}
const initialState: InitialState = {
  adults: 0,
  children: 0,
  infants: 0,
  valueReserve: "",
};

export const passengerSlice = createSlice({
  name: "passenger",
  initialState,
  reducers: {
    incrementAdults: (state) => {
      state.adults += 1;
    },
    decrementAdults: (state) => {
      if (state.adults > 0) {
        state.adults -= 1;
      }
    },
    incrementChildren: (state) => {
      state.children += 1;
    },
    decrementChildren: (state) => {
      if (state.children > 0) {
        state.children -= 1;
      }
    },
    incrementInfants: (state) => {
      state.infants += 1;
    },
    decrementInfants: (state) => {
      if (state.infants > 0) {
        state.infants -= 1;
      }
    },
    ChangeSearchBar: (state, action: PayloadAction<string>) => {
      state.valueReserve = action.payload;
      console.log(state.valueReserve);
    },
  },
});

export const {
  incrementAdults,
  decrementAdults,
  incrementChildren,
  decrementChildren,
  incrementInfants,
  decrementInfants,
  ChangeSearchBar,
} = passengerSlice.actions;

export default passengerSlice.reducer;
