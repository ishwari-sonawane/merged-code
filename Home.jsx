import {Link} from "react-router-dom"
import Marquee from "react-fast-marquee";
import React, { useState,useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './Styles.css';
import Faq from "./Faq.jsx"
import Sidebar from "./Sidebar.jsx"
import Contactus from "./Contactus.jsx"
import { FaGavel, FaUserShield, FaTrophy, FaPhone } from "react-icons/fa";
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import { motion, AnimatePresence } from "framer-motion";


import { FaMedium } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { CgMenuLeftAlt } from "react-icons/cg";
import { IoIosArrowRoundForward } from "react-icons/io";
// import { FaPlus } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
// import { MdLocalPhone } from "react-icons/md";
// import { IoMailSharp } from "react-icons/io5";
// import { MdLocationOn } from "react-icons/md";
import { IoLogoMedium } from "react-icons/io5";
import { SiLinkedin } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io5";
import { ImQuotesRight } from "react-icons/im";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { BiSolidMessageRoundedEdit } from "react-icons/bi";
import { MdCall } from "react-icons/md";
import { LuDot } from "react-icons/lu";
import { FaPlay } from 'react-icons/fa';
import logo from "./assets/logo.webp"
import bing from "./assets/bing.webp"
import yahoo from "./assets/yahoo.webp"
import bloomberg from "./assets/bloomberg.webp"
import abc from "./assets/abc.webp"
import googlenews from "./assets/googlenews.webp";
import cbs from "./assets/cbs.webp"
import affinity from "./assets/affinity.webp"
import nbc from "./assets/nbc.webp"
import stachu from "./assets/stachu.webp"
import women from "./assets/women.webp"
import mission from "./assets/mission.webp"
import vision from "./assets/vision.webp"
import footer1 from "./assets/footer1.webp"
import footer2 from "./assets/footer2.webp"
import footer3 from "./assets/footer3.webp"
import client1 from "./assets/client1.webp"
import client2 from "./assets/client2.webp"
import client3 from "./assets/client3.webp"
import client4 from "./assets/client4.webp"
import client5 from "./assets/client5.webp"
import anime1 from "./assets/anime1.webp"
import anime2 from "./assets/anime2.webp"
import anime3 from "./assets/anime3.webp"
import anime4 from "./assets/anime4.webp"
import anime5 from "./assets/anime5.webp"
import anime6 from "./assets/anime6.webp"
import anime7 from "./assets/anime7.webp"
import anime8 from "./assets/anime8.webp"
import anime9 from "./assets/anime9.webp"
import anime10 from "./assets/anime10.webp"
import quote from "./assets/quote.webp"
import fox from './assets/fox.webp';
import news from './assets/news.webp';
import { useMediaQuery } from 'react-responsive';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const logos = [
  bloomberg,
  bing,
  affinity,
  cbs,
  yahoo,
  nbc,
  fox,
  news,
  abc
];
function Home() {
const [activeTab, setActiveTab] = useState('about');

  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => setIsOpen(!isOpen);

   const [isVisible, setIsVisible] = useState(false);
  const toggleContent = () => {
    setIsVisible(!isVisible);
  };

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };


const faqData =[
  {
    question:"Expert Legal Knowledge Across Multiple Disciplines",
    answer :"At Aemilius Cupero, our team is equipped with deep expertise in a wide range of legal fields, including corporate law, personal injury, criminal defense, and family law. Our attorneys bring a wealth of knowledge and strategic insight, ensuring that no matter your legal challenge, we have the right experience to guide you effectively.",
    icon: FaGavel,
  },
  {
    question:"Client-Centered Approach",
    answer :"We believe that each case is unique, and we are dedicated to providing personalized attention to every client. Our approach is focused on understanding your specific situation, needs, and goals. We work closely with you to develop tailored legal strategies that are designed to achieve the best possible outcomes for your individual circumstances.",
     icon: FaUserShield,
  },
  {
    question:"Proven Track Record of Success",
    answer :"Over the years, Aemilius Cupero has built a strong reputation for delivering positive results for our clients. Our attorneys are seasoned professionals with a proven track record in both negotiation and litigation. We’ve successfully handled numerous high-profile cases, earning the trust and respect of clients and peers alike.",
     icon: FaTrophy,
  },
  {
    question:"Accessibility and Support",
    answer :"At Aemilius Cupero, we prioritize clear communication and accessibility. Our clients are never left in the dark – we ensure that you are kept informed and updated every step of the way. Whether through phone, email, or in-person meetings, we’re always available to answer questions and offer support, ensuring you feel confident and supported throughout the legal process.",
    icon: FaPhone,
  }];


   const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };



 const slides = [
  {
    img: anime1,
    text: "How to Avoid Shipping Container Scams",
    videoLink: "https://youtu.be/lzlwLvRXhmU?si=VQGPdNElpeJ2Tznz",
  },
  {
    img: anime2,
    text: "How to Avoid AI Phone Call Scams",
    videoLink: "https://youtu.be/fRGgAD9MuKA?si=BzkvRJKbFXRuyFad",
  },
  {
    img: anime3,
    text: "How to Identify and Avoid Bitcoin Mining Scams",
    videoLink: "https://youtu.be/JsiQS82W6OY?si=A0Uleh37X3ZFmCxu",
  },
   {
    img: anime4,
    text: "Unmasking Romance Scams | Protect Yourself From Online Dating Fraud",
    videoLink: "https://youtu.be/IeCCDyZ20aU?si=1rz1EFOEqzL3XD5m",
  },
   {
    img: anime5,
    text: "How to Identify Employment Scams Explained by Aemilius Cupero",
    videoLink: "https://youtu.be/Mv5UQIvZ_nM?si=xTKBfpPXACT5r_J4",
  },
   {
    img: anime6,
    text: "Aemilius Cupero Exposes Pacific Tycoon Scam",
    videoLink: "https://youtu.be/xknTZ52Rr7o?si=M3OG7kNwZ9_m8dnA",
  },
   {
    img: anime7,
    text: "What are Pretentious Email Scams Explained by Aemilius Cupero ",
    videoLink: "https://youtu.be/0-5hPE1pidY?si=zGIXxNLZMGLQI6db",
  },
   {
    img: anime8,
    text: "How to Avoid Forex Scam Explained By Aemilius Cupero",
    videoLink: "https://youtu.be/6Vu3EmIRAeU?si=-Xw5Q6VZ-vAyPtI-",
  },
   {
    img: anime9,
    text: "Insights on Preventing Phishing Scams",
    videoLink: "https://youtu.be/P4Y88q91sWo?si=OOzIP1KYMgAtmAxN",
  },
   {
    img: anime10,
    text: "What are Pretentious Email Scams Explained by Aemilius Cupero ",
    videoLink: "https://youtu.be/0-5hPE1pidY?si=vjkNdamF6o-3fwo_",
  },
];



