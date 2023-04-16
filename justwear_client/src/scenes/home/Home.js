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
import ProductList from "../product/ProductListing";
import tshirts from "../../assets/categories/tshirts.webp";
import Category from "./Category";

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
              marginTop: "50px",
            }}
          >
            Trending
          </Typography>
          <ProductList />
        </Container>

        <Typography
          sx={{
            fontFamily: theme.typography.fontFamily,
            fontSize: "1.5rem",
            letterSpacing: "-0.5px",
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          Collections
        </Typography>
        <div style={{display: "flex", flexWrap: "wrap", gap: "60px"}}>
          <Category img={tshirts} item="T-SHIRT" count="20" />
          <Category img={tshirts} item="T-SHIRT" count="20" />
          <Category img={tshirts} item="T-SHIRT" count="20" />
          <Category img={tshirts} item="T-SHIRT" count="20" />
          <Category img={tshirts} item="T-SHIRT" count="20" />
          <Category img={tshirts} item="T-SHIRT" count="20" />
        </div>
          
      </Container>
    </>
  );
};

export default Home;
