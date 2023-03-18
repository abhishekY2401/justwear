import {
  Box,
  Button,
  IconButton,
  Typography,
  Container,
  ButtonBase,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import autumn from "../../assets/autumn_home.svg";
import casual from "../../assets/casual.svg";
import outfit from "../../assets/women_outfit.svg";
import { theme } from "../../theme.js";
import ProductListing from "../product/ProductListing";

const Home = () => {
  const images = [autumn, casual, outfit];
  return (
    <>
      <Container width="100%">
        <Container>
          <Carousel>
            {images.map((img, i) => (
              <div key={i}>
                <img src={img} alt="images" style={{ width: "100%" }} />
                <ButtonBase>Explore More Products</ButtonBase>
              </div>
            ))}
          </Carousel>
        </Container>
        <Container>
          <Typography
            sx={{
              fontFamily: theme.typography.fontFamily,
              fontSize: "1.5rem",
              letterSpacing: "-0.5px",
              textAlign: "center",
              marginTop: "50px"
            }}
          >
            Collections
          </Typography>
        </Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></Box>
      </Container>
    </>
  );
};

export default Home;
