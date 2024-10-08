import React, { useState, useEffect } from "react";
import PetHeader from "../Header/PetHeader";
import "./PetItemspage.css";
import PetItem from "../PetItems/Items";
import Footer from "../Footer/Footer";
import axios from "axios";

const PetItemspage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://43.203.251.194:300/products")
      .then((response) => {
        console.log("response.data:", response.data)
        setProducts(response.data);
        console.log(products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <PetHeader />
        {products.map((product) => (
          <PetItem key={product.prodid} product={product} />
        ))}
      <Footer />
    </div>
  );
};

export default PetItemspage;