import React from "react";


import img6 from "../../assets/tshirt/img6.jpeg"
import img7 from "../../assets/tshirt/img7.jpeg"
import img8 from "../../assets/tshirt/img8.jpeg"
import img9 from "../../assets/tshirt/img9.jpeg"
import img5 from "../../assets/tshirt/img5.jpeg"


import { FaStar } from "react-icons/fa";

const ProductData = [
  {
    id: 1,
    img: img6,
    title: "men T-shirt",
    price: 200,
    rating: 4.6,
  },
  {
    id: 2,
    img: img7,
    title: "Men T-shirt",
    price: 165,
    rating: 4.1,
  },
  {
    id: 3,
    img: img8,
    title: "Men T-shirt",
    price: 150,
    rating: 4.2,
  },
  {
    id: 4,
    img: img9,
    title: "Men T-shirt",
    price: 120,
    rating: 4.8,
  },
  {
    id: 5,
    img: img5,
    title: "Men T-shirt",
    price: 122,
    rating: 4.9,
  }
]

const Product = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up"className="text-sm text-primary ">Top Selling Products for you</p>
          <h1 data-aos="fade-up" className="font-bold text-3xl">Products</h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            accusantium rem dignissimos.
          </p>
        </div>

        {/* Body section */}
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">

            {/* card section */}
            {ProductData.map((data) => (
              <div 
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              className="space-y-3" key={data.id}>

              <img src={data.img} alt="" className="h-[200px] w-[150px] object-cover rounded-md" />
              <div className="">
                <h3 className="font-semibold">{data.title}</h3>
                <p className="text-sm text-gray-600">${data.price}</p>
                <div className="flex items-center gap-1">
                <FaStar className="text-yellow-400"/>
                <span>{data.rating}</span>
                </div>



              </div>
              </div>

            ))}
            
          </div>

          {/* button view all */}
          <div data-aos = "fade-up" className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded md">View All</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Product;
