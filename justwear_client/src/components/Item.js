import { useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, useTheme, Button } from "@mui/material";
import { addToCart } from "../state";
import { useNavigate } from "react-router-dom";

const Item = ({ item, width }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const { category, price, name, image } = item.attributes;
  const {
    data: {
      attributes: {
        formats: {
          medium: { url },
        },
      },
    },
  } = image;

  return (
    <Box width={width} height="fit-content">
      <Box>
        <img
          alt={item.name}
          height="400px"
          width="300px"
          src={`http://localhost:1337${url}`}
          onClick={() => navigate(`/shop/${category}/${item.id}`)}
          style={{ cursor: "pointer" }}
        />
      </Box>
      <Box>
        <Box>
          <Typography>{name}</Typography>
        </Box>
        <Box>
          <Typography>₹{price}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Item;
