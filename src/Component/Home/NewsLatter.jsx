import React from "react";

const NewsLatter = () => {
  return (
    <div>
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
