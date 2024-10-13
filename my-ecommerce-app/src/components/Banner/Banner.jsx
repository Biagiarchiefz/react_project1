import React from 'react'
import img4 from "../../assets/clothes/img4.jpeg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { MdPayment } from "react-icons/md";

const Banner = () => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">

        {/* image secion */}
        <div data-aos="zoom-in" className="">
          <img src={img4} alt="" className='max-w-[400px] h-[350px] mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0.1)] object-cover w-full'/>
        </div>
        {/* text details section */}
        <div className="flex flex-col justify-center gap-6 sm:pt-0">
          <h1 data-aos ="fade-up" className='text-3xl sm:text-4xl font-bold'>Shop smart with discounts up to 50%.</h1>
          <p data-aos ="fade-up" className='text-sm text-gray-500 tracking-wider leading-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas maiores repellat, voluptas repudiandae dignissimos quos officiis tempora excepturi.</p>

          <div data-aos ="fade-up" className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
            <GrSecure  className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-gray-800 dark:text-white'/>
            <p>Quality Products</p>
            </div>
          </div>

          <div data-aos ="fade-up" className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
            <IoFastFood className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-gray-800 dark:text-white'/>
            <p>Fast Delivery</p>
            </div>
          </div>

          <div data-aos ="fade-up" className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
            <MdPayment className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-gray-800 dark:text-white'/>
            <p>Easy Payment Method</p>
            </div>
          </div>

          <div data-aos ="fade-up" className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
            <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-gray-800 dark:text-white'/>
            <p>Get Offers</p>
            </div>
          </div>

        </div>
        </div>

      </div>
    </div>
  )
}

export default Banner
