import React from "react";
import Banner from "../../assets/website/banner.jpeg";

// const BannerImg = {
//   backgroundImage: `url( ${Banner} )`,
//   backgroundPosition: "center",
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
//   height: "100%",
//   width: "100%",
// };

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white bg-gradient-to-r from-primary to-secondary"
      // style={BannerImg}
    >
      <div className="container py-10">

        <div className="space-y-6 max-w-xl mx-auto ">
          <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold">Get Notified About New Products</h1>
          <input
          data-aos ="fade-up"
          type="text"
          placeholder="Enter Your Email"
          className="w-full p-3 rounded-md text-slate-700" />
          

        </div>

      </div>

    </div>
  );
};

export default Subscribe;
