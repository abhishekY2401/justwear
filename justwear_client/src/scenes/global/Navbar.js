import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import {
  SearchOutlined,
  MenuOutlined,
  ShoppingBagOutlined,
  PersonOutline,
} from "@mui/icons-material";
import SearchBar from "material-ui-search-bar";
import { Box, IconButton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../state";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const category = ["mens", "womens", "kids", "sports"];
  const [expandSearch, setExpandSearch] = useState(false);

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
        <Link to={`/shop/${category[0]}`}>
          <Typography variant="h4" sx={{ cursor: "pointer" }}>
            Mens
          </Typography>
        </Link>
        <Link to={`/shop/${category[1]}`}>
          <Typography variant="h4" sx={{ cursor: "pointer" }}>
            Womens
          </Typography>
        </Link>
        <Link to={`/shop/${category[2]}`}>
          <Typography variant="h4" sx={{ cursor: "pointer" }}>
            Kids
          </Typography>
        </Link>
        <Link to={`/shop/${category[3]}`}>
          <Typography variant="h4" sx={{ cursor: "pointer" }}>
            Sports
          </Typography>
        </Link>

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

        <IconButton onClick={() => setExpandSearch(true)}>
          <SearchOutlined />
        </IconButton>

        <IconButton onClick={() => dispatch(setIsCartOpen({}))}>
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
