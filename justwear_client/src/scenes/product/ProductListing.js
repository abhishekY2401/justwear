import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllItems, setItems } from "../../state";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../../redux/actions/productActions";
import { Box } from "@mui/material";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:1337/api/items?populate=*`
      );
      dispatch(setProducts(response?.data));
      console.log(response?.data);
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products: ", products);
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      gap="20px"
      justifyContent="center"
      alignItems="center"
      margin="40px"
    >
      <ProductComponent />
    </Box>
  );
};

export default ProductListing;
