import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import products from "demo/products";
import { HYDRATE } from "next-redux-wrapper";

// Initial State
const initialState = {
  archiveProduct: {
    status: "loading",
    response: {
      products: [],
      totalProducts: 1,
      limit: 1,
      totalPages: 1,
      page: 1,
      pagingCounter: 1,
      hasPrevPage: false,
      hasNextPage: false,
      prevPage: null,
      nextPage: null,
      filterOptions: {
        typeId: "",
      },
    },
    pageQueryLink: "",
    productView: "grid",
  },

  singleProduct: {},

  types: {
    // product meta :-types
    loading: false,
    typesList: [],
  },

  checkout: {
    product: null,
  },

  order: {
    status: "not-ordered", // ( not-ordered, ordered, ordering )
    orderData: null,
  },
};

// Reducer
export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    //archiveProduct
    setProductList: (state, { payload }) => {
      const productDocsReaponse = payload;

      state.archiveProduct.status = "loaded";
      state.archiveProduct.response = productDocsReaponse;
    },

    //singleProduct
    setSingleProduct: (state, { payload }) => {
      const singleProduct = payload;

      state.singleProduct = singleProduct;
    },

    // set Product view
    setProductView: (state, { payload }) => {
      const productView = payload; // ( grid|list  )

      state.archiveProduct.productView = productView;
    },

    // types
    setTypesList: (state, { payload }) => {
      state.types.loading = false;
      state.types.typesList = payload;
    },

    //checkout
    setCheckoutProduct: (state, { payload }) => {
      const product = payload; // ( grid|list  )
      state.checkout.product = product;
    },

    //order
    setOrderedProduct: (state, { payload }) => {
      const orderData = payload;
      state.order.status = "ordered";
      state.order.orderData = orderData;
    },

    // order
  },

  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      const product = action.payload.product;
      // console.log("HYDRATE", action.payload);
      // console.log("STATE", state);
      state.archiveProduct = product.archiveProduct;
      state.singleProduct = product.singleProduct;
      state.types = product.types;
      state.checkout = product.checkout;
      state.order = product.order;
    });

    // Thunk syncProductList
    builder.addCase(syncProductList.pending, (state) => {
      state.archiveProduct.status = "loading";
    });
    builder.addCase(syncProductList.fulfilled, (state, { payload }) => {
      const response = payload;
      state.archiveProduct.status = "loaded";
      state.archiveProduct.response = response;
    });
    builder.addCase(syncProductList.rejected, (state, action) => {
      state.archiveProduct.status = "error";
      state.error = action.error.message;
    });

    //Thunk createOrder
    builder.addCase(createOrder.pending, (state) => {
      state.order.status = "ordering";
      state.order.orderData = null;
    });
    builder.addCase(createOrder.fulfilled, (state, { payload }) => {
      const response = payload;
      state.order.status = "ordered";
      state.order.orderData = response;
    });
    builder.addCase(createOrder.rejected, (state) => {
      state.order.status = "not-ordered";
      state.order.orderData = null;
    });
  },
});

// Async Actions
export const syncProductList = createAsyncThunk(
  "syncProductList",
  async (query, thunkAPI) => {
    const {
      product: {
        archiveProduct: {
          response: {
            limit,
            page,
            filterOptions: { typeId },
          },
        },
      },
    } = thunkAPI.getState();

    query = {
      typeId: query.typeId !== undefined ? query.typeId : typeId,
      page: query.page || page,
      productsPerPage: query.productsPerPage || limit,
    };

    try {
      const response = await axios.get(
        `/api/products?typeId=${query.typeId ? query.typeId : ""}&page=${
          query.page ? query.page : ""
        }&productsPerPage=${query.productsPerPage ? query.productsPerPage : ""}`
      );
      return response.data.body;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const createOrder = createAsyncThunk(
  "createOrder",
  async (body, thunkAPI) => {
    /*
    body = {
      productId: "",
      checkoutInfo: {
        fullName,
        conpanyName,
        zipCode,
        city,
        phone
        email,
        address,
      }
    }
    */
    try {
      const response = await axios.post("/api/orders", { ...body });
      return response.data.body.newOrder;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const {
  setTypesList,
  setSingleProduct,
  setProductList,
  setProductView,
  // checkout
  setCheckoutProduct,
  //order
  setOrderedProduct,
} = productSlice.actions;

export default productSlice.reducer;