const testimonials = [
  {
    name: "Mr. Wilton Burton",
    country: "Ireland",
    image: client1,
    text: `Aemilius Cupero is an excellent law firm that helped me recover my lost money from the forex scam. 
    They took care of it and recovered all my funds back. Thank you Aemilius!`,
  },
  {
    name: "Ms. Lian Koa",
    country: "Hong Kong",
    image: client2,
    text: `I am so greateful to Aemilius Cupero for providing me with recovry services. They helped me through a tough time. I can't thenk them enough for their help`,
  },
  {
    name: "Mr. Michel Faucher",
    country: "Germany",
    image: client3,
    text: `When a shipping container company scamed me, Aemilius cupero helped me to recover my lost funds and got me justice. They are undoubtedly one of the best law firms with a very professional approach towards their work`,
  },
  {
    name: "Ms. Patricia Hower",
    country: "Australia",
    image: client4,
    text: `I knew my case was complicated because it involved cryptos, but I would like to appreciate Aemilius cupero's successful efforts that got my monet back`,
  },
  {
    name: "Mr. Edgar Baker",
    country: "Scotland",
    image: client5,
    text: `I am very happy with the service I received from Aemilius cupero. They helped me recover my money back and I would recommend them to anyone who is looking to recover their funds.`,
  },

];


const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  appendDots: dots => (
    <div className="mt-10 sm:mt-12">
      <ul className="flex justify-center space-x-2 sm:space-x-7">{dots}</ul>
    </div>
  ),
  customPaging: i => (
    <div className="w-4 h-1 sm:w-6 bg-gray-300 sm:hover:bg-[#0a1229] sm:mt-8 rounded"></div>
  ),
};

const [visibleLogos, setVisibleLogos] = useState(logos.slice(0, 6));

const isMobile = useMediaQuery({ maxWidth: 1368 });
  
 const [menuOpen, setMenuOpen] = useState(false);

// const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  return (

    <>
    {/* --Navigation bar-- */}
    
