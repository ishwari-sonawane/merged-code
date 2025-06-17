import { FaMedium } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { CgMenuLeftAlt } from "react-icons/cg";
import logo from "./assets/logo.webp"
import {Link} from "react-router-dom"
// import Navbar from './Navbar';
import React from 'react';
// import MainNavbar from './MainNavbar';
import ptt_career from './assets/ptt_career.webp';
import h6_statue from './assets/h6_statue.webp';
import { useEffect, useState } from "react";
import { FaBullseye, FaList, FaSearch, FaCheck, FaArrowRight } from "react-icons/fa";
import bloomberg from './assets/bloomberg.webp';
import quote from './assets/quote.webp';
import bing from './assets/bing.webp';
import affinity from './assets/affinity.webp';
import cbs from './assets/cbs.webp';
import yahoo from './assets/yahoo.webp';
import nbc from './assets/nbc.webp';
import fox from './assets/fox.webp';
import news from './assets/news.webp';
import puzzle from './assets/puzzle.webp';
import about_hammer from './assets/about_hammer.webp';
import about_progress_bg from "./assets/about_progress_bg.webp";
import abc from './assets/abc.webp';
import { motion, AnimatePresence } from "framer-motion";
import { div } from 'framer-motion/client';
import law from './assets/law.webp';
// import about_hammer from "./assets/about_hammer.webp";
import "./App.css"
import { IoLogoMedium } from "react-icons/io5";
import { SiLinkedin } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io5";
import footer1 from "./assets/footer1.webp"
import footer2 from "./assets/footer2.webp"
import footer3 from "./assets/footer3.webp"
import SidebarB from './SidebarB'; 
import Contactus from "./Contactus";
import { useMediaQuery } from 'react-responsive';


import { MdCall } from "react-icons/md";

const Counter = ({ end, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 50); // Number of increments

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};


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

   const menuItems = [
  'Overview',
  'Verify Authenticity',
  'Seek Guidance',
  'Flag Concerns',
  'Steer Clear. Stay Cautious.'
];

const contentMap = {
  'Overview': {
    title: 'Understand the Basics',
    content: (
      <p>
        Learn how to identify scams early and take informed financial steps. This section introduces key concepts for due diligence.
      </p>
    )
  },
  'Verify Authenticity': {
    title: "Verify that it’s not a ‘clone firm.’",
    content: (
      <>
        <p className="mb-4">
          A common scam involves fraudsters impersonating legitimate firms, often referred to as “clone firms.” These clone firms mimic names of real businesses, such as the Financial Conduct Authority (FCA), to deceive individuals.
        </p>
        <p className="mb-4">
          To avoid falling victim, always verify contact details using official sources like the Regulatory Register. Don’t trust details given by the suspicious firm directly.
        </p>
        <p>
          Example: a “clone firm” used names like FEFCA and misled people with voicemails pretending to be the FCA.
        </p>
      </>
    )
  },
  'Seek Guidance': {
    title: 'Seek Guidance',
    content: (
      <p>
        If unsure, consult with a licensed financial advisor. Avoid making hasty decisions based on unsolicited advice.
      </p>
    )
  },
  'Flag Concerns': {
    title: 'Report Suspicious Activity',
    content: (
      <p>
        Report any suspicious behavior to your national financial regulator or law enforcement to help prevent further fraud.
      </p>
    )
  },
  'Steer Clear. Stay Cautious.': {
    title: 'Stay Safe',
    content: (
      <p>
        Be cautious of high-pressure sales, unrealistic returns, or companies without regulatory proof. Stay educated and alert.
      </p>
    )
  }
};   

