import React from "react";

import img6 from "../../assets/hero/img6.png"
import img8 from "../../assets/hero/img8.png"
import img9 from "../../assets/hero/img9.png"

import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: img9,
    title: "15% off on all Men's Wear",
    description:
      "Keranjang belanja adalah fitur penting di website belanja. Ini memungkinkan pengguna menambahkan produk yang mereka inginkan dan menyimpannya sementara waktu sebelum menyelesaikan pembelian. Fitur ini biasanya dilengkapi dengan informasi tentang jumlah barang, total harga, dan opsi untuk menghapus atau mengubah jumlah barang yang dipilih",
  },
  {
    id: 2,
    img: img8,
    title: "70% off on Products sale",
    description:
      "Proses checkout adalah tahap akhir dari pengalaman belanja online, di mana pelanggan memasukkan informasi pribadi, seperti alamat pengiriman dan metode pembayaran. Website belanja yang baik menawarkan proses checkout yang sederhana dan cepat, dengan opsi pembayaran yang aman seperti kartu kredit, e-wallet (misalnya GoPay, OVO), PayPal, atau transfer bank.",
  },
  {
    id: 3,
    img: img6,
    title: "30% off on all Women's Wear",
    description:
      "Keranjang belanja adalah fitur penting di website belanja. Ini memungkinkan pengguna menambahkan produk yang mereka inginkan dan menyimpannya sementara waktu sebelum menyelesaikan pembelian. Fitur ini biasanya dilengkapi dengan informasi tentang jumlah barang, total harga, dan opsi untuk menghapus atau mengubah jumlah barang yang dipilih",
  },
];
const Hero = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      {/* background pattern */}
      <div className="h-[700px] w-[700px] bg-gradient-to-b from-secondary to-primary/40  absolute right-0 -top-1/2 rounded-3xl rotate-45 -z-9"></div>

      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>

          {ImageList.map((data) => (
            <div className="">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col gap-4 justify-center pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="false"
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                    {data.title}
                  </h1>
                  <p 
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                  className="text-sm ">
                    {data.description}
                  </p>

                  <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="300"
                  className="">
                    <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 trasition-all duration-200 text-white py-2 px-4 rounded-full">
                      Order Now
                    </button>
                  </div>
                </div>

                {/* image section */}
                <div className="order-1 sm:order-2 ">
                  <div
                  data-aos="zoom-in"
                  data-aos-once="true"
                  className="relative z-10">
                    <img
                      src={data.img}
                      alt=""
                      className="w-[270px] h-[200px] sm:w-[450px] sm:h-[450px] sm:scale-140 lg:scale-170 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
          
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
