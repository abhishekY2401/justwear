import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Box padding="4em" backgroundColor="rgb(207 209 255)">
      <Box display="flex" gap="10rem">
        <Box
          onClick={() => navigate("/")}
          sx={{
            "&:hover": { cursor: "pointer" },
            fontFamily: "Taviraj",
            fontWeight: "900",
            fontSize: "1.6rem",
            color: "rgba(40, 40, 40)",
          }}
        >
          justwear
        </Box>
        <Box display="flex" flexDirection="column" gap="2px">
          <Typography fontSize="1.01rem" color="rgb(80 78 78)" fontWeight="700">
            Shop
          </Typography>
          <Box color="#575656">
            <Typography>Mens</Typography>
            <Typography>Womens</Typography>
            <Typography>Kids</Typography>
            <Typography>Sports</Typography>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" gap="2px">
          <Typography fontSize="1.01rem" color="rgb(80 78 78)" fontWeight="700">
            Shop
          </Typography>
          <Box color="grey">
            <Typography>Mens</Typography>
            <Typography>Womens</Typography>
            <Typography>Kids</Typography>
            <Typography>Sports</Typography>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" gap="2px">
          <Typography fontSize="1.01rem" color="rgb(80 78 78)" fontWeight="700">
            Shop
          </Typography>
          <Box color="grey">
            <Typography>Mens</Typography>
            <Typography>Womens</Typography>
            <Typography>Kids</Typography>
            <Typography>Sports</Typography>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column">
          <Box>Follow us on</Box>
          <Box display="flex">
            <Box>I</Box>
            <Box>T</Box>
            <Box>F</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
