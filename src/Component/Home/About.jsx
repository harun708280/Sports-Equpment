import React from "react";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Marquee from "react-fast-marquee";
const About = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex flex-col md:flex-row  my-9 gap-8">
        {/* Image Section */}
        <div className="flex-1 relative">
          <div
            className="hero h-[300px] md:h-[500px] w-full bg-cover bg-center bg-fixed rounded-lg"
            style={{
              backgroundImage:
                "url(https://www.monaco.edu/wp-content/uploads/sites/4/2021/07/Sports_Management.jpg)",
            }}
          >
            <div className="hero-overlay bg-black bg-opacity-40 rounded-lg"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img
              className="h-[150px] md:h-[400px] w-[150px] md:w-[400px] object-cover border-4 border-white shadow-lg rounded-lg"
              src="https://www.monaco.edu/wp-content/uploads/sites/4/2021/07/Sports_Management.jpg"
              alt="Sports Management"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 ">
            About Us
          </h1>
          <p className="text-xl font-semibold  mb-2 mt-5">
            We Offer Quality Sports Gear
          </p>
          <p className=" mt-5">
            Discover a wide range of premium sports gear designed to elevate
            your performance. Whether you're a professional athlete or a fitness
            enthusiast, we ensure quality, durability, and comfort in every
            product.
          </p>
          <div className="my-4">
            <h1 className="text-xl font-bold">Features</h1>

            <p className="flex items-center mt-4 gap-3 text-lg">
              <IoCheckmarkCircleSharp className="text-lime-600 text-2xl" />
              <span>
                Precision-engineered equipment for optimal performance
              </span>
            </p>
            <p className="flex items-center mt-4 gap-3 text-lg">
              <IoCheckmarkCircleSharp className="text-lime-600 text-2xl" />
              <span>
                Designed to meet the needs of beginners and pros alike
              </span>
            </p>
            <p className="flex items-center mt-4 mb-7 gap-3 text-lg">
              <IoCheckmarkCircleSharp className="text-lime-600 text-2xl" />
              <span>
                Built with the highest quality materials for long-lasting use
              </span>
            </p>

            <NavLink
              to="/all-Equipment"
              className="text-lg uppercase bg-custom-gradient text-white p-4 rounded-lg shadow-md transition-transform duration-200 hover:scale-105"
            >
              Explore Our Collection
            </NavLink>
          </div>
        </div>
      </div>
      <div className="my-10">
        <h2 className="text-2xl font-bold text-center mb-4">
          Powered By Our Trusted Partners
        </h2>
        <p className="text-center text-lg md:w-6/12 mx-auto mb-6">
          We are proud to be partnered with some of the leading brands in the
          industry.
        </p>
        <Marquee
          gradient={true}
          gradientWidth={50}
          speed={50}
         
        >
          <div className="mx-5 flex items-center gap-10 md:gap-20">
            <img
              className="h-20 w-40 object-contain"
              src="https://static.wixstatic.com/media/647afe_38f054617e7e46668344e6364fccc06a~mv2.png/v1/fill/w_568,h_340,al_c,lg_1,q_85,enc_auto/647afe_38f054617e7e46668344e6364fccc06a~mv2.png"
              alt="Daraz"
            />
            <img
              className="h-20 w-40 object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Asics_Logo.svg/1280px-Asics_Logo.svg.png"
              alt="Evaly"
            />
            <img
              className="h-20 w-40 object-contain"
              src="https://crayon.pk/wp-content/uploads/2018/11/reeebok.jpg"
              alt="Chaldal"
            />
            <img
              className="h-20 w-40 object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Converse_logo.svg/1024px-Converse_logo.svg.png"
              alt="Brand"
            />
            <img
              className="h-20 w-40 object-contain"
              src="https://i.pinimg.com/originals/af/b6/cc/afb6cc11da134fb2dbbe3a5a58e702f6.png"
              alt="Ryans"
            />
            <img
              className="h-20 w-40 object-contain"
              src="https://www.pngmart.com/files/22/Under-Armour-Logo-PNG.png"
              alt="Bikroy"
            />
            <img
              className="h-20 w-40 object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/New_Balance_logo.svg/800px-New_Balance_logo.svg.png"
              alt="Brand"
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default About;