{isMobile ? (
  // ✅ Mobile layout
  <div className="flex items-center px-4 py-2 bg-[#1a243f] hidden">
    <p className="text-white text-sm">WELCOME TO AEMILIUS CUPERO</p>
    <div className="flex items-center gap-4 text-white text-lg ml-auto">
      <FaMedium />
      <FaLinkedin />
      <FaYoutube />
      <FaPinterest />
    </div>
  </div>
) : (
  // ✅ Desktop layout
  <div className="flex items-center pl-52 h-[7vh] w-full bg-[#1a243f]">
    <p className="text-white text-[14px]">WELCOME TO AEMILIUS CUPERO</p>
    <div className="flex items-center gap-8 text-[20px] text-white ml-auto pr-12">
      <FaMedium className="cursor-pointer hover:bg-white hover:text-black transition-all duration-300" />
      <FaLinkedin className="cursor-pointer hover:bg-white hover:text-black transition-all duration-300" />
      <FaYoutube className="cursor-pointer hover:bg-white hover:text-black transition-all duration-300" />
      <FaPinterest className="cursor-pointer hover:bg-white hover:text-black transition-all duration-300" />
    </div>
  </div>
)}
            
   {isMobile ? (
  // 👇 MOBILE VIEW
  <div className="h-[13vh] w-full flex items-center justify-between px-4 bg-[#f4f5f8]">
    <img src={logo} alt="Logo" className="h-[40px]" />
    <button onClick={() => setMenuOpen(!menuOpen)}>
          <CgMenuLeftAlt className="text-black text-[30px]" />
        </button>
    {menuOpen && (
        <div className="absolute top-[13vh] left-0 w-full bg-white shadow-md z-50">
          <ul className="flex flex-col p-4 gap-4 text-[16px] text-[#1e1e1e]">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-[#AD9779]">Home</Link>
            </li>
            <li>
              <Link to="/aboutus" onClick={() => setMenuOpen(false)} className="hover:text-[#AD9779]">About Us</Link>
            </li>
            <li>
              <Link to="/services" onClick={() => setMenuOpen(false)} className="hover:text-[#AD9779]">Services</Link>
            </li>
            <li>
              <Link to="/duediligence" onClick={() => setMenuOpen(false)} className="hover:text-[#AD9779]">Due Diligence</Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-[#AD9779]">Contact Us</Link>
            </li>
          </ul>
        </div>
      )}
  </div>
     
) : (
  // 👇 DESKTOP VIEW
  <div className="h-[11vh] w-full flex items-center px-20 bg-[#f2f3f8]">
    <img src={logo} alt="Logo" className="h-[60px] mr-auto" />
    <div className="flex items-center gap-7 font-serif tracking-[.10em]">
      <Link to="/home" className="hover:text-[#AD9779] hover:border-b-2 border-[#AD9779]">HOME</Link>
      <Link to="/aboutus" className="hover:text-[#AD9779] hover:border-b-2 border-[#AD9779]">ABOUT US</Link>
      <Link to="/services" className="hover:text-[#AD9779] hover:border-b-2 border-[#AD9779]">SERVICES</Link>
      <Link to="/duediligence" className="hover:text-[#AD9779] hover:border-b-2 border-[#AD9779]">DUE DILIGENCE</Link>
      <Link to="/contact" className="hover:text-[#AD9779] hover:border-b-2 border-[#AD9779]">CONTACT US</Link>
    </div>
    <div className="ml-8 bg-[#AD9779] px-4 py-2 rounded">
      <CgMenuLeftAlt className="text-black text-[32px]" />
    </div>
  </div>
)}

   {/* --Home Page-- */}

      {isMobile ? (
  // ✅ Mobile Layout
  <div className="flex flex-col bg-white  pt-10">
    <div className="w-full bg-black pl-5">
      <p className="text-[#AD9779] text-[12px] tracking-[.3em]">WELCOME TO AEMILIUS CUPERO LLC</p>
      <h1 className="text-[37px] font-serif text-white mb-5">
        SCAMMED ONLINE?
        <br />
        Don't worry - we’re here to
        <br />
        help you to recover your lost money
      </h1>
      <p className="text-white">
        If you’ve fallen victim to scams such as Forex or Crypto Trading, Container Leasing,
        <br />
        Binary Options, or any other type, we’re here to assist. Whether you decide to move
        <br />
        forward with us or not, we’re here to listen and offer support in every way possible.
      </p>
      <br />
      <p className="text-white mb-4">
        Contact us to help us better understand your situation. Our consultation is completely
        <br />
        free, with no time constraints or obligations — you’re in trusted hands.
      </p>
      <div className="pb-8">
        <p className="border w-[100%] h-[6vh] flex items-center justify-center gap-1 text-[17px] text-white bg-[#AD9779]">
          <Link to="/contact">
           Let's connect! <IoIosArrowRoundForward className="text-[28px]" />
           </Link>
        </p>
      </div>
    </div>
    <div className="w-full bg-[url('./assets/form.webp')] bg-cover bg-center h-[300px] mt-6">
      <h1 className="text-white text-center pt-24 text-xl">Past the Form Here</h1>
    </div>
  </div>
) : (
  // ✅ Desktop Layout
  <div className="sm:flex">
    <div className="h-full w-full bg-black pt-25 pl-24 pr-5 sm:w-[63%]">
      <p className="text-[#AD9779] text-[13px] tracking-[.3em]">WELCOME TO AEMILIUS CUPERO LLC</p>
      <h1 className="text-[58px] font-serif text-white mb-5">
        SCAMMED ONLINE?
        <br />
        Don't worry - we’re here to
        <br />
        help you to recover your lost money
      </h1>
      <p className="text-white">
        If you’ve fallen victim to scams such as Forex or Crypto Trading, Container Leasing,
        <br />
        Binary Options, or any other type, we’re here to assist. Whether you decide to move
        <br />
        forward with us or not, we’re here to listen and offer support in every way possible.
      </p>
      <br />
      <p className="text-white mb-4">
        Contact us to help us better understand your situation. Our consultation is completely
        <br />
        free, with no time constraints or obligations — you’re in trusted hands.
      </p>
      <div className="pb-30">
        <p className="border w-[19%] h-[6.3vh] flex items-center justify-center gap-1 text-[17px] text-white bg-[#AD9779] mb-5 mt-6">
          <Link to="/contact">
           Let's connect!
      <IoIosArrowRoundForward className="text-[28px]" />
    </Link>
        </p>
      </div>
    </div>
    <div className="sm:w-[37%] bg-[url('./assets/form.webp')] bg-cover bg-center ">
      <h1 className="text-white text-center pt-40 text-xl">Past the Form Here</h1>
    </div>
  </div>
)}

      
    {/* --animation-1 part-- */}


{isMobile ? (
  // ✅ Mobile Layout
  <section
    className="relative bg-gray-50 bg-center py-10 overflow-hidden w-full px-4"
    style={{ backgroundImage: `url(${quote})` }}
  >
    <div className="max-w-xl mx-auto pb-2 text-center">
      <p className="text-xs tracking-widest text-gray-500 uppercase">
        AEMILIUS CUPERO - AS SEEN IN THE NEWS
      </p>
      <h2 className="text-xl font-semibold text-gray-900 mt-2">
        THE TRUSTED CHOICE FOR YOUR NEEDS, ENDORSED BY LEADING NEWS PUBLICATIONS!
      </h2>
    </div>

    <div className="mt-10 w-full overflow-x-auto">
      <div className="flex justify-start gap-10 items-center filter grayscale hover:grayscale-0 px-4">
        <AnimatePresence mode="popLayout">
          {visibleLogos.map((logo, index) => (
            <motion.img
              key={`${logo}-${index}`}
              src={logo}
              alt={`logo-${index}`}
              className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  </section>
) : (
  // ✅ Desktop Layout
  <section
    className="relative bg-gray-50 bg-center md:py-16 overflow-hidden w-full"
    style={{ backgroundImage: `url(${quote})` }}
  >
    <div className="max-w-1xl mx-auto sm:px-10 pb-2">
      <p className="text-sm tracking-widest text-gray-500 uppercase">
        AEMILIUS CUPERO - AS SEEN IN THE NEWS
      </p>
      <h2 className="sm-text-2xl md:text-2xl font-semibold text-gray-900 mt-2">
        THE TRUSTED CHOICE FOR YOUR NEEDS, ENDORSED BY LEADING NEWS PUBLICATIONS!
      </h2>
    </div>

    <div className="mt-12 relative w-full overflow-x-hidden">
      <div className="flex justify-center gap-30 items-center filter grayscale hover:grayscale-0 ease-in-out">
        <AnimatePresence mode="popLayout">
          {visibleLogos.map((logo, index) => (
            <motion.img
              key={`${logo}-${index}`}
              src={logo}
              alt={`logo-${index}`}
              className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: -100 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.1 }}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  </section>
)}


      {/* --low-women page-- */}


  {isMobile ? (
   
    <div className="flex flex-col w-full  h-auto">
      <div className="relative w-full h-[350px] mb-10">
        <img
          src={stachu}
          alt=""
          className="absolute top-0 left-0 w-full h-150 object-cover"
        />
        <img
          src={women}
          alt=""
          className="absolute top-20 left-0 w-full h-130 object-cover"
        />
      </div>
      <div className="mt-65  px-4 ">
        <div className="h-fit ">
          <p className="ml-0 text-[14px] tracking-[.2em] text-[#AD9779] mb-5">
            Why Choose Aemilius Cupero
          </p>
          <h1 className="ml-0 text-4xl font-serif sm:mb-2 leading-2xl">
            Navigating Complexity, Securing Your Future with Trusted Legal Excellence.
          </h1>
          <hr className="border-2 border-[#AD9779] mb-4" />
        </div>

        <div className="flex flex-col space-y-4">
          <button
            onClick={() => setActiveTab('about')}
            className={`mt-4 mb-4 ${activeTab === 'about' ? 'font-bold' : ''}`}
          >
            ABOUT US
          </button>
          <button
            onClick={() => setActiveTab('mission')}
            className={`mt-4 mb-4 ${activeTab === 'mission' ? 'font-bold' : ''}`}
          >
            MISSION & VISION
          </button>
          <button
            onClick={() => setActiveTab('approach')}
            className={`mt-4 mb-4 ${activeTab === 'approach' ? 'font-bold' : ''}`}
          >
            APPROACH & COMMITMENT
          </button>
        </div>

        {/* Keep your original content blocks exactly as is */}
        {activeTab === 'about' && (
          <div>
            <div className="bg-[#1a243f] m-4 p-8 mt-9 mb-9 text-[15px] sm:text-[17.5px] text-white">
              <p>
                Aemilius Cupero is a renowned US-based law firm offering top-tier legal services globally.
                We specialize in crafting innovative solutions for complex financial matters, turning challenges
                into swift resolutions. Backed by a skilled intelligence team adept at uncovering critical information
                on unregulated entities, we ensure our clients’ investments remain secure. Built on a foundation of trust,
                integrity, and strong values, we deliver personalized legal solutions across diverse practice areas, prioritizing
                transparency, open communication, and ethical excellence. Our experienced attorneys are committed to safeguarding your
                interests and building enduring relationships grounded in mutual respect and trust.
              </p>
            </div>
            <div className="h-75 mr-8">
              {faqData.map((faq, index) => (
                <Faq
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  LeftIcon={faq.icon}
                  isOpen={activeIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'mission' && (
          <div className="pt-5 ml-0 mr-0 flex flex-col space-y-6">
            <div className="bg-blue--900">
              <img src={mission} alt="" className="w-full mb-2" />
              <div className="flex items-center">
                <LuDot className="mt-3 text-[25px] text-[#AD9779]" />
                <h1 className="text-[21px] font-serif mt-3 mb-3 ml-2">Our Mission</h1>
              </div>
              <p className="leading-6">
                Our mission is to provide exceptional, results-driven legal services with a commitment to integrity,
                professionalism, and personalized attention. We aim to protect our clients’ interests, advocate for justice,
                and navigate complex legal challenges with clarity and expertise. By fostering strong client relationships
                and delivering innovative legal solutions, we seek to empower and support our clients in achieving their goals
                and securing their future.
              </p>
            </div>

            <div>
              <img src={vision} alt="" className="w-full mb-2" />
              <div className="flex items-center">
                <LuDot className="mt-3 text-[25px] text-[#AD9779]" />
                <h1 className="text-[21px] font-serif mt-3 mb-3 ml-2">Our Vision</h1>
              </div>
              <p className="leading-6">
                To be a leading force in the legal industry, recognized for unwavering integrity, innovative solutions,
                and a client-centered approach. We strive to deliver exceptional legal counsel, empower our clients with
                informed guidance, and uphold the highest standards of justice. Our vision is to make a meaningful impact
                through advocacy, trust, and dedication to each client’s unique needs and success.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'approach' && (
          <div className="pt-5 ml-0 mr-0">
            <div>
              <div className="flex items-center">
                <LuDot className="mt-3 text-[25px] text-[#AD9779]" />
                <h1 className="text-[21px] font-serif mt-3 mb-3 ml-2">Our Approach</h1>
              </div>
              <p className="leading-6">
                At Aemilius Cupero, our approach revolves around delivering client-focused legal
                services tailored to your unique needs. We begin by deeply understanding your objectives
                and concerns, ensuring our strategies align with your goals. Our team emphasizes clear
                and transparent communication, keeping you informed at every stage and presenting your
                options in simple, actionable terms. By leveraging our collective expertise and innovative
                problem-solving, we craft customized solutions that address your specific challenges with precision and care.
              </p>
            </div>
            <div className="mt-6">
              <div className="flex items-center">
                <LuDot className="mt-3 text-[25px] text-[#AD9779]" />
                <h1 className="text-[21px] font-serif mt-3 mb-3 ml-2">Our Commitment</h1>
              </div>
              <p className="leading-6">
                We are steadfast in our commitment to providing ethical, results-driven
                representation that prioritizes your best interests. Rooted in trust, integrity,
                and professionalism, our team works tirelessly to safeguard your rights and deliver
                favorable outcomes. With a focus on building long-lasting relationships, we ensure every
                client experiences the highest level of personalized attention and support, empowering you
                with confidence and peace of mind throughout the legal process.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  ) : (
    // Desktop version - keep your original code unchanged
    <div className="sm:flex sm:w-full sm:m-0 h-300 ">
      <div className="relative w-full h-[500px]">
        <img
          src={stachu}
          alt=""
          className="absolute sm:top-0 sm:left-0 sm:w-[90%] sm:h-[238%] object-cover"
        />
        <img
          src={women}
          alt=""
          className="absolute h-[131%] sm:top-24 sm:left-0 sm:w-[90%] sm:h-[219%] object-cover"
        />
      </div>
      <div className="mt-45 sm:mt-30 sm:mr-90 sm:w-[100%] sm:ml-0">
        <div>
          <p className="ml-4 text-[14px] tracking-[.2em] text-[#AD9779]">
            Why Choose Aemilius Cupero
          </p>
          <h1 className="ml-4 sm:ml-0 text-[2.9vh] font-serif sm:text-[5vh] sm:mb-2">
            Navigating Complexity, Securing Your Future with Trusted Legal Excellence.
          </h1>
          <hr className="sm:border-1 border-2 text-[#AD9779]" />
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-around">
          <div className="flex justify-center sm:justify-start">
            <button
              onClick={() => setActiveTab('about')}
              className={`mt-4 mb-4 sm:ml-0 ${activeTab === 'about' ? 'font-bold' : ''}`}
            >
              ABOUT US
            </button>
          </div>
          <hr />
          <div className="flex justify-center sm:justify-start">
            <button
              onClick={() => setActiveTab('mission')}
              className={`mt-4 mb-4 sm:ml-0 ${activeTab === 'mission' ? 'font-bold' : ''}`}
            >
              MISSION & VISION
            </button>
          </div>
          <hr />
          <div className="flex justify-center sm:justify-start">
            <button
              onClick={() => setActiveTab('approach')}
              className={`mt-4 mb-4 sm:ml-0 ${activeTab === 'approach' ? 'font-bold' : ''}`}
            >
              APPROACH & COMMITMENT
            </button>
          </div>
        </div>

        {activeTab === 'about' && (
          <div>
            <div className="bg-[#1a243f] m-4 p-8 mt-9 mb-9 sm:mb-11 sm:text-[15px]">
              <p className="text-white">
              Aemilius Cupero is a renowned US-based law firm offering top-tier legal services globally. We specialize in crafting innovative solutions for complex financial matters, turning challenges into swift resolutions. Backed by a skilled intelligence team adept at uncovering critical information on unregulated entities, we ensure our clients’ investments remain secure. Built on a foundation of trust, integrity, and strong values, we deliver personalized legal solutions across diverse practice areas, prioritizing transparency, open communication, and ethical excellence. Our experienced attorneys are committed to safeguarding your interests and building enduring relationships grounded in mutual respect and trust.
              </p>
            </div>

            <div className="h-75 mr-8">
              {faqData.map((faq, index) => (
                <Faq
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  LeftIcon={faq.icon}
                  isOpen={activeIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'mission' && (
          <div className="sm:w-180 sm:h-180 pt-5 sm:ml-5 sm:flex ml-5 mr-5">
            <div className="bg-blue--900 sm:w-90 sm:mr-10 sm:ml-0">
              <img src={mission} alt="" />
              <div className="flex items-center">
                <LuDot className="mt-3 text-[35px] text-[#AD9779]" />
                <h1 className="text-[21px] font-serif mt-10 mb-7">Our Mission</h1>
              </div>

            <p className="leading-6">
            Our mission is to provide exceptional, results-driven legal services with a commitment to integrity, professionalism, and personalized attention. We aim to protect our clients’ interests, advocate for justice, and navigate complex legal challenges with clarity and expertise. By fostering strong client relationships and delivering innovative legal solutions, we seek to empower and support our clients in achieving their goals and securing their future.
            </p>
          </div>

          <div className="w-[360px] ml-0">
            <img src={vision} alt="" />
            <div className="flex items-center">
              <LuDot className="mt-3 text-[35px] text-[#AD9779]" />
              <h1 className="text-[21px] font-serif mt-10 mb-7">Our Vision</h1>
            </div>
            <p className="leading-6">
             To be a leading force in the legal industry, recognized for unwavering integrity, innovative solutions, and a client-centered approach. We strive to deliver exceptional legal counsel, empower our clients with informed guidance, and uphold the highest standards of justice. Our vision is to make a meaningful impact through advocacy, trust, and dedication to each client’s unique needs and success.
            </p>
          </div>
        </div>
      )}

      {activeTab === 'approach' && (
        <div className="h-[480px] pt-5 ml-5 mr-5">
          <div>
            <div className="flex items-center">
              <LuDot className="mt-3 text-[35px] text-[#AD9779]" />
              <h1 className="text-[21px] font-serif mt-10 mb-7">Our Approach</h1>
            </div>
            <p className="leading-6">
              At Aemilius Cupero, our approach revolves around delivering client-focused legal services tailored to your unique needs. We begin by deeply understanding your objectives and concerns, ensuring our strategies align with your goals. Our team emphasizes clear and transparent communication, keeping you informed at every stage and presenting your options in simple, actionable terms. By leveraging our collective expertise and innovative problem-solving, we craft customized solutions that address your specific challenges with precision and care.
            </p>
          </div>
          <div>
            <div className="flex items-center">
              <LuDot className="mt-3 text-[35px] text-[#AD9779]" />
              <h1 className="text-[21px] font-serif mt-10 mb-7">Our Commitment</h1>
            </div>
            <p className="leading-6">
             We are steadfast in our commitment to providing ethical, results-driven representation that prioritizes your best interests. Rooted in trust, integrity, and professionalism, our team works tirelessly to safeguard your rights and deliver favorable outcomes. With a focus on building long-lasting relationships, we ensure every client experiences the highest level of personalized attention and support, empowering you with confidence and peace of mind throughout the legal process.
            </p>
          </div>
        </div>
      )}
    </div>
  </div>
)}





      {/* --insights update page-- */}

            {isMobile ? (
  // 📱 Mobile Layout
  <div className="bg-[url('./assets/animation2.webp')]  pb-10 mt-40 shadow-2xl ml-10 mr-10">
    <div className="flex flex-col mb-10 px-5">
      <p className="text-[#AD9779] text-[14px] font-serif mt-10">HANDS-ON EXPERIENCE</p>
      <h1 className="text-[30px] font-serif mb-6 tracking-[.02em]">
        Insights, Updates, and Expert Advice at Your Fingertips.
      </h1>
      <p className="text-[15px]">
        Stay ahead of potential scams and legal risks with our blog, offering timely insights, updates, and expert advice. We keep you informed of the latest developments, alerting you to emerging threats and changes in the law.
      </p>
    <GiHamburgerMenu className="text-[60px] text-[#AD9779] mt-10 mx-auto" />

    </div>

    {/* Swiper */}
    <div className="swiper-container px-3 mt-20">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        centeredSlides={false}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center relative mb-7">
              <div className="text-[14px] font-semibold text-center mt-15 mb-3 ml-20 mr-20">
                {slide.text}
              </div>
              <div className="relative w-full ml-10 ">
                <img
                  src={slide.img}
                  alt={`Slide ${index + 1}`}
                  className="w-full ml-5 h-56 object-cover rounded-lg "
                />
                <div className="slide-overlay absolute inset-0 flex justify-center items-center">
                  <a href={slide.videoLink} target="_blank" rel="noopener noreferrer">
                    <FaPlay className="play-icon cursor-pointer text-white text-[30px]" />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
) : (
  // 💻 Desktop Layout (your original code)
  <div className="bg-[url('./assets/animation2.webp')] h-280 opacity-100 pb-10 sm:mt-0 mt-185 shadow-2xl">
    <div className="sm:flex mb-10">
      <div>
        <p className="ml-5 mt-20 text-[#AD9779] text-[14px] font-serif sm:pl-90 sm:mt-30">
          HANDS-ON EXPERIENCE
        </p>
        <h1 className="ml-5 text-[44px] font-serif mb-6 sm:text-[33px] sm:pl-90 sm:tracking-[.1em] mr-5">
          Insights, Updates, and Expert Advice at Your Fingertips.
        </h1>
        <p className="ml-5 mr-13 mb-17 sm:pl-90 sm:text-[15px]">
          Stay ahead of potential scams and legal risks with our blog, offering timely insights, updates, and expert advice at your fingertips. We keep you informed of the latest developments, alerting you to emerging threats and changes in the law, so you can make informed decisions and protect your interests with confidence.
        </p>
      </div>
      <div>
        <GiHamburgerMenu className="text-[68px] ml-50 text-[#AD9779] sm:mr-150 sm:mt-55" />
      </div>
    </div>

    <div className="swiper-container">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: false,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
            centeredSlides: false,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: true,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: true,
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center relative mb-7 sm:ml-0 sm:mr-0 ml-10 mr-5">
              <div className="slide-title opacity-0 sm:ml-20 sm:mr-25 sm:mt-20 sm:mb-0 mt-20 text-[15px] ml-10 mr-15 mb-5 sm:text-[18px] font-semibold text-center transition-opacity duration-300">
                {slide.text}
              </div>
              <div className="relative w-full sm:mt-10">
                <img
                  src={slide.img}
                  alt={`Slide ${index + 1}`}
                  className="img w-full h-70 object-cover rounded-lg"
                />
                <div className="slide-overlay">
                  <a href={slide.videoLink} target="_blank" rel="noopener noreferrer">
                    <FaPlay className="play-icon cursor-pointer" />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
)}



      {/* --recovery/scame page-- */}
       
                  {isMobile ? (
  // 📱 Mobile Layout
  <div className="flex flex-col text-center px-5 mt-10">
    <p className="text-[#AD9779] font-serif text-[18px] mb-3">
     WHAT WE ARE EXPERT AT
    </p>
    <h1 className="font-serif text-[40px] mb-8 leading-tight">
     Recovering Your Losses, Defending Your Rights.
    </h1>
    <p className="text-[20px] text-gray-500">
Our legal team specializes in the recovery of financial assets, representing clients who have been defrauded by fraudulent schemes. Through comprehensive fraud litigation, asset tracing, and robust consumer protection measures, we employ strategic legal actions to recover misappropriated funds and secure appropriate compensation for our clients.    </p>

    {/* Sidebar on mobile (optional: could be a drawer or at bottom) */}
    <div className="mt-8">
      {/* <Sidebar /> */}
    </div>
  </div>
) : (
  // 💻 Desktop / Tablet Layout
  <div className="sm:flex sm:flex-col text-center m-5">
    <p className="mt-20 text-[#AD9779] font-serif text-[14px] mb-3">
      WHAT WE ARE EXPERT AT
    </p>
    <h1 className="font-serif text-[40px] mb-5">
     Recovering Your Losses, Defending Your Rights..
    </h1>
    <p className="sm:ml-145 sm:mr-145">
Our legal team specializes in the recovery of financial assets, representing clients who have been defrauded by fraudulent schemes. Through comprehensive fraud litigation, asset tracing, and robust consumer protection measures, we employ strategic legal actions to recover misappropriated funds and secure appropriate compensation for our clients.    </p>

    {/* Sidebar on desktop */}
    {/* <Sidebar /> */}
  </div>
)}
         <Sidebar />

            {/* --what our client says-- */}

{isMobile ? (
  <div className="h-auto w-90 mt-15  bg-[url('./assets/feedback.webp')] bg-cover bg-center relative ">
    <div className="ml-5 mr-5 pt-5 mb-5 text-center">
      <p className="text-[14px] tracking-[.25em] text-[#AD9779] font-serif mt-8 pt-5 ml-5">TESTEMONIALS</p>
      <p className="text-[28px] font-serif ">What Our Client Say</p>
    </div>

    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 7000, disableOnInteraction: false }}
      loop={true}
      slidesPerView={1}
      className="mySwiper"
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div className="ml-20 mr-20 mt-20 mb-20">
            <div className="flex ml-0">
              <div>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-10 rounded-full mr-5"
                />
              </div>
              <div className="ml-2">
                <h1 className="font-serif text-[12px]">{testimonial.name}</h1>
                <p className="text-[#AD9779] text-[10px]">{testimonial.country}</p>
              </div>
              <div className="ml-4 text-[#AD9779] text-[23px]">
                <ImQuotesRight />
              </div>
            </div>
            <div className=" pt-5 pb-5  text-[14px]">
              <p className="font-serif text-[10px]">{testimonial.text}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
) : (
  <div className="sm:h-130 sm:mt-8 bg-[url('./assets/feedback.webp')] bg-cover bg-center relative ml-0 mr-0">
    <div className="sm:ml-190 sm:pt-10 sm:mb-10">
      <p className="sm:text-[13px] tracking-[.25em] sm:ml-30 text-[#AD9779] font-serif sm:mt-2 pt-14 mt-8 ml-37">
        TESTEMONIALS
      </p>
      <p className="sm:text-[40px] font-serif text-[35px] sm:ml-7 ml-17">What Our Client Say</p>
    </div>

    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 7000, disableOnInteraction: false }}
      loop={true}
      slidesPerView={1}
      className="mySwiper"
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div className="sm:ml-40 sm:pb-90 sm:mr-140 mt-20 ml-20 mb-20 mr-20">
            <div className="flex sm:ml-100 sm:pt-10 ">
              <div>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="sm:h-10 h-10 rounded-full mr-5"
                />
              </div>
              <div className="sm:ml-5">
                <h1 className="font-serif sm:text-[13px] text-[12px]">{testimonial.name}</h1>
                <p className="text-[#AD9779] sm:text-[12px] text-[10px]">{testimonial.country}</p>
              </div>
              <div className="sm:ml-4 sm:text-[22px] text-[#AD9779] text-[23px] ml-6">
                <ImQuotesRight />
              </div>
            </div>
            <div className="sm:ml-100 sm:pt-7 sm:pb-10 sm:mr-10 text-[14px]">
              <p className="font-serif text-[12px]">{testimonial.text}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    <div className="bg-[#AD9779] w-13 h-13 items-center justify-center absolute top-68 left-55 hidden sm:flex">
      <IoIosArrowBack className="text-[25px] text-white" />
    </div>

    <div className="bg-[#AD9779] w-13 h-13 items-center justify-center absolute top-68 right-85 hidden sm:flex">
      <IoIosArrowForward className="text-[25px] text-white" />
    </div>
  </div>
)}




                  {isMobile ? (
  // ---------- MOBILE VIEW ----------
  <div className="h-300 relative bg-[url('./assets/form.webp')]">
    <div className="text-center bg-[#0d1018] bg-[url('./assets/meeting.webp')] bg-cover bg-center opacity-100 pt-30 pb-50">
      <ImQuotesRight className="ml-35 text-[80px] text-[#AD9779] " />
      <p className="text-[20px] text-white font-serif">
        Expert Legal Advice, Free for Clients
        <br className="sm:hidden" />
        Worldwide
      </p>
      <h1 className="text-[36.4px] font-serif text-white ml-8 mr-8 pb-10">
        Get in Touch – Fill Out the Form Below for
        <br className="sm:flex hidden" />
        Personalized Assistance.
      </h1>
    </div>

    <div className="bg-white h-150 mb-10 shadow-2xs">
      <div className="h-130 pt-10 ml-5 mr-5 mt-10 mb-10 pl-5 pr-5 bg-[#10172C]">
        <p className="text-white mb-5">OUR LOCATION</p>
        <p className="text-[#AD9779] text-[15px]">THE UNITED STATES OF AMERICA:</p>
        <p className="text-white mb-6">
          1309 Coffeen Avenue STE 1200 Sheridan, Wyoming 82801,
        </p>

        <p className="text-[#AD9779] text-[15px]">HONG KONG:</p>
        <p className="text-white mb-6">Lippo Centre, 89 Queensway, Admiralty, Hong Kong</p>

        <p className="text-white mb-5">QUICK CONTACT</p>
        <p className="text-[#AD9779] mb-5">
          Email: <span className="text-white">support@aemilius-cupero.net</span>
        </p>

        <p className="text-white">
          “ We will answer you within 24 hours via email, or you can call us directly, we are
          always ready to serve you. Thank You”
        </p>

        <div className="flex">
          <div className="flex text-[#AD9779] mt-5 relative bg-red-300 h-10">
            <div className="text-[30px] absolute top-2 left-0">
              <MdCall />
            </div>
            <div className="text-[25px] absolute top-1 left-3">
              <BiSolidMessageRoundedEdit />
            </div>
          </div>

          <div className="ml-13 mt-5">
            <p className="text-[20px] text-[#AD9779]">+1 (307) 223-2060</p>
          </div>
        </div>
      </div>
    </div>
  </div>
) : (
  // ---------- DESKTOP VIEW ----------
  <div className="h-300 relative bg-[url('./assets/form.webp')]">
    <div className="text-center bg-[#0d1018] bg-[url('./assets/meeting.webp')] bg-cover bg-center opacity-100 pt-30 pb-50 sm:pt-30 sm:h-200  bg-fixed">
      <ImQuotesRight className="ml-50 text-[80px] sm:text-[70px] sm:ml-230 sm:mb-10 text-[#AD9779]" />
      <p className="text-[20px] sm:text-[25px] text-white font-serif">
        Expert Legal Advice, Free for Clients
        <br className="sm:hidden" />
        Worldwide
      </p>
      <h1 className="text-[36.4px] sm:text-[50px] font-serif text-white ml-8 mr-8 pb-10">
        Get in Touch – Fill Out the Form Below for
        <br className="sm:flex hidden" />
        Personalized Assistance.
      </h1>
    </div>

    <div className="bg-white sm:h-170 sm:w-1/2 sm:absolute sm:top-120 left-130 h-150 mb-10 shadow-2xs">
      <div className="sm:h-140 bg-[#10172C] sm:w-80 sm:pt-12 sm:pl-5 sm:pr-7 sm:ml-10 sm:mt-15 h-130 pt-10 ml-5 mr-5 mt-10 mb-10 pl-5 pr-5">
        <p className="text-white mb-5">OUR LOCATION</p>
        <p className="text-[#AD9779] text-[15px]">THE UNITED STATES OF AMERICA:</p>
        <p className="text-white mb-6">
          1309 Coffeen Avenue STE 1200 Sheridan, Wyoming 82801,
        </p>

        <p className="text-[#AD9779] text-[15px]">HONG KONG:</p>
        <p className="text-white mb-6">Lippo Centre, 89 Queensway, Admiralty, Hong Kong</p>

        <p className="text-white mb-5">QUICK CONTACT</p>
        <p className="text-[#AD9779] mb-5">
          <a href="mailto:support@aemilius-cupero.net" className="hover:underline">
    support@aemilius-cupero.net
  </a>
        </p>

        <p className="text-white">
          “ We will answer you within 24 hours via email, or you can call us directly, we are
          always ready to serve you. Thank You”
        </p>

        <div className="flex">
          <div className="flex text-[#AD9779] mt-5 relative bg-red-300 h-10">
            <div className="text-[30px] absolute top-2 left-0">
              <MdCall />
            </div>
            <div className="text-[25px] absolute top-1 left-3">
              <BiSolidMessageRoundedEdit />
            </div>
          </div>

          <div className="ml-13 mt-5 text-[#AD9779] text-[20px]">
            <a href="tel:+1307223040" className="hover:underline">
           +1 (307) 223‑040
          </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)}


              
         
          {/* --footer page-- */}
         <div >
          <div className="bg-[#1a243f] sm:flex pb-20 mt-30">
            <div className="sm:w-200 sm:ml-95 pt-25 ml-5 mr-5">
                  <img src={logo} alt=""  className="bg-white p-3 mb-5"/>
            <p className="text-white pb-4">
              Aemilius Cupero LLC is a law firm exclusively focused on helping clients recover lost funds. We do not offer services related to online investments, including cryptocurrencies, forex, or binary options. 
            </p>
            <p className="text-white pb-4">
              Unfortunately, we have become aware of fraudulent individuals who falsely claim to be employees of Aemilius Cupero in an attempt to exploit our name for financial gain. These scammers use deceptive tactics to request sensitive information such as credit card numbers, account details, and other personal data. We urge you to contact us directly before engaging in any financial transactions or sharing personal information. 
            </p>
            <p className="text-white">
              Please note that Aemilius Cupero is not liable for any consequences resulting from communication initiated through unofficial domains. Always verify that you are using our official website (e.g., www.aemilius-cupero.com or .net) for all interactions with us.
            </p>
            </div>

              <div className="w-70 sm:w-100 sm:flex">
                <div className=" ml-5 mr-5 sm:pt-24">
                  <h1 className="text-[30px] sm:text-[22px] font-serif text-white mt-10">WHERE TO FIND US</h1>
                  <hr className="mt-5 mb-7 text-[#AD9779]"/>
                  <div className="flex mb-2">
                       <div className="border-1 border-white bg-green-400 hover:border-transparent w-19 h-20"><IoLogoMedium className="text-white text-[45px] mt-4 ml-4"/></div>
                      <div className="border-1 border-white bg-blue-500 hover:border-transparent w-19 h-20"><SiLinkedin className="text-white text-[45px] mt-4 ml-4"/></div>
                  </div>
                 <div className="flex mb-2">
                   <div className="border-1 border-white bg-[#cd201f] hover:border-transparent w-19 h-20"><IoLogoYoutube className="text-white text-[45px] mt-4 ml-4"/></div>
                   <div className="border-1 border-white bg-red-700 hover:border-transparent w-19 h-20"><FaPinterest className="text-white text-[45px] mt-4 ml-4"/></div>
                 </div>
                </div>
                <div className="ml-5 mr-5 sm:pt-24 ">
                  <h1 className="text-[30px] sm:text-[22px] font-serif text-white mt-10">SAFE AND SECURE</h1>
                   <hr className="mt-5 mb-7 text-[#AD9779]"/>
                   <div>
                    <img src={footer1} alt=""  className="mb-5"/>
                    <img src={footer2} alt="" className="mb-5"/>
                    <img src={footer3} alt="" className=""/>
                   </div>
                </div>
          </div>
          </div>
         </div>
              <div className="bg-[#11192e] w-full">
                 <p className="pt-5 pb-4 text-white sm:ml-95 ml-5">Copyright 2024 Aemilius Cupero LLC | All Rights Reserved</p>
             </div>
    </>
  );
}

export default Home;