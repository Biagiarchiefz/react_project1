import React from 'react'
import Slider from 'react-slick'
import img7 from "../../assets/hero/img7.jpeg"



const TestimoniData = [
  {
    id: 1,
    name: "Harmony",
    text: 
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quod ab libero aut nesciunt officia doloribus consectetur sed aliquid!",
    img: img7,
  
  },
  {
    id: 2,
    name: "Harmony",
    text: 
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quod ab libero aut nesciunt officia doloribus consectetur sed aliquid!",
    img: img7,
  },
  {
    id: 3,
    name: "Biagi",
    text: 
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quod ab libero aut nesciunt officia doloribus consectetur sed aliquid!",
    img: img7,
  
  },
  {
    id: 4,
    name: "Fredrin",
    text: 
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quod ab libero aut nesciunt officia doloribus consectetur sed aliquid!",
    img: img7,
  },
  {
    id: 5,
    name: "Tymi",
    text: 
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quod ab libero aut nesciunt officia doloribus consectetur sed aliquid!",
    img: img7,
  }
]

const Testimoni = () => {

var settings = {
  dost:true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  autoplay: true,
  autoplayspeed: 2000,
  cssEase: "linear",
  pauseOnHover: true,
  pauseOnFocus: true,
  responsive: [
    {
      breakpoint: 10000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true, 
      },

    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,

      },
    },
  ]

}


  return (
    <div className='py-9 mb-10'>
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up"className="text-sm text-primary ">What our customer are saying</p>
          <h1 data-aos="fade-up" className="font-bold text-3xl">Testimonial</h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            accusantium rem dignissimos.
          </p>
        </div>


        {/* Testimonial section */}
        <div data-aos="zoom-in" className="">
          <Slider {... settings}> 
            { TestimoniData.map((data) => (
              <div className="my-6">
              <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary relative" key={data.id}>

                <div className="mb-4">
                  <img src={data.img} alt="" className='rounded-full w-20 h-20 '/>
                </div>

                <div className="flex flex-col items-center gap-4">

                  <div className="space-y-3">
                <p className='text-xs text-gray-500'>{data.text}</p>
                <h1 className='text-xl font-bold text-black/80 dark:text-white'>{data.name}</h1>
                  </div>

                </div>

                <p className='text-black/20 text-9xl fons-serif absolute top-0 right-9 dark:text-white'>,,</p>


              </div>
              </div>

            ))}
             </Slider>
        </div>



      </div>
    </div>
  )
}

export default Testimoni
