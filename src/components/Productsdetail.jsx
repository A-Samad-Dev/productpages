import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import { FaStar } from "react-icons/fa";
import { MdOutlineStars } from "react-icons/md";
import { RxCaretLeft } from "react-icons/rx";
import { TiTickOutline } from "react-icons/ti";
import { TbTruckDelivery } from "react-icons/tb";
import { GiSelfLove } from "react-icons/gi";
import { GiPadlock } from "react-icons/gi";
import Review from "./Review";

const Productdetails = () => {
  const { id } = useParams();
  console.log("this is the product: ", id);
  const [data, setdata] = useState(null);

  const location = useLocation();
  const product = location.state?.product || data;
  console.log(product);

  useEffect(() => {
    async function fetchProducts() {
      const fetchRes = await fetch(`https://dummyjson.com/products/${id}`);
      console.log(fetchRes);
      const dataRes = await fetchRes.json();
      setdata(dataRes);
      console.log(dataRes);
    }

    fetchProducts();
  }, []);

  const [imageTracker, setimageTracker] = useState(null);
  const [colorpicker, setcolorpicker] = useState(null);
  const [count, setcount] = useState(0);
  const [activeButton, setactiveButton] = useState("specs");
  // useEffect(() => {
  //   if (product) {
  //     setactiveButton(product.description);
  //   }
  // }, [product]);

  return (
    <>
      {product && (
        <div>
          <div>
            <span
              className="cursor-pointer flex gap-1 text-3xl items-center"
              onClick={() => window.history.back()}
            >
              {" "}
              <RxCaretLeft size={40} /> <span>Back</span>
            </span>
          </div>
          <div className=" mt-10 w-[70%] md:w-[80%] mx-auto bg-white  rounded-md shadow-black/30 shadow-lg object-contain px-2 md:px-3">
            <div className="py-5  grid grid-cols-1 md:grid-cols-3 px-9 md:px-1">
              <div className="flex flex-col object-contain ">
                <div className="mt-3 md:w-15 md:h-15 flex-1 order-2 object-contain flex gap-x-2">
                  <img
                    onClick={() => setimageTracker(product.images[0])}
                    src={product.images[0]}
                    alt={product.title}
                    className="mb-1 border hover:border-amber-700 hover:border-2 w-20 h-20 md:h-15"
                  />
                  <img
                    onClick={() => setimageTracker(product.images[1])}
                    src={product.images[1] || product.images[0]}
                    alt={product.title}
                    className=" mb-1 border hover:border-amber-700 hover:border-2   w-20 h-20 md:h-15"
                  />
                  <img
                    onClick={() => setimageTracker(product.images[2])}
                    src={product.images[2] || product.images[0]}
                    alt={product.title}
                    className="mb-1 border hover:border-amber-700 hover:border-2   w-20 h-20 md:h-15"
                  />
                  <img
                    onClick={() => setimageTracker(product.images[3])}
                    src={product.images[3] || product.images[0]}
                    alt={product.title}
                    className=" mb-1 border hover:border-amber-700 hover:border-2  w-20 h-20 md:h-15 "
                  />
                  <img
                    onClick={() => setimageTracker(product.images[4])}
                    src={product.images[4] || product.images[0]}
                    alt={product.title}
                    className="mb-1 border hover:border-amber-700 hover:border-2   w-20 h-20 md:h-15"
                  />
                </div>
                <div className="order-1 flex-1 w-110 md:w-85 rounded-sm bg-blue-500/5 shadow-black shadow-sm px-1 py-12">
                  <img
                    src={imageTracker || product.images[0]}
                    alt={product.title}
                    className=""
                  />
                </div>
              </div>
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
                <h2 className="inline-flex items-center text-green-500">
                  <span>
                    <TiTickOutline className="size-8 text-green-500" />
                  </span>
                  {product.availabilityStatus}{" "}
                </h2>
                <p className="text-gray-600">select condition:</p>
                <div className="flex gap-x-3">
                  <button className=" p-3 bg-blue-200/20 tracking-tight hover:bg-blue-400 border rounded-md active:border-red-500">
                    Brand New
                  </button>
                  <button className=" p-3 bg-blue-200/20 tracking-tight hover:bg-blue-400 border rounded-md active:border-red-500">
                    Used
                  </button>
                  <button className=" p-3 bg-blue-200/20 tracking-tight hover:bg-blue-400 border rounded-md active:border-red-500">
                    Refurbished
                  </button>
                </div>
                <p className="my-2">color:{colorpicker}</p>
                <div className="mt-2 flex gap-x-2  w-full h-10">
                  <div
                    className="w-10 h-10  rounded-full bg-blue-500"
                    onClick={() => setcolorpicker("Blue")}
                  ></div>
                  <div
                    className="w-10 h-10 rounded-full bg-purple-500"
                    onClick={() => setcolorpicker("Purple")}
                  ></div>
                  <div
                    className=" w-10 h-10 rounded-full bg-green-500"
                    onClick={() => setcolorpicker("Green")}
                  ></div>
                  <div
                    className="w-10 h-10 rounded-full bg-red-500"
                    onClick={() => setcolorpicker("Red")}
                  ></div>
                </div>
                <ul className="unorderedlist">
                  <li>Brand: {product.brand}</li>
                  <li>Category: {product.category}</li>
                  <li>Rating:{product.rating}</li>
                  <li>Return Policy:{product.returnPolicy}</li>
                  <li>Weight:{product.weight}kg</li>
                </ul>
              </div>

              <div className="border p-5 shadow-lg mt-3 md:mt-0">
                <div className="flex items-center">
                  <h2 className="text-3xl font-bold">
                    ${Math.trunc(product.price - product.discountPercentage)}
                  </h2>
                  <h3 className=" ml-5">
                    <span className="line-through text-gray-500">
                      price ${product.price}
                    </span>
                    <br />
                    <span
                      className={`text-red-400 ${
                        !count
                          ? "hidden"
                          : Math.trunc(
                              (product.price - product.discountPercentage) *
                                count,
                            )
                      }`}
                    >
                      Total:${" "} 
                      {Math.trunc(product.price - product.discountPercentage) *
                        count}
                    </span>
                  </h3>
                </div>
                <p className="text-gray-500 md:text-sm ">
                  Price per Kg includes VAT
                </p>
                <div className="my-2 border w-28 flex items-center justify-evenly object-contain ">
                  <button
                    className="text-2xl"
                    onClick={() => {
                      setcount(Math.abs(count - 1));
                    }}
                  >
                    -
                  </button>
                  <p>{count}</p>

                  <button
                    className="text-2xl "
                    onClick={() => {
                      setcount(count + 1);
                    }}
                  >
                    +
                  </button>
                </div>

                <button className=" w-full  my-2  bg-blue-400  hover:bg-blue-600 py-3 px-9 text-white rounded-md hover:scale-105 transition-all duration-400 ">
                  Add to Cart
                </button>
                <br />
                <button className="w-full my-2  bg-gray-300/50 text-blue-400 hover:bg-gray-500 py-3 px-9  rounded-md hover:scale-105 transition-all duration-400">
                  Buy Now
                </button>
                <button className="inline-flex items-center gap-x-1 mx-auto px-25  hover:text-blue-400 py-5">
                  {" "}
                  <span>
                    <GiSelfLove className="size-5 text-blue-300" />
                  </span>{" "}
                  Add to Wishlist
                </button>
                <p className="w-full border-t-2 mb-5 border-gray-300"></p>
                <div className="flex flex-col gap-y-2  ">
                  <p className="inline-flex items-center gap-x-2 ">
                    <TbTruckDelivery /> {product.shippingInformation}
                  </p>
                  <p className="inline-flex items-center gap-x-2 ">
                    <GiPadlock />
                    Secure Payment
                  </p>
                  <p className="inline-flex items-center gap-x-2 ">
                    <MdOutlineStars /> {product.warrantyInformation}
                  </p>
                </div>

                {/* https://thegood.com/wp-content/uploads/image8-8-1024x481.png */}
                {/* https://cdn.dribbble.com/userupload/33328319/file/original-eeef2f1da4d5f7db35ea463f16ad3336.png?resize=400x0 */}
              </div>
            </div>
          </div>
          <div className=" mt-5 bg-gray-300 w-full h-200">
            <div className="flex flex-col  bg-white">
              <div className="flex gap-x-3">
                <button
                  onClick={() => setactiveButton("specs")}
                  className={`px-3 py-3 border-b  ${
                    activeButton === "specs"
                      ? "border-b-2 border-b-blue-500 text-blue-500 font-semibold"
                      : "text-gray-500 border-b-gray-300"
                  }
                  }`}
                >
                  Specifications
                </button>
                <button
                  onClick={() => setactiveButton("reviews")}
                  className={`px-3 py-3 border-b  ${
                    activeButton === "reviews"
                      ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
                      : "text-gray-500 border-b-gray-300"
                  }`}
                >
                  Reviews
                </button>
                <button
                  onClick={() => setactiveButton("shipping")}
                  className={`px-3 py-3 border-b  ${
                    activeButton === "shipping"
                      ? "border-b-2 border-blue-500 text-blue-500 font-semibold"
                      : "text-gray-500 border-b-gray-300"
                  }`}
                >
                  Shipping info
                </button>
              </div>
              <div className="bg-white p-4">
                {activeButton === "specs" && <p>{product.description}</p>}

                {activeButton === "reviews" && <Review product={product} />}

                {activeButton === "shipping" && (
                  <p>{product.shippingInformation}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Productdetails;
