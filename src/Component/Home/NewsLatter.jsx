import React from "react";
import Marquee from "react-fast-marquee";
const NewsLatter = () => {
  return (
    <div>
      <div className="my-10 w-11/12 mx-auto">
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
      <div className="w-11/12 shadow-lg mx-auto my-9 border rounded-lg py-16">
        <div className="w-11/12 md:w-8/12 lg:w-6/12 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Subscribe to our newsletter and get the latest updates, exclusive
            offers, and insights directly in your inbox.
          </p>
          <form className="flex flex-col md:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full md:w-8/12 px-4 py-3 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-custom-gradient text-white rounded-lg font-semibold shadow-md hover:bg-indigo-700 transition duration-200"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLatter;
