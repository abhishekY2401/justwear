import { Image } from "@mui/icons-material";
import { Box, Button, IconButton, Typography, Container } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import autumn from "../../assets/autumn_home.svg";
import casual from "../../assets/casual.svg";
import outfit from "../../assets/women_outfit.svg";
import { theme } from "../../theme.js";

const Home = () => {
  const images = [autumn, casual, outfit];
  return (
    <Container width="100%">
      <Container>
        <Carousel>
          {images.map((img, i) => (
            <img src={img} alt="images" style={{ width: "100%" }} />
          ))}
        </Carousel>
      </Container>
      <Container>
        <Typography
          sx={{ fontFamily: theme.typography.fontFamily, fontSize: "2rem" }}
        >
          Collections
        </Typography>
      </Container>
    </Container>
  );
};

export default Home;
