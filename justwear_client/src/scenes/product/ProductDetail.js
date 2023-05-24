import { Link, useLocation } from "react-router-dom";
import {
  Typography,
  Container,
} from "@mui/material";
import {useState} from "react";
import {theme} from "../../theme";
import AddShoppingCartIcon  from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"

const ProductDetail = (props) => {
  const location = useLocation();
  const data = location.state;
  const [quantity, setQuantity] = useState(1);

  console.log(data);

  return (
    <Container sx={{"paddingTop":"40px", "paddingBottom":"40px", "display": "flex"}}>
      <div className="left">
        <img src={`http://localhost:1337${data.url}`} alt={data.name} style={{ width: "100%", height: "100%" }}/>
      </div>
      <div className="right" style={{width: "50%", paddingLeft: "50px"}}>
        <Typography sx={{fontFamily: theme.typography.h1, color: "#6495ED"}}>{data.name}</Typography>
        <Typography sx={{fontFamily: theme.typography.h2, paddingBottom: "10px"}}>
          <span>$</span> {data.price}
        </Typography>
        <Typography>{data.longDesc}</Typography>
        <div className="quantity" style={{display: "flex", alignItems: "center"}}>
          <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))} style={{padding: "12px", border: "none", backgroundColor: "#282828", color: "#fff", borderRadius: "10px"}}>-</button>
          <span style={{padding: "5px", fontSize: "16px"}}>{quantity}</span>
          <button onClick={() => setQuantity((prev) => prev + 1)} style={{padding: "12px", border: "none", backgroundColor: "#282828", color: "#fff", borderRadius: "10px"}}>+</button>
        </div>

        <button className="add" style={{marginTop: "10px", paddingTop:"20px", width: "32%", display: "flex", alignItems: "center", justifyContent: "space-around", padding: "20px", border: "none", backgroundColor: "#282828", color: "#fff", borderRadius: "10px"}}>
          <AddShoppingCartIcon />
          ADD TO CART
        </button>

        <div className="link" style={{paddingTop: "10px"}}>
          <div className="item" style={{display: "flex", gap: "5px"}}>
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ProductDetail