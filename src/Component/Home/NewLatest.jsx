import React, { useEffect, useState } from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from "react-router-dom";

const NewLatest = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const latestData = async () => {
      const res = await fetch(`http://localhost:9000/latest-equipment`);
      const data = await res.json();
      setProduct(data);
    };
    latestData();
  }, []);

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-center text-4xl font-extrabold">Latest Collection</h1>
      <p className="text-center text-lg text-gray-600 my-4 md:w-6/12 mx-auto">
        Explore our latest collection of premium products, designed to offer the
        best in quality and style. Find the perfect match for your needs from
        our curated selection!
      </p>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay={true}
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {product.map((item) => {
          console.log(item.image); // You can check the data in the console
          return (
            <div
              className="mr-8 shadow-lg relative   shadow-black rounded-lg my-12"
              key={item._id}
            >
              {" "}
              {/* Make sure to use a unique key */}
              <div className="">
                <img
                  className="h-60 w-full"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className="absolute top-10">
                <p className="bg-red-700 text-2xl p-3 px-5 text-white font-bold logo">
                  New
                </p>
              </div>
              <div className="px-5 pb-7">
                <h1 className="text-xl my-3 font-bold text-gray-900">
                  {item.itemName}
                </h1>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white flex space-x-2">
                    <FaBangladeshiTakaSign></FaBangladeshiTakaSign>
                    {item.price}{" "}
                  </span>
                  <NavLink
                    to={`/details/${item._id}`}
                    className="rounded-lg bg-custom-gradient px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                  >
                    View Details
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default NewLatest;
