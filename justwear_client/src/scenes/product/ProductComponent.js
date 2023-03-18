import { useSelector } from "react-redux";
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ProductComponent = () => {
  const products = useSelector((state) => state);
  const items = products?.products?.products?.data;
  console.log(products.products.products.data);

  return (
    <>
      {items?.map((product, i) => {
        return (
          <>
            <Card sx={{ width: 320, height: 500 }} key={i}>
              <CardMedia
                sx={{ height: 300, width: 320, opacity: 0.9 }}
                image={
                  "http://localhost:1337" +
                  product?.attributes?.image?.data?.attributes?.url
                }
                title={product?.attributes?.name}
              />

              <CardContent sx={{ color: "#383838", display: "flex" }}>
                <Box>
                  <Typography sx={{ fontWeight: 800, fontSize: "1.05rem" }}>
                    {product?.attributes?.name}
                  </Typography>

                  <Typography sx={{ fontWeight: 800, fontSize: "1.55rem" }}>
                    <span>₹</span>
                    {product?.attributes?.price}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: "0.95rem",
                      color: "#9b9f99",
                    }}
                  >
                    {product?.attributes?.shortDescription}
                  </Typography>
                </Box>
                <Box cursor="pointer">
                  <FavoriteBorderIcon />
                </Box>
              </CardContent>
            </Card>
          </>
        );
      })}
    </>
  );
};

export default ProductComponent;
