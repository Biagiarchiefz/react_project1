import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";


const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 4,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 5,
    name: "Electronics",
    link: "/#",
  },
];

const TrandingDropDown = [
  {
    id: 1,
    name: "Tranding Products",
    link: "/#"
  },
  {
    id:2,
    name: "Best Selling",
    link: "/#"
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/"
  }

]

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-1">
        <div className="container flex justify-between items-center ">
          <div className="">
            <a href="" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-12 uppercase" />
              Shopoy
            </a>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="group relative hidden sm:block">
              <input
                type="text"
                placeholder="Search..."
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] border border-gray-300 transition-all duration-300 rounded-full px-2 py-1 
                focus:outline-none focus:border-4 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 " />
            </div>

            {/* tombol order */}
            <button
              onClick={() => alert("halo")}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden  transition-all duration-200">
                Order
              </span>

              <FaShoppingCart className="text-xl text-white drop-shadow-md cursor-pointer" />
            </button>

            {/* Pertukaran menjadi mode gelap */}
            <div className="">
              <DarkMode />
            </div>
          </div>
        </div>
      </div>

      {/* lower Navbar */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">

          {Menu.map((data) => (
            <li key={data.id}>
              <a href={data.link} className="inline-block px-4 hover:text-primary duration-200">
                {data.name}
              </a>
            </li>
          ))}

          {/* DropDown Tranding Products */}
          <li className="group relative cursor-pointer">

            <a href="" className="flex items-center gap-[2px] py-2 duration-200">Tranding Products
              <span>
              <FaCaretDown className="trasition-all duration-200 group-hover:rotate-180"/>
              </span>
            </a>

            <div className="absolute z-[999] hidden group-hover:block shadow-md">

              <ul>
                {TrandingDropDown.map((data) => (
                  <li key = {data.id} className="">
                    <a href={data.link} className="inline-block p-2 bg-white rounded-md hover:bg-primary/20 duration-200 w-full ">
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>

            </div>

          </li>

        </ul>

        {/* <h1>sass</h1> */}
      </div>
    </div>
  );
};
export default Navbar;
