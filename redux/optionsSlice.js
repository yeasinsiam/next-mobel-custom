import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  initialPageLoading: true,
  globalSearch: {
    isVisible: false,
  },
  cart: {
    isVisible: false,
    cartItemCount: 2,
  },

  contact: {
    loading: false,
    data: null,
  },
};

export const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    // set initial page loader
    setInitialPageLoading: (state, { payload }) => {
      const newInitialPageLoading = payload; // true|false
      state.initialPageLoading = newInitialPageLoading;
    },
    //globalSearch
    visibleGlobalSearch: (state) => {
      state.globalSearch.isVisible = true;
    },
    hideGlobalSearch: (state) => {
      state.globalSearch.isVisible = false;
    },

    // cart
    visibleCart: (state) => {
      state.cart.isVisible = true;
    },
    hideCart: (state) => {
      state.cart.isVisible = false;
    },
  },

  extraReducers: (builder) => {
    // builder.addCase(HYDRATE, (state, action) => {
    //   return state;
    // });

    //Thunk addContactComment
    builder.addCase(addContactComment.pending, (state) => {
      state.contact.loading = true;
      state.contact.data = null;
    });
    builder.addCase(addContactComment.fulfilled, (state, { payload }) => {
      const contactData = payload;

      state.contact.loading = false;
      state.contact.data = contactData;
    });
    builder.addCase(addContactComment.rejected, (state) => {
      state.order.status = false;
      state.contact.data = null;
    });
  },
});

// Async Actions
export const addContactComment = createAsyncThunk(
  "addContactComment",
  async (body, thunkAPI) => {
    try {
      const response = await axios.post("/api/contacts", { ...body });
      return response.data.body.newContact;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const {
  visibleGlobalSearch,
  hideGlobalSearch,
  visibleCart,
  hideCart,
  setInitialPageLoading,
} = optionsSlice.actions;

export default optionsSlice.reducer;
