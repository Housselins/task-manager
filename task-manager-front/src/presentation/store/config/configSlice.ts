import { Tasker } from "@/domain/models/Tasker";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  taskerLogged: Tasker | undefined;
}

const initialState: AuthState = {
  taskerLogged: undefined
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setTaskerLoggedState(state, action: PayloadAction<Tasker | undefined>) {
      state.taskerLogged = action.payload;
    },
  },
});

export const { setTaskerLoggedState } = authSlice.actions;

export default authSlice.reducer;
