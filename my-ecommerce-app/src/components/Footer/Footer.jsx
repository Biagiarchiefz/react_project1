import React from "react";
import Logo from "../../assets/logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";


const FooterLink = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="text-white bg-gray-800 dark:bg-gradient-to-b from-gray-800 to-black">
      <div
      data-aos ="zoom-in"
      className="container">
        <div className="grid md:grid-cols-4 pb-[40px] pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center  gap-3">
              <img src={Logo} alt="" className="w-20 h-20" />
              Shopoy
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos necessitatibus suscipit dolor maiores modi accusamus
              aspernatur, qui assumenda.
            </p>
          </div>

          {/* links details */}
          {/* <div className="grid grid-cols-2 sm:grid-cols-3 cols-span-2 md:pl-10"> */}
            <div className="">
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 ">
                  Important Link
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLink.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="">
              <div className="py-8 px-4">
                <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 ">
                  Link
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLink.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* media sosial */}
            <div className="">
              <div className="flex items-center gap-3 mt-6">

                <a href="">
                <FaInstagram className="text-3xl"/>
                </a>

                <a href="">
                <FaFacebookSquare className="text-3xl" />
                </a>

                <a href="">
                <FaLinkedin className="text-3xl" />
                </a>

              </div>

              <div className="mt-6">

                <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p>Lorem, ipsum dolor.</p>
                </div>

                <div className="mt-3 flex items-center gap-3">
                <FaMobileAlt />
                <p>Lorem, ipsum dolor.</p>
                </div>


              </div>

            </div>

            
          {/* </div> */}

        </div>

      </div>
    </div>
  );
};

export default Footer;
