import "./navbar.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  SearchOutlined,
  MenuOutlined,
  ShoppingBagOutlined,
  PersonOutline,
} from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="60px"
      backgroundColor="rgba(255, 255, 255, 0.95)"
      color="black"
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justify-content="center"
        alignItems="center"
        gap="80px"
      >
        <Typography variant="h4" sx={{ cursor: "pointer" }}>
          Mens
        </Typography>
        <Typography variant="h4" sx={{ cursor: "pointer" }}>
          Womens
        </Typography>
        <Typography variant="h4" sx={{ cursor: "pointer" }}>
          Kids
        </Typography>
        <Typography variant="h4" sx={{ cursor: "pointer" }}>
          Sports
        </Typography>

        <Box
          onClick={() => navigate("/")}
          sx={{
            "&:hover": { cursor: "pointer" },
            fontFamily: "Taviraj",
            fontWeight: "900",
            fontSize: "1.6rem",
          }}
        >
          justwear
        </Box>

        <Typography variant="h4" sx={{ cursor: "pointer" }}>
          About
        </Typography>
        <Typography variant="h4" sx={{ cursor: "pointer" }}>
          Contact
        </Typography>

        <IconButton>
          <SearchOutlined />
        </IconButton>
        <IconButton>
          <ShoppingBagOutlined />
        </IconButton>
        <IconButton>
          <PersonOutline />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Navbar;
