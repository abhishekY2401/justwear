import { useSelector } from "react-redux";
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ProductComponent = () => {
  const products = useSelector((state) => state);
  const items = products?.products?.products?.data;
  console.log(products.products.products.data);

  return (
    <>
      {items?.map((product, i) => {
        const wearData = {
          id: product?.id,
          type: product?.attributes?.Type,
          name: product?.attributes?.name,
          url: product?.attributes?.image?.data?.attributes?.url,
          price: product?.attributes?.price,
          shortDesc: product?.attributes?.shortDescription,
          longDesc: product?.attributes?.longDescription
        };

        return (
          <>
            <Link to={`/products/${wearData.type.toLowerCase()}/${wearData.id}`} state={wearData}>
              <Card sx={{ width: 320, height: 500 }} key={i}>
                <CardMedia
                  sx={{ height: 300, width: 320, opacity: 0.9 }}
                  image={
                    "http://localhost:1337" +
                    wearData.url
                  }
                  title={wearData.name}
                />

                <CardContent sx={{ color: "#383838", display: "flex" }}>
                  <Box>
                    <Typography sx={{ fontWeight: 800, fontSize: "1.05rem" }}>
                      {wearData.name}
                    </Typography>

                    <Typography sx={{ fontWeight: 800, fontSize: "1.55rem" }}>
                      <span>₹</span>
                      {wearData.price}
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: 800,
                        fontSize: "0.95rem",
                        color: "#9b9f99",
                      }}
                    >
                      {wearData.shortDesc}
                    </Typography>
                  </Box>
                  <Box cursor="pointer">
                    <FavoriteBorderIcon />
                  </Box>
                </CardContent>
              </Card>
            </Link>
          </>
        );
      })}
    </>
  );
};

export default ProductComponent;
