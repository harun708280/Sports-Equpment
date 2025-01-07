import React from "react";
import { Carousel } from "flowbite-react";
import { Fade, Slide } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";
import c1 from "/c1.jpg";
import c2 from "/c2.jpg";
import c3 from "/c3.jpg"; // Properly added
import c4 from "/c4.jpg";
import c5 from "/c5.jpg";
import c6 from "/c6.jpg";

const HomeCaro = () => {
  return (
    <div className="">
      <div className="h-[500px] sm:h-h-[60vh] md:h-[60vh] lg:h-[60vh]">
        <Carousel slideInterval={3000}>
          <div className="relative h-full">
            <img className="w-full h-full" src={c4} />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
              <div className="absolute bottom-10 left-10 text-white space-y-4">
                <Slide>
                  <Fade cascade damping={1e-1}>
                    <h1 className="text-3xl md:text-5xl font-bold">
                      Tennis Rackets & Dumbbells
                    </h1>
                  </Fade>
                  <p className="text-sm md:text-lg">
                    Elevate your game with premium sports gear.
                  </p>
                  <NavLink to="/all-Equipment">
                    <button className="px-6 py-3 bg-custom-gradient text-white rounded-md shadow-md">
                      Details Now
                    </button>
                  </NavLink>
                </Slide>
              </div>
            </div>
          </div>

          <div className="relative h-full">
            <img src={c5} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
              <div className="absolute bottom-10 left-10 text-white space-y-4">
                <Slide>
                  <h1 className="text-3xl md:text-5xl font-bold">
                    Sports Equipment Set
                  </h1>
                  <p className="text-sm md:text-lg">
                    Perfect gear for athletes of all levels.
                  </p>
                  <NavLink to="/all-Equipment">
                    <button className="px-6 py-3 bg-custom-gradient text-white rounded-md shadow-md">
                      Details Now
                    </button>
                  </NavLink>
                </Slide>
              </div>
            </div>
          </div>

          <div className="relative h-full">
            <img src={c2} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
              <div className="absolute bottom-10 left-10 text-white space-y-4">
                <Slide>
                  <h1 className="text-3xl md:text-5xl font-bold">
                    Sports Equipment Set
                  </h1>
                  <p className="text-sm md:text-lg">
                    Perfect gear for athletes of all levels.
                  </p>
                  <NavLink to="/all-Equipment">
                    <button className="px-6 py-3 bg-custom-gradient text-white rounded-md shadow-md">
                      Details Now
                    </button>
                  </NavLink>
                </Slide>
              </div>
            </div>
          </div>

          <div className="relative h-full">
            <img src={c1} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
              <div className="absolute bottom-10 left-10 text-white space-y-4">
                <Slide>
                  <Fade>
                    <h1 className="text-3xl md:text-5xl font-bold">
                      Sports Equipment Set
                    </h1>
                  </Fade>
                  <p className="text-sm md:text-lg">
                    Perfect gear for athletes of all levels.
                  </p>
                  <NavLink to="/all-Equipment">
                    <button className="px-6 py-3 bg-custom-gradient text-white rounded-md shadow-md">
                      Details Now
                    </button>
                  </NavLink>
                </Slide>
              </div>
            </div>
          </div>
        </Carousel>

        
      </div>
    </div>
  );
};

export default HomeCaro;
