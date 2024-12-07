import React from "react";
import { Carousel } from "flowbite-react";
import { Fade, Slide } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";

const HomeCaro = () => {
  return (
    <div className="w-11/12  mx-auto py-10">
      <div className="h-[500px] sm:h-[600px] md:h-[600px] lg:h-[600px]">
        <Carousel slideInterval={3000}>
          {/* Slide 1 */}

          <div className="relative h-full">
            <img
              className="w-full h-full"
              src="https://www.stjcsh.org/uploads/images/000-1920x1080-e11f5476921e83752f44dda31b218902_893.jpeg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
              <div className="absolute bottom-10 left-10 text-white space-y-4">
                <Slide >
                  <Fade cascade damping={1e-1}>
                  <h1 className="text-3xl md:text-5xl font-bold">
                    Tennis Rackets & Dumbbells
                  </h1>
                  </Fade>
                  <p className="text-sm md:text-lg">
                    Elevate your game with premium sports gear.
                  </p>
                  <NavLink to='/all-Equipment'><button className="px-6 py-3 bg-custom-gradient  text-white rounded-md shadow-md">
                    Details Now
                  </button></NavLink>
                </Slide>
              </div>
            </div>
          </div>

          <div className="relative h-full">
            <img
              src="https://plus.unsplash.com/premium_photo-1682435566673-cedb75cd7459?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BvcnRzJTIwZXF1aXBtZW50fGVufDB8fDB8fHww"
              alt="Complete Sports Equipment Set"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
              <div className="absolute bottom-10 left-10 text-white space-y-4">
                <Slide >
                  <h1 className="text-3xl md:text-5xl font-bold">
                    Sports Equipment Set
                  </h1>
                  <p className="text-sm md:text-lg">
                    Perfect gear for athletes of all levels.
                  </p>
                  <NavLink to='/all-Equipment'><button className="px-6 py-3 bg-custom-gradient  text-white rounded-md shadow-md">
                    Details Now
                  </button></NavLink>
                </Slide>
              </div>
            </div>
          </div>
          <div className="relative h-full">
            <img
              src="https://sportsfocus.com.au/wp-content/uploads/2021/01/New-SF-website-images-4-850x350.png"
              alt="Complete Sports Equipment Set"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
              <div className="absolute bottom-10 left-10 text-white space-y-4">
                <Slide>
                  <h1 className="text-3xl md:text-5xl font-bold">
                    Sports Equipment Set
                  </h1>
                  <p className="text-sm md:text-lg">
                    Perfect gear for athletes of all levels.
                  </p>
                  <NavLink to='/all-Equipment'><button className="px-6 py-3 bg-custom-gradient  text-white rounded-md shadow-md">
                    Details Now
                  </button></NavLink>
                </Slide>
              </div>
            </div>
          </div>

          <div className="relative h-full">
            <img
              src="https://media.licdn.com/dms/image/v2/D5612AQHwiDS5WkydGA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1682490558908?e=2147483647&v=beta&t=2vB1mER2TmX5zWcFvytabIi4jK1nroqFlDFS_6HJreE"
              className="w-full h-full object-cover"
            />
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
                  <NavLink to='/all-Equipment'><button className="px-6 py-3 bg-custom-gradient  text-white rounded-md shadow-md">
                    Details Now
                  </button></NavLink>
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
