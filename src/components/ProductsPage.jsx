import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const ProductsPage = () => {
  const navigate = useNavigate();
  const [products, setproducts] = useState([]);
  let sample =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo ullam consequuntur provident.";
  // console.log(sample.split(" ").splice(0, 5).join(" "));/
  const [allContent, setallContent] = useState(5);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setproducts(data.products);
        // console.log(products);
      });
  }, [products]);

  return (
    <div className="">
      <h2>All Products</h2>
      <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              onClick={() =>
                navigate(`/product/${product.id}`, { state: { product } })
              }
              key={product.id}
              className="w-full h-[250] rounded-sm bg-white"
            >
              <div className="w-full h-37.5 object-cover">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-center font-bold">{product.title}</h1>
              <p className="text-center">
                {product.description.split(" ").slice(0, allContent).join(" ")}
                {allContent == 5 ? (
                  <span
                    onClick={() => setallContent(product.description.length)}
                    className="hover:cursor-pointer"
                  >
                    ...
                  </span>
                ) : (
                  <span
                    className="hover cursor-pointer text-red-500"
                    onClick={() => setallContent(5)}
                  >
                    read less
                  </span>
                )}
              </p>
              <p>N{product.price.toLocaleString()}</p>
            </div>
          ))
        ) : (
          <div className="">
            <p>no product available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
