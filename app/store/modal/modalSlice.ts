import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  isOpen: boolean;
  modalType: "login" | "signup" | "none";
}

const initialState: ModalState = {
  isOpen: false,
  modalType: "none",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<"login" | "signup">) {
      state.isOpen = true;
      state.modalType = action.payload;
    },
    closeModal(state) {
      state.isOpen = false;
      state.modalType = "none";
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
