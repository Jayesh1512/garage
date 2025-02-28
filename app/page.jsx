'use client'
import Navbar from "@/components/Navbar/Navbar";
import Carousal from "./Carousal";
import { DM_Sans } from "next/font/google";
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaTwitter } from "react-icons/fa";



const dm = DM_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const services = [
  {
    content: "Battery Maintenance and Replacement",
    img: "/Services/image.png",
  },
  {
    content: "Battery Maintenance and Replacement",
    img: "/Services/image.png",
  },
  {
    content: "Battery Maintenance and Replacement",
    img: "/Services/image.png",
  },
  {
    content: "Battery Maintenance and Replacement",
    img: "/Services/image.png",
  },
  {
    content: "Battery Maintenance and Replacement",
    img: "/Services/image.png",
  },
  {
    content: "Battery Maintenance and Replacement",
    img: "/Services/image.png",
  },
];

const pricing = [
  {
    price: "399 /-",
    plan: "Basic Service ",
    desc: "Charges for vehicles with less than 158cc vehicles ",
    img: "/Pricing/price.png",
  },
  {
    price: "399 /-",
    plan: "Basic Service ",
    desc: "Charges for vehicles with less than 158cc vehicles ",
    img: "/Pricing/price.png",
  },
  {
    price: "399 /-",
    plan: "Basic Service ",
    desc: "Charges for vehicles with less than 158cc vehicles ",
    img: "/Pricing/price.png",
  },
];

const images = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
];

const reviews = [
  {
    name: "Siddharth Mishra",
    review: "“Very good service for my TVS Jupiter, recommended”",
    img: '/images/sidm.png'
  },
  {
    name: "anushka tambde",
    review: "“Fast and Nice service. Suggest to try their services”",
    img: '/images/anut.png'

  },
  {
    name: "anushka tambde",
    review: "“Fast and Nice service. Suggest to try their services”",
    img: '/images/anut.png'

  },
]