// faq section 
const faqs = [
  {
    question: "Why is it important to check a company’s registration?",
    answer: "It is crucial to verify a company’s registration with the government to ensure it operates legally and is trustworthy. Checking the registration guarantees you’re not dealing with a scam business and helps protect your financial investment."
  },
  {
    question: "How can I check a company’s online reputation?",
    answer: "Before investing, research a company’s online reputation by reading reviews, ratings, and customer complaints on independent review platforms. This will help you gauge the company's reliability and avoid falling for scams.."
  },
  {
    question: "What does the domain registration date tell me about a website?",
    answer: "Verifying that a company is regulated by a financial authority ensures that it complies with relevant laws and regulations. This provides confidence that your investments are secure and protected against potential scams."
  },
  {
    question: "Why should I read bonus agreements carefully before investing?",
    answer: "Bonus agreements can sometimes contain hidden fees, restrictions, or clauses that may prevent you from withdrawing your winnings. Always read the fine print to understand the terms and conditions before committing."
  },
  {
    question: "What is the importance of diversifying my investment portfolio?",
    answer: "Diversifying your investments helps spread risk across different asset classes, reducing the potential for significant losses. Avoid putting all your money into one investment, and only invest what you can afford to lose to protect yourself from financial setbacks."
  },
  {
    question: "How can I ensure my investments are safe?",
    answer: "To ensure your investments are safe, verify the company’s registration, check its online reputation, confirm its regulatory status, and be cautious with bonuses or offers. Additionally, consider diversifying your investments to reduce risks."
  }
];


