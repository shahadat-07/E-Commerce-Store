import React from "react";

const LandingPage = () => {
  return (
    <section className="flex flex-col md:flex-row h-screen">
      <div className="bg-gray-100 md:w-1/2 flex items-center justify-center">
        <div className="max-w-md mx-auto py-12 px-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Advertisement Text
          </h1>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ante
            ut nisl rutrum posuere.
          </p>
        </div>
      </div>
      <div className="bg-indigo-500 md:w-1/2 flex items-center justify-center">
        <div className="max-w-md mx-auto py-12 px-6">
          <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-white rounded-md py-3 px-20 text-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-white rounded-md py-3 px-20 text-lg"
              />
            </div>
            <div className="mb-8">
              <label htmlFor="message" className="block text-white">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full bg-white rounded-md py-3 px-20 text-lg"
              />
            </div>
            <button
              type="submit"
              className="bg-white text-indigo-500 py-2 px-4 rounded-md text-sm font-medium"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
