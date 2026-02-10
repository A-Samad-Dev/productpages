import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import SkeletonLoader from "./SkeletonLoader";
import ProductPageCard from "./ProductPageCard";

const ProductsPage = () => {
  const navigate = useNavigate();
  const [products, setproducts] = useState([]);
  let sample =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo ullam consequuntur provident.";
  // console.log(sample.split(" ").splice(0, 5).join(" "));/
  const [allContent, setallContent] = useState(5);

  useEffect(() => {
    async function fetchProducts() {
      const fetchRes = await fetch("https://dummyjson.com/products")
      console.log(fetchRes);
      const data = await fetchRes.json();
      console.log(data.products);
      setproducts(data.products)
    }
    
    fetchProducts()
  }, [products]);

  return (
    <div className="p-8">
      <h2>All Products</h2>
      {products.length <= 0 ? (
          <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array(16). fill(0).map((_, index) => (
              <SkeletonLoader key={index} />
            ))}
          </div>
      ) : 
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map(product => (
            <ProductPageCard product={product} key={product.id} />
          ))}
        </div>
      }
    </div>
  );
};

export default ProductsPage;