function Duediligence( ) {
// faq part
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const isMobile = useMediaQuery({ maxWidth: 1368 });
  const [activeTab, setActiveTab] = useState('Verify Authenticity');
const [visibleLogos, setVisibleLogos] = useState(logos.slice(0, 6));
const [startIndex, setStartIndex] = useState(0);


useEffect(() => {
  const interval = setInterval(() => {
    setVisibleLogos(prev => {
      const nextIndex = (startIndex + 6) % logos.length;
      const nextLogo = logos[nextIndex];
      setStartIndex((prevIndex) => (prevIndex + 1) % logos.length);

      return [...prev.slice(1), nextLogo];
    });
  }, 5000); // every 5 seconds

  return () => clearInterval(interval);
}, [startIndex]);

 const [menuOpen, setMenuOpen] = useState(false);
    return(
            <> 
               {/* navbar */}
                          
                   
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


               
          {/* page first */}
                                {isMobile ? (
  // ✅ Mobile layout
  <div
  className="w-full h-130 bg-cover bg-center flex flex-col px-6 py-20 relative"
  style={{ backgroundImage: `url(${ptt_career})` }}
>
    <div className="w-full text-white z-2 ">
      <h1 className="text-5xl font-serif font-light mb-4">Due Diligence</h1>
      <p className="text-lg leading-6 tracking-widest uppercase ">
   "Our due diligence services empower you to make informed <br />investment decisions by thoroughly researching <br />opportunities—whether you choose to do it yourself or<br /> partner with us for expert guidance."
      </p>
    </div>
    <div className="flex z-8">
       <nav className=" bg-white/30 backdrop-blur-sm px-6 py-3 flex space-x-3 absolute top-60 right-12 mt-10 ">
    <a href="Home" className="text-white font-semibold">Home</a>
     <span className="text-white">→</span>
    <a href="Duediligence" className="text-[#bb7742] font-medium">Due Diligence</a>
  </nav>
    </div>
    <div className="absolute inset-0 bg-black/30"></div>
  </div>
) : (
  // ✅ Desktop layout
   <div
  className="w-full h-100 bg-cover bg-center flex flex-col px-6 py-20 relative"
  style={{ backgroundImage: `url(${ptt_career})` }}
>
    <div className="w-2/3 text-white z-10 ml-30">
      <h1 className="text-6xl font-serif font-light mb-4">Due Diligence</h1>
      <p className="text-lg leading-relaxed uppercase">
       "Our due diligence services empower you to make informed<br /> investment decisions by thoroughly researching <br />opportunities—whether you choose to do it yourself 
       or <br />partner with us for expert guidance."
      </p>
    </div>
    <div className="w-1/3 mt-0 z-10">
      <nav className="bg-white/30 backdrop-blur-sm px-6 py-3 flex space-x-6 absolute justify-center right-60 top-28">
        <a href="Home" className="text-white font-semibold">Home</a>
        <a href="Duediligence" className="text-[#bb7742] font-medium">Due Diligence</a>
      </nav>
    </div>
    <div className="absolute inset-0 bg-black/30"></div>
  </div>
)}

           
  {/* page second */}
              {isMobile ? (
        // 🌐 Mobile View
        <div className="bg-white py-14 px-6 mt-6">
          <div className=" items-center gap-8">
            <div className="z-20 w-full max-w-sm">
              <img
                src={h6_statue}
                alt="Lady Justice"
                className="h-full object-contain"
              />
              {/* animated circle */}
                <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] bg-gradient-to-t from-white to-[#ccbd96] rounded-full z-0 opacity-80" />
   
            </div>
   
                  
            <div className="">
              <h5 className="text-xs tracking-[0.7vw] text-[#a87d4a] font-semibold uppercase mt-10">
                The Importance of Due Diligence
              </h5>
              <h2 className="text-4xl text-[#1b1c2c] font-semibold tracking-wide leading-snug mb-4">
                Safeguard Your Investments
                with <br /> Trusted Due Diligence
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed ">
                Due diligence is a vital process for any investor, providing a detailed
                understanding of a company’s financial health, business model, and
                compliance with legal and regulatory standards. By thoroughly evaluating
                financial statements, operational practices, and market reputation,
                investors can identify potential risks and opportunities, ensuring their
                decisions are well-informed.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Moreover, due diligence validates the authenticity of the company’s
                claims and ensures adherence to laws, protecting investors from
                liabilities associated with unethical practices. It also empowers
                investors to negotiate better terms and make confident, strategic
                decisions.
              </p>
            </div>
          </div>
        </div>
      ) : (
        // 🖥️ Desktop View
        <div className="bg-white py-20 px-16 lg:px-24">
          <div className="max-w-7xl mx-auto flex flex-row items-center gap-12">
            <div className="flex-shrink-0 z-0">
              <img
                src={h6_statue}
                alt="Lady Justice"
                className="w-full h-170 mt-15 max-w-lg object-contain z-20"
              />
               <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] bg-gradient-to-t from-white to-[#ccbd96] rounded-full z-0 opacity-80" />
            </div>

            <div className="text-left max-w-2xl">
              <h5 className="text-sm tracking-widest text-[#a87d4a] font-semibold uppercase mb-3">
                The Importance of Due Diligence
              </h5>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1b1c2c] leading-snug mb-6">
                Safeguard Your Investments <br className="hidden md:block" />
                with Trusted Due Diligence
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                Due diligence is a vital process for any investor, providing a detailed
                understanding of a company’s financial health, business model, and
                compliance with legal and regulatory standards. By thoroughly evaluating
                financial statements, operational practices, and market reputation,
                investors can identify potential risks and opportunities, ensuring their
                decisions are well-informed.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Moreover, due diligence validates the authenticity of the company’s
                claims and ensures adherence to laws, protecting investors from
                liabilities associated with unethical practices. It also empowers
                investors to negotiate better terms and make confident, strategic
                decisions.
              </p>
            </div>
          </div>
        </div>
      )}


{/* page 3 */}
 {isMobile ? (
        // 📱 Mobile View
        <div className="relative bg-cover bg-center h-full bg-no-repeat mt-16 text-white py-16  px-1 bottom-22 bg-[url('./assets/team_fancy.webp')]">
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 z-1"
            style={{
              backgroundColor: "transparent",
              backgroundImage: "linear-gradient(180deg, #243257E8 0%, #060B19E6 89%)",
              opacity: 1,
              transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
            }}
          ></div>

          {/* Animated Hammer */}
          <motion.img
            src={about_hammer}
            alt="Gavel"
            className="absolute bottom-[-60px] w-80 z-20 left-[-30px] top-120"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: [ -300, 0, -10, 10, 0 ], opacity: 1 }}
            transition={{
              x: { duration: 2, ease: "easeOut", times: [0, 0.5, 0.75, 0.9, 1] },
              opacity: { duration: 1.2, ease: "easeOut" }
            }}
          />

          {/* Content Cards in Column */}
          <div className="relative z-10 h-[200px] space-y-12">
            {[
              {
                icon: "/icons/verify.svg",
                title: "Verify the Company",
              desc:" Check the business name, address, registration, and online presence. Make sure the website is professional and contact details are legitimate",
              },
              {
                icon: "<MdCall />",
                title: "Watch for Red Flags",
                desc: "Stay cautious of urgent messages, unclear details, or unprofessional language, as scammers often use these tactics to pressure you into making quick decisions.",
              },
              {
                icon: "/icons/examine.svg",
                title: "Examine the Offer",
                desc: "Be cautious of offers that seem too good to be true, as they are often designed to deceive and exploit. Always verify the legitimacy before committing.",
              },
              {
                icon: "/icons/review.svg",
                title: "Read Reviews",
                desc: "Check reviews on reliable platforms and be cautious of suspiciously positive or fake feedback that could indicate a scam.",
              },
              {
                icon: "/icons/payment.svg",
                title: "Secure Payments",
                desc: "Legitimate businesses accept secure payment methods like credit or debit cards or PayPal, rather than cryptocurrencies or gift cards.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center space-y-3 px-3">
                <img src={item.icon} alt={item.title} className="mx-auto h-10" />
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
          
      ) : (
        // 🖥️ Desktop View
        <div className="relative bg-cover h-[500px] bg-center bg-no-repeat mt-2 text-white py-20 px-1 bottom-22 bg-[url('./assets/team_fancy.webp')]">
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 h-[500px] z-1"
            style={{
              backgroundColor: "transparent",
              backgroundImage: "linear-gradient(180deg, #243257E8 0%, #060B19E6 89%)",
              opacity: 1,
              transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
            }}
          ></div>

          {/* Animated Hammer */}
          <motion.img
            src={about_hammer}
            alt="Gavel"
            className="absolute bottom-[-80px] left-[-60px] w-100 z-12 top-100"
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: [ -300, 0, -10, 10, 0 ], opacity: 1 }}
            transition={{
              x: { duration: 2, ease: "easeOut", times: [0, 0.5, 0.75, 0.9, 1] },
              opacity: { duration: 1.2, ease: "easeOut" }
            }}
          />
          {/* 📌 Insert DueSidebar here */}

          {/* Grid Content */}
          <div className="max-w-7xl mx-auto grid grid-cols-1   sm:grid-cols-2 lg:grid-cols-5 gap-10 text-center lg:text-left relative z-10">
            {/* Card Items */}
            {[
              {
                icon: "/icons/verify.svg",
                title: "Verify the Company",
                desc: "Check the business name, address, registration, and online presence. Make sure the website is professional and contact details are legitimate",
              },
              {
                icon: "/icons/red-flags.svg",
                title: "Watch for Red Flags",
                desc: "Stay cautious of urgent messages, unclear details, or unprofessional language, as scammers often use these tactics to pressure you into making quick decisions.",
              },
              {
                icon: "/icons/examine.svg",
                title: "Examine the Offer",
                desc: "Be cautious of offers that seem too good to be true, as they are often designed to deceive and exploit. Always verify the legitimacy before committing.",
              },
              {
                icon: "/icons/review.svg",
                title: "Read Reviews",
                desc: "Check reviews on reliable platforms and be cautious of suspiciously positive or fake feedback that could indicate a scam.",
              },
              {
                icon: "/icons/payment.svg",
                title: "Secure Payments",
                desc: "Legitimate businesses accept secure payment methods like credit or debit cards or PayPal, rather than cryptocurrencies or gift cards.",
              },
            ].map((item, index) => (
              <div key={index} className="space-y-4 border-l-1 h-70 pl-6">
                <img src={item.icon} alt={item.title} className="mx-auto lg:mx-0 h-10" />
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-lg text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
         
        </div>
       
      )}

      {/* duesidebar */}
      <div className="relative z-10 my-8 mt-60">
  <SidebarB />

</div>
 {/* NEWS SECTION */}
      {isMobile ? (
        <section
          className="relative bg-gray-50 py-10 px-4 h-[350px] overflow-hidden mt-40 bg-center"
          style={{ backgroundImage: `url(${quote})` }}
        >
          <div className="max-w-lg mx-auto">
            <p className="text-sm tracking-widest text-[#AD9779]  uppercase">
              AEMILIUS CUPERO - AS SEEN IN THE NEWS
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mt-2">
              THE TRUSTED CHOICE FOR YOUR NEEDS, ENDORSED BY LEADING NEWS PUBLICATIONS!
            </h2>
          </div>
          <div className="mt-8">
            <div className="flex gap-6 justify-start items-center">
              <AnimatePresence>
                {visibleLogos.map((logo, index) => (
                  <motion.img
                    key={index}
                    src={logo}
                    alt={`logo-${index}`}
                    className="h-10 object-contain"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                  />
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>
        // desktop view
      ) : (
        <section
          className="relative bg-gray-50 py-20 px-16  h-[280px] overflow-hidden bg-center mt-30"
          style={{ backgroundImage: `url(${quote})` }}
        >
          <div className="max-w-3xl mx-auto sm:px-10 pb-2 ml-[-10px]">
            <p className="text-sm tracking-widest text-[#AD9779] font-semibold uppercase">
              AEMILIUS CUPERO - AS SEEN IN THE NEWS
            </p>
            <h2 className="text-2xl text-gray-900 tracking-widest whitespace-nowrap">THE TRUSTED CHOICE FOR YOUR NEEDS, ENDORSED BY LEADING NEWS PUBLICATIONS!
              </h2>
          </div>
          <div className="mt-12 relative w-full">
            <div className="flex justify-center gap-25 items-center grayscale hover:grayscale-0">
              <AnimatePresence>
                {visibleLogos.map((logo, index) => (
                  <motion.img
                    key={index}
                    src={logo}
                    alt={`logo-${index}`}
                    className="h-12 object-contain"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                  />
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>
      )}

      {/* CONTACT + IMAGE SECTION */}
      {isMobile ? (
        <div className="px-4 py-12">
          <h2 className="text-sm  text-[#AD9779] tracking-widest">CONTACT US</h2>
          <h1 className="text-3xl text-gray-900 font-semibold my-4 tracking-widest">
           Speak with an Expert Today – Free Legal Consultation with No Commitment!
          </h1>
          <p className="text-sm text-gray-600 leading-6 mt-10">
            At Aemilius Cupero, we offer a free, no-obligation consultation to help you understand your legal options. Whether you’re dealing with a scam, need advice on a legal matter, or have any other questions, our experienced team is here to assist you. Contact us today to schedule your consultation and take the first step toward resolving your issue.
          </p>

          <div className="mt-8 relative">
            <img src={law} alt="Consultation" className="w-[500px] h-[500px] object-cover" />
            <motion.img
              src={puzzle}
              alt="Floating"
              className="absolute w-12 bottom-10 right-6"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
              whileHover={{
                rotate: [0, 5, -5, 0],
                transition: { duration: 1 },
              }}
            />
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-start px-24 py-28">
          <div className="max-w-xl">
            <h2 className="text-sm text-[#AD9779] tracking-widest">CONTACT US</h2>
            <h1 className="text-4xl font-semibold tracking-widest text-gray-900 my-4">
             Speak with an Expert Today – Free Legal Consultation with No Commitment!
            </h1>
            <p className="text-sm text-gray-600 leading-6">
             At Aemilius Cupero, we offer a free, no-obligation consultation to help you understand your legal options. Whether you’re dealing with a scam, need advice on a legal matter, or have any other questions, our experienced team is here to assist you. Contact us today to schedule your consultation and take the first step toward resolving your issue.
            </p>
          </div>

          <div className="relative w-[800px] -mt-20">
            <img src={law} alt="Consultation" className="w-full h-300 object-cover ml-30" />
            <motion.img
              src={puzzle}
              alt="Floating"
              className="absolute w-14 bottom-28 right-10"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
              whileHover={{
                rotate: [0, 5, -5, 0],
                transition: { duration: 1 },
              }}
            />
          </div>
        </div>
      )}

      {/* COUNTERS SECTION */}
    <div
  className={`py-20 bg-center h-[450px] top-20 ${isMobile ? "px-4" : "px-0 -mt-20"}`}
  style={{ backgroundImage: `url(${about_progress_bg})` }}
>
        <div className={`mx-auto max-w-6xl grid gap-10 ${isMobile ? "grid-cols-1 text-center" : "grid-cols-4 text-center"}`}>
          {[
            { count: 63, suffix: "M+", label: "RECOVERED TILL TODAY" },
            { count: 830, suffix: "+", label: "CASE COMPLETED" },
            { count: 50, suffix: "+", label: "WORLDWIDE AFFILIATES" },
            { count: 25, suffix: "+", label: "EXPERIENCED LAWYERS" },
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-[40px] lg:text-[50px] font-bold text-white font-['Cormorant Infant'] tracking-[2.5px]">
                <Counter end={item.count} suffix={item.suffix} />
              </h3>
              <p className="text-base text-white mt-2 font-['Nunito Sans sans-serif']">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* faq section */}
       {isMobile ? (
        // 📱 Mobile View
        <div className="max-w-full mx-auto -mt-10 p-4 bg-white">
          <h2 className="text-2xl font-semibold font-serif mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-300 hover:shadow-sm transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left py-3 px-3 focus:outline-none"
                >
                  <span className="text-base font-medium text-black font-sans tracking-wide">
                    {faq.question}
                  </span>
                  <span className="text-xl font-bold text-black">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-3 pb-3 text-gray-600 text-sm font-sans">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        // 💻 Desktop View
        <div className="max-w-4xl mx-auto -mt-16 p-8 bg-white">
          <h2 className="text-3xl font-semibold font-serif mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-300 hover:shadow-sm transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left py-4 px-4 focus:outline-none"
                >
                  <span className="text-lg font-medium text-black font-sans tracking-wide">
                    {faq.question}
                  </span>
                  <span className="text-2xl font-bold text-black">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-4 pb-4 text-gray-600 text-base font-sans">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

{/* footer */}
                   <div>
                                      <div className="bg-[#1a243f] sm:flex pb-20 mt-30">
                                          <div className="sm:w-200 sm:ml-95 pt-25 ml-5 mr-5">
                                              <img src={logo} alt="" className="bg-white p-3 mb-5" />
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
                                              <div className="ml-5 mr-5 sm:pt-24">
                                                  <h1 className="text-[30px] sm:text-[22px] font-serif text-white mt-10">WHERE TO FIND US</h1>
                                                  <hr className="mt-5 mb-7 text-[#AD9779]" />
                                                  <div className="flex mb-2">
                                                      <div className="border-1 border-white bg-green-400 hover:border-transparent w-19 h-20"><IoLogoMedium className="text-white text-[45px] mt-4 ml-4" /></div>
                                                      <div className="border-1 border-white bg-blue-500 hover:border-transparent w-19 h-20"><SiLinkedin className="text-white text-[45px] mt-4 ml-4" /></div>
                                                  </div>
                                                  <div className="flex mb-2">
                                                      <div className="border-1 border-white bg-[#cd201f] hover:border-transparent w-19 h-20"><IoLogoYoutube className="text-white text-[45px] mt-4 ml-4" /></div>
                                                      <div className="border-1 border-white bg-red-700 hover:border-transparent w-19 h-20"><FaPinterest className="text-white text-[45px] mt-4 ml-4" /></div>
                                                  </div>
                                              </div>
                                              <div className="ml-5 mr-5 sm:pt-24 ">
                                                  <h1 className="text-[30px] sm:text-[22px] font-serif text-white mt-10">SAFE AND SECURE</h1>
                                                  <hr className="mt-5 mb-7 text-[#AD9779]" />
                                                  <div>
                                                      <img src={footer1} alt="" className="mb-5" />
                                                      <img src={footer2} alt="" className="mb-5" />
                                                      <img src={footer3} alt="" className="" />
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="bg-[#11192e] w-full">
                                          <p className="pt-5 pb-4 text-white sm:ml-95 ml-5">Copyright 2024 Aemilius Cupero LLC | All Rights Reserved</p>
                                      </div>
                                  </div>

         </>
    );
}

export default Duediligence;