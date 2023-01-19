import { Image } from "@mui/icons-material";
import { Container } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import autumn from "../../assets/autumn_home.svg";
import casual from "../../assets/casual.svg";

const Home = () => {
  const images = [autumn, casual];
  return (
    <>
      <Carousel>
        {images.map((img, i) => (
          <img src={img} alt="images" />
        ))}
      </Carousel>
    </>
  );
};

export default Home;
