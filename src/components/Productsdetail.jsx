import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { FaStar } from "react-icons/fa";
import { MdOutlineCreditCard } from "react-icons/md";
import { RxCaretLeft } from "react-icons/rx";

const Productdetails = () => {
  const { id } = useParams();
  console.log("this is the product: ", id);
  const [data, setdata] = useState(null)

    const location = useLocation();
    const product = location.state?.product || data;
    console.log(product);

   useEffect(() => {

     async function fetchProducts() {
       const fetchRes = await fetch(`https://dummyjson.com/products/${id}`)
       console.log(fetchRes);
       const dataRes = await fetchRes.json();
       setdata(dataRes)
       console.log(dataRes);
     }
     
     fetchProducts()


    }, []);

    


  const [imageTracker, setimageTracker] = useState(null)

  return (
    <>
      {product && (
        <div>
          <div>
            <span className="cursor-pointer flex gap-1 text-3xl items-center" onClick={() => window.history.back()}> <RxCaretLeft size={40} /> <span>Back</span></span>
          </div>
          <div className=" mt-10 w-[80%] md:w-[50%] mx-auto bg-white  rounded-md shadow-black/30 shadow-lg obbject-contain px-15 md:px-5">
            <div className="px-">
              {" "}
              <h1 className="text-2xl  font-serif tracking-tight">
                {product.title}
              </h1>
              <p className="inline-flex text-sm my-1">
                <span className="">{product.sku}</span>
                <span className="mx-2 items-center inline-flex text-blue-400">
                  {" "}
                  <FaStar className="text-yellow-200" />
                  <FaStar className="text-yellow-200" />
                  <FaStar />
                  {product.reviews.length} reviews{" "}
                </span>
                <span className="">|</span>
                <span className="mx-2">{product.shippingInformation}</span>
              </p>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 px-1">
              <div className="flex">
                <div className="w-10 object-contain">
                  <img
                    onClick={() => setimageTracker(product.images[0])}
                    src={product.images[0]}
                    alt={product.title}
                    className="mb-1 border hover:border-amber-700 hover:border-2 "
                  />
                  <img
                  onClick={() => setimageTracker(product.images[1])}
                    src={product.images[1] || product.images[0]}
                    alt={product.title}
                    className=" mb-1 border hover:border-amber-700 hover:border-2 "
                  />
                  <img
                  onClick={() => setimageTracker(product.images[2])}
                    src={product.images[2] || product.images[0]}
                    alt={product.title}
                    className="mb-1 border hover:border-amber-700 hover:border-2 "
                  />
                  <img
                  onClick={() => setimageTracker(product.images[3])}
                    src={product.images[3] || product.images[0]}
                    alt={product.title}
                    className=" mb-1 border hover:border-amber-700 hover:border-2 "
                  />
                  <img
                  onClick={() => setimageTracker(product.images[4])}
                    src={product.images[4] || product.images[0]}
                    alt={product.title}
                    className="mb-1 border hover:border-amber-700 hover:border-2 "
                  />
                </div>
                <div className="w-50">
                  <img src={imageTracker || product.images[0]} alt="" />
                </div>
              </div>
              <div className="">
                <h2 className="">{product.availabilityStatus}</h2>
                <div className="flex items-center">
                  <h2 className="text-3xl font-bold">
                    ${Math.trunc(product.price - product.discountPercentage)}
                  </h2>
                  <h3 className=" ml-5">
                    <span className="line-through text-gray-500">
                      price ${product.price}
                    </span>
                    <br />
                    <span className="text-red-400">
                      instant savings $
                      {Math.trunc(
                        product.price * (product.discountPercentage / 100),
                      )}{" "}
                    </span>
                  </h3>
                </div>
                <p className="text-yellow-600">Limited supply at this price</p>
                <p className="">$0 OR sales Tax collected on This Item </p>
                <p className="inline-flex items-center text-blue-500">
                  {" "}
                  <span>
                    <MdOutlineCreditCard className="text-black size-8" />
                  </span>{" "}
                  6 months promo Financing Available
                </p>
                <div className="bg-gray-200 w-80 mb-10 mt-5 md:mt-1 pt-5 rounded-sm  ">
                  <div className="p-1 flex justify-evenly">
                    {" "}
                    <input
                      type="number"
                      className="w-15 py-3 text-center bg-white border "
                    />
                    <button className="bg-blue-400  hover:bg-blue-600 py-3 px-9 text-white rounded-md">
                      Add to Cart
                    </button>
                  </div>
                  <p className=" mt-5 px-8 text-blue-400">
                    Free Expedited shipping
                  </p>
                  <p className="pb-5 px-8 text-blue-400">
                    Order <span className="font-bold text-blue-400">now</span> for
                    free shipping
                  </p>
                </div>
                {/* https://thegood.com/wp-content/uploads/image8-8-1024x481.png */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Productdetails;
