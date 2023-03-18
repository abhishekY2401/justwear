import { createSlice } from "@reduxjs/toolkit";
import reducers from "./reducers/index";

const store = createSlice(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
