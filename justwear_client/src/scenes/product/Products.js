import { useParams } from "react-router-dom"
import {useState } from "react";
import ProductList from "../product/ProductListing";

const Products = () => {

  const cartId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  return (
    <div className="products" style={{display: "flex"}}>
      <div className="left" style={{width: "22%", display: "flex",  "padding-left": "45px", "flex-direction": "column"}}>
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">T-Shirts</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">Skirts</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="3">Jackets</label>
          </div>
        </div>
        <div className="filterItem">
          <h2>Filter by Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort By</h2>
          <div className="inputItem">
            <input type="radio" id="asc" value="asc" name="price" onChange={e => setSort("asc")} />
            <label htmlFor="asc">Price (Lowest First)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="desc" value="desc" name="price" onChange={e => setSort("desc")} />
            <label htmlFor="asc">Price (Highest First)</label>
          </div>
        </div>
      </div>
      <div className="right" style={{width: "100%"}}>
        <ProductList/>
      </div>
    </div>
  )
}

export default Products