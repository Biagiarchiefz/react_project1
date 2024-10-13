import React from "react";
import img1 from "../../assets/clothes/img1.png";
import img2 from "../../assets/clothes/img2.png";
import img3 from "../../assets/clothes/img3.png";

import { FaStar } from "react-icons/fa";


const ProductData = [
  {
    id: 1,
    img: img1,
    title: "Casual Wear",
    description:
     "asperiores blanditiis officiis nostrum consequuntur officia tenetur nemo quasi. ",
  },
  {
    id: 2,
    img: img2,
    title: "men T-shirt",
    description:
      "asperiores blanditiis officiis nostrum consequuntur officia tenetur nemo quasi. ",
  },
  {
    id: 3,
    img: img3,
    title: "Men T-shirt",
    description:
      "asperiores blanditiis officiis nostrum consequuntur officia tenetur nemo quasi. ",
  },
];

const TopProducts = () => {
  return (
    <div>
      <div className="container">
        {/* header section */}
        <div className=" text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary ">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="font-bold text-3xl">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            accusantium rem dignissimos.
          </p>
        </div>

        {/* body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-5">

          {ProductData.map((data) => (
            <div 
            data-aos="zoom-in"
            className="rounded-2xl bg-white max-w-[200px] dark:bg-gray-800 hover:bg-black/80 
            dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group 
            ">
              {/* image section */}
              <div className="h-[100px]">
                <img src={data.img} alt="" className="max-w-[140px] block mx-auto tranform -translate-y-20 group-hover:scale-105 duration-300 drop-shawdow-md "/>
              </div>

              {/* detail section */}
              <div className="p-4 text-center">
                <div className="w-full flex justify-center items-center gap-1">
              <FaStar className="text-yellow-500"/>
              <FaStar className="text-yellow-500"/>
              <FaStar className="text-yellow-500"/>
              <FaStar className="text-yellow-500"/>
              <FaStar className="text-yellow-500"/>
                </div>

                <h1 className="text-xl font-bold">{data.title}</h1>

                <p className="text-gray-500 group-hover:text-white durtion-300 text-sm line-clamp-2">{data.description}</p>
                <button className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary">Order Now</button>
              </div>

             
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default TopProducts;