const Page = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };



  return (
    <main className="hero min-h-screen space-y-10">
      <Navbar />

      <section className="space-y-24">
        <div className="lg:px-8 px-4">
          <div className="relative border-b-4 border-r-4 border-l-4 justify-between flex flex-col md:flex-row items-center p-10">
            <div className="absolute z-0 -left-1 top-0 px-10 border-l-4 border-[#D6313E]">
              <p
                className={`text-white text-center md:text-left text-4xl md:text-7xl md:max-w-lg lg:max-w-xl ${dm.className}`}
              >
                Premium Two Wheeler services at {" "}
                <span className="text-[#D6313E]">doorstep</span>
              </p>
            </div>
            <div className="h-20 md:hidden"></div>
            <div className="py-10 text-3xl text-center md:text-left text-white">
              "Add sub content to this section"
            </div>
            <div className="w-full md:w-1/3 md:mr-20">
              <img src="/Hero/illus-1.png" alt="Hero Illustration" className="w-full" />
            </div>
          </div>
        </div>

        <div className="lg:px-8 px-4 relative">
          <img src="/Hero/stats.png" alt="Statistics" className="w-full" />
        </div>

        <div className="lg:px-8 px-4">
          <div className="mx-auto text-center">
            <p className={`${dm.className} text-6xl font-extrabold`}>Services</p>
            <p className={`${dm.className}`}>Your two-wheeler care taken to the next level</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {services.map((service, index) => (
              <div key={index} className="p-10"
              >
                <div
                  className={`rounded-tr-[6.5rem] pb-10 px-10 relative ${index % 2 === 0 ? 'bg-[#1e1e1e]' : 'bg-[#D02F3C]'}`}
                >
                  <p className="text-white text-left text-xl py-4 pt-10 max-w-xs">{service.content}</p>
                  <img src={service.img} alt={service.content} className="" />
                  <div className="absolute w-full top-3 -left-4 h-full border-4 rounded-tr-[6.5rem] pointer-events-none" style={{ left: "-10px" }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:px-8 px-4 text-center">
          <p className={`${dm.className} text-6xl font-extrabold`}>Service At Your Door Step</p>
          <p className={`${dm.className} text-lg max-w-2xl mx-auto`}>We take pride in delivering top-notch two wheeler care to ensure your two-wheeled companion stays in peak condition. Our team of skilled technicians is dedicated to providing the highest </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {pricing.map((plan, index) => (
              <div key={index} className="p-10">
                <div
                  className={`p-6 rounded-xl text-white text-left ${index % 2 !== 0
                    ? 'bg-[linear-gradient(0deg,_rgba(241,_81,_88,_0.78)_0%,_rgba(241,_81,_88,_0.78)_100%)]'
                    : 'bg-[#1e1e1e]'
                    }`}
                >
                  <img src={plan.img} alt="" />
                  <p className="text-3xl mt-4  max-w-xs">{plan.price}</p>
                  <p className="text-xl  max-w-xs">{plan.plan}</p>
                  <p className="text-lg max-w-xs">{plan.desc}</p>
                  <button className="w-fit mt-4 border px-4 py-2 rounded-full cursor-pointer">
                    Book a service
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Carousal />










        {/* Contact */}


        <div className={`${dm.className} max-w-7xl mx-auto px-4`}>
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-12 leading-tight">
            BOOK A <span className="text-[#F14D54] md:text-7xl">TWO-WHEELER</span> SERVICE AT
            <br />
            HOME NOW
          </h1>

          <div className="grid md:grid-cols-2 md:gap-44 gap-10">
            <form className="space-y-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-md">Name</label>
                  <Input className="bg-zinc-900 border-zinc-800" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <label className="text-md">Two Wheeler</label>
                  <Input className="bg-zinc-900 border-zinc-800" placeholder="Enter vehicle details" />
                </div>
                <div className="space-y-2">
                  <label className="text-md">Phone</label>
                  <Input className="bg-zinc-900 border-zinc-800" type="tel" placeholder="Enter your phone number" />
                </div>
                <div className="space-y-2">
                  <label className="text-md">Address</label>
                  <Input className="bg-zinc-900 border-zinc-800" placeholder="Enter your address" />
                </div>
                <div className="space-y-2">
                  <label className="text-md">Email address</label>
                  <Input className="bg-zinc-900 border-zinc-800" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <label className="text-md">Preferred time to contact you</label>
                  <Input className="bg-zinc-900 border-zinc-800" placeholder="Enter preferred time" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-md">Any additional requests regarding your two wheeler?</label>
                <Textarea
                  className="bg-zinc-900 border-zinc-800 min-h-[240px]"
                  placeholder="Please type your message here..."
                />
              </div>
              <div className="flex justify-between space-x-3">
                <Button className="bg-[#F14D54] hover:bg-[#E43D44] text-white px-8 rounded-full" size="lg">
                  Submit
                </Button>

                <div className="flex items-center gap-6 pt-4">
                  <Link href="#" className="text-[#F14D54] hover:text-[#E43D44]">
                    <FaFacebookF className="w-6 h-6" />
                  </Link>
                  <Link href="#" className="text-[#F14D54] hover:text-[#E43D44]">
                    <FaYoutube className="w-6 h-6" />
                  </Link>
                  <Link href="#" className="text-[#F14D54] hover:text-[#E43D44]">
                    <RiInstagramFill className="w-6 h-6" />
                  </Link>
                  <Link href="#" className="text-[#F14D54] hover:text-[#E43D44]">
                    <FaLinkedinIn className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </form>

            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="/images/contact.png"
                alt="Motorcycle service booking"
                width={522}
                className="object-cover h-full"
              />
            </div>
          </div>
        </div>




        {/* Reviews */}
        <div className="lg:px-32 px-4">
          <div className={`${dm.className} space-y-3`}>
            <p className="text-6xl font-semibold md:text-left text-center">Google Reviews</p>
            <p className="text-4xl font-medium md:text-left text-center">What our clients say</p>
            <p className="max-w-lg md:text-left text-center">Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero</p>
          </div>
          <div className="max-w-8xl mx-auto  p-4">
            <Slider {...settings} className="">
              {reviews.map((review, index) => (
                <div className="px-4" key={index}>
                  <div className="p-4 bg rounded-lg shadow-lg bg-[#2d2d2d]">
                    <div className="flex items-baseline gap-5">
                      <img src={review.img} alt="" className="h-20 w-20" />
                      <img src='/images/stars.png' alt="" className="h-5" />
                    </div>
                    <p className=" mt-2 text-lg italic">{review.review}</p>
                    <h3 className=" font-semibold mt-5">- {review.name}</h3>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

        </div>





        {/* Careers */}
        <div className="lg:px-20 px-4 space-y-3 bg-[#181818]">
          <div className="flex justify-between flex-col md:flex-row">
            <div>
              <h1 className={` ${dm.className} text-4xl md:text-5xl font-medium text-white`}>Careers</h1>
              <div className="flex justify-normal space-x-5">
                <p className="text-5xl md:text-7xl font-bold text-[#be444a]">Join Us</p>
                <p className="text-5xl md:text-7xl font-bold text-white">Now</p>
              </div>
              <div className={` ${dm.className} flex`}>
                <p className="text-base md:text-xl text-white max-w-3xl mt-5">Are you ready to be part of an exciting and dynamic community? Look no further! Join us now and embark on a journey that promises growth, opportunities, and meaningful connections.</p>
              </div>
            </div>
            <img src="/images/career.png" alt="Illustration" />
          </div>

          <div className={`${dm.className} flex justify-center`}>
            <div className="md:p-10 py-10 px-2 w-1/2 space-y-6 bg-[#1E1E1E] ">
              <h1 className="text-white font-semibold text-2xl">Who are we?</h1>
              <p className="text-white ">We are a passionate group of individuals who believe in the power of collaboration and shared goals. Our community is built on the foundation of trust, respect, and inclusivity.</p>
            </div>
            <div className="md:p-10 py-10 px-2 w-1/2 space-y-6 bg-[#be444a]">
              <h1 className="text-white font-semibold text-2xl">Why Join us?</h1>
              <p className="text-white">When you become a member of our community, you open the door to a world of possibilities.Send your cv on:help @ garagewalle.com</p>
            </div>
          </div>
          <div>
            <div className="mt-10 flex justify-end space-x-3">
              <div className="w-40 h-7 bg-[#F14D54] transform skew-x-12"></div>
              <div className="w-16 h-7 bg-[#F14D54] transform skew-x-12"></div>
              <div className="w-16 h-7 bg-[#F14D54] transform skew-x-12"></div></div>
          </div>
        </div>
      </section>


      <footer className="bg-black text-white py-8">
        <div className="container px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left ">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <div className="flex justify-center md:justify-start items-center mb-4">
              <img src="/logo.svg" alt="GarageWalle Logo" className="h-10 mr-2" />
            </div>
            <p className="text-gray-400 text-xs max-w-xs mt-2">
              Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam mauris sed ma
            </p>
          </div>

          <div className="md:w-1/3 mb-6 md:mb-0">
            <ul className="text-gray-400 text-sm flex justify-center gap-10 items-start">
              <div className="space-y-1">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Services</a></li>
              </div>
              <div className="space-y-1">
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Review</a></li>
              </div>
              <div className="space-y-1">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">*T&C</a></li>
              </div>
            </ul>
            <div className="mx-auto">
              <div className="flex justify-center gap-5 mt-4">
                <FaFacebookF className="w-6 h-6 bg-white text-[#F15158] p-1 rounded-sm cursor-pointer hover:scale-105 duration-300" />
                <FaTwitter  className="w-6 h-6 bg-white text-[#F15158] p-1  rounded-sm cursor-pointer hover:scale-105 duration-300" />
                <RiInstagramFill className="w-6 h-6 bg-white text-[#F15158] p-1  rounded-sm cursor-pointer hover:scale-105 duration-300" />
                <FaLinkedinIn className="w-6 h-6 bg-white text-[#F15158] p-1  rounded-sm cursor-pointer hover:scale-105 duration-300" />
                <FaYoutube className="w-6 h-6 bg-white text-[#F15158] p-1  rounded-sm  cursor-pointer hover:scale-105 duration-300" />
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-end space-x-4 items-center mb-4">
            <a href="#" className="text-white text-lg"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-white text-lg"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white text-lg"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-white text-lg"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="text-white text-lg"><i className="fab fa-youtube"></i></a>
          </div>
          <div className="md:w-1/3 flex flex-col items-start text-center md:text-left">
            <p className="text-gray-400 text-sm">support@garagewalle.com</p>
            <p className="text-gray-400 text-sm">(+91) 9201986296</p>
            <p className="text-gray-400 text-sm">
              Plot No. 5 N, Manewada- Besa Rd,<br /> Geeta Nagar, Nagpur, Maharashtra
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-xs">
          <p>&copy; 2023 Garagewalle - All Rights Reserved.</p>
        </div>
      </footer>





    </main >
  );
};

export default Page;
