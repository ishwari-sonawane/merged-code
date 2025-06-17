import { FaMedium } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { CgMenuLeftAlt } from "react-icons/cg";
import logo from "./assets/logo.webp"
import {Link} from "react-router-dom"
import Faq from "./Faq.jsx"
import Sidebar from "./Sidebar.jsx"
import Contactus from "./Contactus.jsx"



// import Navbar from './Navbar';
import ptt_area from './assets/ptt_area.webp'; // Ensure the path is correct
import h3_about_bg from './assets/h3_about_bg.webp'; 
import h3_video_bg from './assets/h3_video_bg.webp'; 
import { FaCheckCircle } from "react-icons/fa";
import balance_women from './assets/balance_women.webp'; 
import about_progress_bg from "./assets/about_progress_bg.webp";
import { PiUsersThreeBold } from "react-icons/pi";
import { FaPlay } from 'react-icons/fa';
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoDiamondOutline } from "react-icons/io5";
import React, { useEffect, useState } from 'react'

import { IoLogoMedium } from "react-icons/io5";
import { SiLinkedin } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io5";
import footer1 from "./assets/footer1.webp"
import footer2 from "./assets/footer2.webp"
import footer3 from "./assets/footer3.webp"

import { useMediaQuery } from 'react-responsive';



          const LinearProgressBar = ({ percentage, label }) => {
            const [width, setWidth] = useState(0);

            useEffect(() => {
              const timer = setTimeout(() => {
                setWidth(percentage);
              }, 300); // slight delay for animation
              return () => clearTimeout(timer);
            }, [percentage]);

            return (

              <div className="mb-6 w-full">
                {/* Label and % */}
                <div className="flex justify-between items-center text-white text-sm mb-1">
                  <span>{label}</span>
                  <span>{percentage}%</span>
                </div>

                {/* Track and Animated Fill */}
                <div className="w-full h-2 rounded-full bg-gray-500/30">
                  <div
                    className="h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${width}%`,
                      backgroundColor: "#c0a16b",
                    }}
                  />
                </div>
              </div>
            );
          };
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


function Services( ) {
    useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const CounterCard = ({ end, suffix, label }) => (
  <div>
    <h3 className="text-[40px] leading-[60px] tracking-[1.5px] font-bold text-white font-['Cormorant Infant']">
      <Counter end={end} suffix={suffix} />
    </h3>
    <p className="text-sm font-['Nunito Sans'] text-white mt-2">{label}</p>
  </div>
);


 const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 1368 });
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


{/* page 1 */}
            {/* <div id="pxl-pagetitle">
                      <section
                        className="w-full relative bg-cover bg-center py-20 sm:py-24 lg:py-32"
                        style={{ backgroundImage: `url(${ptt_area})` }}
                      >
                     
                         <div className="absolute inset-0 bg-black/30" />
          
                      
                        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          
                       
                          <div className="mb-6">
                            <div className="flex items-center text-white text-sm backdrop-blur-sm bg-white/10 px-10 py-3 rounded-md w-fit space-x-2 absolute left-320 bottom-20">
                              <a href="/" className="hover:underline pxl-breadcrumb">Home</a>
                              <span className="mx-1">→</span>
                              <a href="/services" className="hover:underline pxl-breadcrumb">Services</a>
                            </div>
                          </div>
          
                        
                          <div className="w-full lg:w-2/3 xl:w-1/2 relative  right-38">
                            <h1 className="text-5xl font-bold text-white  tracking-[-0.025em] mb-[5px] capitalize">Services</h1>
                        <p className="text-base leading-relaxed text-white max-w-2xl uppercase tracking-[0.2em] mt-9">
                              "Our legal services are designed to provide expert guidance and effective representation, ensuring the best possible outcomes for our clients in a wide range of legal matters."
                            </p>
          
                          </div>
                                 
                        </div>
                
                      </section>
                    </div> */}
  
                  {isMobile ? (
  // ✅ Mobile layout
  <div className="w-full h-auto bg-[url('./assets/c1.webp')] bg-cover bg-center flex flex-col items-center px-6 py-20 relative">
    <div className="w-full text-center text-white z-10">
      <h1 className="text-4xl font-serif font-light mb-4">Services</h1>
      <p className="text-[5vw] leading-relaxed uppercase">
        "Our legal services are designed to provide expert guidance <br/>and effective representation, ensuring the best possible<br /> outcomes for our clients in a wide range of legal matters."


      </p>
    </div>
    <div className="mt-10 flex justify-center z-10">
      <nav className="bg-white/30 backdrop-blur-sm px-4 py-3 flex items-center space-x-3">
        <a href="Home" className="text-white font-semibold">Home</a>
        <a href="Services" className="text-[#bb7742] font-medium">Services</a>
      </nav>
    </div>
    <div className="absolute inset-0 bg-black/30"></div>
  </div>
) : (
  // ✅ Desktop layout
  <div className="w-full h-auto bg-[url('./assets/c1.webp')] bg-cover bg-center flex flex-row items-start px-24 py-20 relative">
    <div className="w-2/3 text-left text-white z-10">
      <h1 className="text-6xl font-serif font-light mb-4">Services</h1>
      <p className="text-lg leading-relaxed uppercase">
       "Our legal services are designed to provide expert guidance<br /> and effective representation, ensuring the best possible<br /> outcomes for our clients in a wide range of legal matters."
      </p>
    </div>
    <div className="w-1/3 mt-0 flex justify-end z-10">
      <nav className="bg-white/30 backdrop-blur-sm px-6 py-3 flex items-center space-x-6">
        <a href="Home" className="text-white font-semibold">Home</a>
        <a href="Services" className="text-[#bb7742] font-medium">Services</a>
      </nav>
    </div>
    <div className="absolute inset-0 bg-black/30"></div>
  </div>
)}


{/* page 2 */}
                      {/* <div 
                     className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-5"
                    style={{ backgroundImage: `url(${h3_about_bg})`, 
                   backgroundSize: 'contain', 
                    backgroundRepeat: 'no-repeat' 
                     }} >


                       <div className=" py-16 px-4 sm:px-6 lg:px-8">
                                  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                      
                                    
                                    <div>
                                     
                                      <h1 className="text-lg text-[#a89155] uppercase tracking-wide mb-2">
                                        About Aemilius Cupero
                                      </h1>
                      
                                      
                                        <h2 className="text-[44px] font-semibold text-gray-900 leading-tight 	tracking-[0.06em] mb-4">
                                        We’re Not Just Lawyers, <br /> We’re Advocates For Justice And Right
                                      </h2>
                                    </div>
                      
                                    <div>
                                     
                                      <p className="text-gray-700 text-sm break-words font-normal text-lg mb-6 text-2xl">
                                        Since launching, our firm has grown significantly. Our expanding team includes over 40 lawyers and chartered executives with combined expertise in divorce law, financial law, and more sensitive cases. This enables us to provide the best family law service in the South West and beyond.
                                      </p>
                      
                                    
                                      <ul className="text-gray-700 space-y-4 mt-7">
                                        {[
                                          "Reassuring legal answers",
                                          "We will defend your rights against powerful interests",
                                          "We provide legal services that benefit our clients immediately",
                                        ].map((item, index) => (
                                          <li key={index} className="flex items-start space-x-3">
                                            <FaCheckCircle className="text-[#0a0a0a] mt-1 shrink-0" />
                                            <span>{item}</span>
                                          </li>
                                        ))}
                                      </ul>
                                  </div>
                                </div>
                                <br></br>
                                                        <div className="relative w-full max-w-6xl mx-auto px-6 bg-transparent mt-6">
                                                        <img
                                                          src={h3_video_bg}
                                                          alt="Video Preview"
                                                          className="w-full h-auto rounded-lg bg-transparent"
                                                        />
                                                        
                                                      
                                                        <button className="absolute inset-0 flex items-center justify-center">
                                                                    <a
                                                                      href="https://youtu.be/VW7QV9-T-mo"
                                                                      target="_parent"
                                                                      rel="noopener noreferrer"
                                                                      className="rounded-full p-6 hover:scale-110 transition duration-300 shadow-lg bg-transparent"
                                                                    >
                                                                      <MdOutlinePlayCircleFilled className="h-20 w-20 text-white" />
                                                                    </a>
                                                                  </button>
                                                      </div>
                                                      
                                                    <br></br>
                                                <div className="bg-[#ad9779] py-5">
                                              <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
                                               
                                                <div>
                                                  <h3 className="text-[50px] leading-[80px] tracking-[2.5px] font-bold text-white font-['Cormorant Infant']">
                                                    <Counter end={63} suffix="M+" />
                                                  </h3>
                                                  <p className="text-base font-['Nunito Sans sans-serif'] text-white mt-2">RECOVERED TILL TODAY</p>
                                                </div>
                                             
                                                <div>
                                                  <h3 className="text-[50px] leading-[80px] tracking-[2.5px] font-bold text-white font-['Cormorant Infant']">
                                                    <Counter end={830} suffix="+" />
                                                  </h3>
                                                  <p className="text-base font-['Nunito Sans sans-serif'] text-white mt-2">CASE COMPLETED</p>
                                                </div>
                      
                                               
                                                <div>
                                                  <h3 className="text-[50px] leading-[80px] tracking-[2.5px] font-bold text-white font-['Cormorant Infant']">
                                                    <Counter end={50} suffix="+" />
                                                  </h3>
                                                  <p className="text-base font-['Nunito Sans sans-serif'] text-white mt-2">WORLDWIDE AFFILIATES</p>
                                                </div>
                      
                                             
                                                <div>
                                                  <h3 className="text-[50px] leading-[80px] tracking-[2.5px] font-bold text-white font-['Cormorant Infant']">
                                                    <Counter end={25} suffix="+" />
                                                  </h3>
                                                  <p className="text-base font-['Nunito Sans sans-serif'] text-white mt-2">EXPERIENCED LAWYERS</p>
                                                </div>
                                              </div>
                                            </div>
                      
                                        </div>

                          <div className="py-16 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl font-semibold text-gray-900 leading-tight max-w-4xl mx-auto tracking-[0.04em] uppercase">
          Every Customer When Using Our services Is Done By Us Efficiently And Sincerely
        </h1>
        <p className="mt-6 text-lg text-gray-500 max-w-9xl mx-auto capitalize mt-10">
         

        PowerLegal reputation is built upon years of practical experience in court litigation and arbitration in New York. Over the course of time, we have earned our clients’ trust with our superior 
        services and extended our reach globally. In addition, other successful practices have been established and developed to match our clients’ many requirements such as bankruptcy & restructuring,
        labor & employment, criminal defense, contract law and corporate compliance.
      </p>
      </div>
    </div>

                    <div className="w-30 h-[2px] mx-auto my-4 bg-gradient-to-r from-[#b69a74] via-[#cbb18c] to-[#b69a74]" />

          </div> */}
           {isMobile ? (
        // 👉 Mobile Layout
        <div
          className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-gray-50 p-5"
          style={{
            backgroundImage: `url(${h3_about_bg})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="py-10 px-4">
            <div className="grid grid-cols-1 gap-10">
              <div>
                <h1 className="text-md text-[#a89155] uppercase tracking-widest mb-2">
                  About Aemilius Cupero
                </h1>
                <h2 className="text-4xl font-semibold text-gray-900 leading-snug tracking-wide">
                  We’re Not Just Lawyers,We’re Advocates For Justice And Right
                </h2>
              </div>
              <div>
                <p className="text-gray-700 text-sm font-normal mb-6">
                   Since launching, our firm has grown significantly. Our expanding team includes over 40 <br />lawyers and chartered executives with a 
                  combined expertise in divorce law, financial law and <br/>the more sensitive cases which enables us to provide the best family law 
                  service in the South<br/> West, and beyond.
                </p>
                <ul className="text-gray-700 space-y-4">
                  {[
                    "Reassuring legal answers",
                    "We will defend your rights against powerful interests",
                    "We provide legal services that benefit our clients immediately",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <FaCheckCircle className="text-[#0a0a0a] mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative w-full px-2">
                <img
                  src={h3_video_bg}
                  alt="Video Preview"
                  className="w-full h-auto rounded-lg"
                />
                <button className="absolute inset-0 flex items-center justify-center">
                  <a
                    href="https://youtu.be/VW7QV9-T-mo"
                    target="_parent"
                    rel="noopener noreferrer"
                    className="rounded-full p-4 hover:scale-110 transition duration-300 shadow-lg"
                  >
                    <MdOutlinePlayCircleFilled className="h-16 w-16 text-white" />
                  </a>
                </button>
              </div>
              <div className="bg-[#ad9779] py-6 mt-6">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <CounterCard end={63} suffix="M+" label="RECOVERED TILL TODAY" />
                  <CounterCard end={830} suffix="+" label="CASE COMPLETED" />
                  <CounterCard end={50} suffix="+" label="WORLDWIDE AFFILIATES" />
                  <CounterCard end={25} suffix="+" label="EXPERIENCED LAWYERS" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // 👉 Desktop Layout
        <div
          className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-5"
          style={{
            backgroundImage: `url(${h3_about_bg})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto grid grid-cols-2 gap-12 items-start">
              <div>
                <h1 className="text-lg text-[#a89155] uppercase tracking-wide mb-2">
                  About Aemilius Cupero
                </h1>
                <h2 className="text-[44px] font-semibold text-gray-900 leading-tight tracking-[0.06em] mb-4">
                  We’re Not Just Lawyers, <br /> We’re Advocates For Justice And Right
                </h2>
              </div>
              <div>
                <p className="text-gray-700 text-2xl font-normal mb-6">
                  Since launching, our firm has grown significantly. Our expanding team includes over 40 <br />lawyers and chartered executives with a 
                  combined expertise in divorce law, financial law and <br/>the more sensitive cases which enables us to provide the best family law 
                  service in the South<br/> West, and beyond.
                </p>
                <ul className="text-gray-700 space-y-4 mt-7">
                  {[
                    "Reassuring legal answers",
                    "We will defend your rights against powerful interests",
                    "We provide legal services that benefit our clients immediately",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <FaCheckCircle className="text-[#0a0a0a] mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative w-full max-w-6xl mx-auto px-6 bg-transparent mt-10">
              <img
                src={h3_video_bg}
                alt="Video Preview"
                className="w-full h-auto rounded-lg bg-transparent"
              />
              <button className="absolute inset-0 flex items-center justify-center">
                <a
                  href="https://youtu.be/VW7QV9-T-mo"
                  target="_parent"
                  rel="noopener noreferrer"
                  className="rounded-full p-6 hover:scale-110 transition duration-300 shadow-lg bg-transparent"
                >
                  <MdOutlinePlayCircleFilled className="h-20 w-20 text-white" />
                </a>
              </button>
            </div>

            <div className="bg-[#ad9779] py-5 mt-6">
              <div className="max-w-6xl mx-auto grid grid-cols-4 gap-8 text-center">
                <CounterCard end={63} suffix="M+" label="RECOVERED TILL TODAY" />
                <CounterCard end={830} suffix="+" label="CASE COMPLETED" />
                <CounterCard end={50} suffix="+" label="WORLDWIDE AFFILIATES" />
                <CounterCard end={25} suffix="+" label="EXPERIENCED LAWYERS" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Common to both views */}
      <div className="py-16 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl font-semibold text-gray-900 leading-tight max-w-4xl mx-auto tracking-[0.06em] uppercase">
            Every Customer When Using Our services Is Done By Us Efficiently And Sincerely
          </h1>
          <p className="mt-10 text-sm text-gray-500 capitalize leading-6">
           PowerLegal reputation is built upon years of practical experience in court litigation and arbitration in New York. Over the course of 
           time, we have earned our clients’ trust with our superior services and extended our reach globally. In addition, other successful
            practices have been established and developed to match our clients’ many requirements such as bankruptcy & restructuring, labor & 
            employment, criminal defense, contract law and corporate compliance.
          </p>
        </div>
        <div className="w-30 h-[1px] mx-auto my-4 bg-gradient-to-r from-[#b69a74] via-[#cbb18c] to-[#b69a74] mt-12" />
      </div>


               {/* <div className= "text-white py-16 px-8 bg-cover h-210 bg-center relative bg-[#0e1a35] text-white"
                          style={{ backgroundImage: `url(${about_progress_bg})` }}> 
              
                          <div className="relative z-10 max-w-7xl mx-auto px-6 py-2 grid grid-cols-1 md:grid-cols-2 gap-15 items-center">
                          
                            <div>
                              <p className="text-sm tracking-widest text-[#c0a16b] mb-2">WHY CHOOSE US</p>
                              <h2 className="text-4xl font-bold leading-snug mb-6">
                                Your Trusted Partner<br />in Legal Solutions
                              </h2>
                              <p className="text-gray-300 mb-8 text-lg leading-relaxed text-gray-300">
                                At our law firm, we pride ourselves on being your trusted partner in <br></br>legal solutions.
                                With years of expertise and a commitment to <br></br>excellence, we offer tailored legal
                                services that address your unique<br></br> needs. Whether you're navigating complex legal
                                challenges or <br></br>seeking straightforward advice, our team is dedicated to providing<br></br>
                                reliable, effective, and results-driven representation. Your peace of <br></br>mind and success
                                are our top priorities, and we’re here to guide you <br></br>every step of the way.
                              </p>
                            </div>


                              
                                          <div className="flex flex-col justify-center space-y-6">
                                            <div className="flex items-center justify-center w-20 h-20 shadow-lg border-2 border-[#c0a16b] cursor-pointer 
                                                            transition-transform duration-300 group-hover:animate-zoom  absolute top-8 right-125">
                                              <PiUsersThreeBold className="text-[#c0a16b] w-10 h-10 group-hover:animate-zoom " />
                                            </div>
                            
                                          <div className="py-10 px-4 sm:px-8">
                                        <div className="max-w-2xl mx-auto">
                                          <LinearProgressBar label="Case Success Rate" percentage={85} />
                                          <LinearProgressBar label="Client Satisfaction" percentage={93} />
                                          <LinearProgressBar label="Compliance with Deadlines" percentage={95} />
                                        </div>
                                      </div>
                                          </div>
                                        </div>


                    
          

            <div className="max-w-7xl mx-auto box-border grid md:grid-cols-3 gap-6 mt-30 bg-white text-black p-8 rounded shadow-lg h-80 ">
              <div className="text-center px-4">
                <div className="text-[#b49c73] mb-4">
                <svg className="w-14 h-14 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6l2 4h4l-2 4 2 4h-4l-2 4-2-4H6l2-4-2-4h4l2-4z" />
                </svg>
              </div>
              <h4 className="text-xl font-serif font-medium mb-3">Ethical Standards</h4>
              <p className="text-gray-600 text-base leading-relaxed">
                A law firm that operates with integrity and adheres to high ethical standards earns respect and trust from clients, peers, and the community.
              </p>
            </div>


            <div className="text-center px-6  border-b-gray-50 border-l-1 h-50 scheme-light">
              <div className="text-[#b49c73] mb-4">
                <svg className="w-14 h-14 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 118 0v2m-8 0H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4m-8 0v2a2 2 0 104 0v-2" />
                </svg>
              </div>
              <h4 className="text-xl font-serif font-medium mb-3">Proven Track Record</h4>
              <p className="text-gray-600 text-base leading-relaxed">
                A history of successfully handled cases and satisfied clients demonstrates reliability and the firm’s ability to deliver results.
              </p>
            </div>


 
            <div className="text-center px-6  border-b-gray-50 border-l-1 h-50">
              <div className="text-[#b49c73] mb-">
                <svg className="w-14 h-14 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 16h8M8 12h8M8 8h8M5 6h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />
                </svg>
              </div>
              <h4 className="text-xl font-serif font-medium mb-3">Personalized Attention</h4>
              <p className="text-gray-600 text-base leading-relaxed">
                Treating each case with individual care, rather than a one-size-fits-all approach, ensures that clients feel valued and understood.
              </p>
            </div>
              
          </div>
          </div>  */}

          {/* sidebar */}
                <Sidebar />

           {isMobile ? (
        // ----------- 📱 MOBILE VIEW -----------
        <div className="text-white py-10 px-4 bg-[#0e1a35] h-150 w-290" style={{ backgroundImage: `url(${about_progress_bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="gap-10">
            <div className="flex flex-row">
              <div>
              <p className="text-lg tracking-widest ml-10  text-[#c0a16b] mb-2">WHY CHOOSE US</p>
              <h2 className="text-4xl font-bold mb-4 ml-10 tracking-widest">Your Trusted Partner in Legal Solutions</h2>
              <p className="text-gray-300 text-lg w-120 ml-10 leading-relaxed">
               At our law firm, we pride ourselves on being your trusted partner in legal solutions. With years of expertise and a commitment to 
               excellence, we offer tailored legal services that address your unique needs. Whether you’re navigating complex legal challenges or
                seeking straightforward advice, our team is dedicated to providing reliable, effective, and results-driven representation. Your 
                peace of mind and success are our top priorities, and we’re here to guide you every step of the way.
              </p>
            </div>

            <div className="space-y-6 ml-10 w-150 mt-50">
              <LinearProgressBar label="Case Success Rate" percentage={85} />
              <LinearProgressBar label="Client Satisfaction" percentage={93} />
              <LinearProgressBar label="Compliance with Deadlines" percentage={95} />
            </div>
            </div>
            <div className="flex flex-row h-60 text-black absolute mt-10 w-250 ml-10 ">
              {/* Cards */}
              {[{
                title: "Ethical Standards",
                text: "A law firm that operates with integrity and adheres to high ethical standards earns respect and trust from clients, peers, and the community.",
              }, {
                title: "Proven Track Record",
                text: "A history of successfully handled cases and satisfied clients demonstrates reliability and the firm’s ability to deliver results.",
              }, {
                title: "Personalized Attention",
                text: "Treating each case with individual care, rather than a one-size-fits-all approach, ensures that clients feel valued and understood.",
              }].map((card, i) => (
                <div key={i} className="bg-white p-6 rounded shadow-lg text-center">
                  <h4 className="text-lg font-medium mb-2">{card.title}</h4>
                  <p className="text-gray-600 text-sm">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
      </div>
      ) : (
        // ----------- 💻 DESKTOP VIEW -----------
        <div className="text-white py-16 px-8 bg-cover bg-center h-160 relative bg-[#0e1a35]" style={{ backgroundImage: `url(${about_progress_bg})` }}>
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-2 grid grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm tracking-widest text-[#c0a16b] mb-1">WHY CHOOSE US</p>
              <h2 className="text-4xl font-bold leading-snug mb-6">Your Trusted Partner<br />in Legal Solutions</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                At our law firm, we pride ourselves on being your trusted partner in legal solutions. With years of expertise and a commitment to excellence, we offer tailored legal services that address your unique needs. Whether you're navigating complex legal challenges or seeking straightforward advice, our team is dedicated to providing reliable, effective, and results-driven representation.
              </p>
            </div>

            <div className="flex flex-col justify-center space-y-6">
              <div className="flex items-center justify-center w-20 h-20 shadow-lg border-2 border-[#c0a16b] absolute top-8 left-175">
                <PiUsersThreeBold className="text-[#c0a16b] w-10 h-10 " />
              </div>
              <div className="py-10 px-4 sm:px-8 max-w-2xl mx-auto w-200 mt-30">
                <LinearProgressBar label="Case Success Rate" percentage={85} />
                <LinearProgressBar label="Client Satisfaction" percentage={93} />
                <LinearProgressBar label="Compliance with Deadlines" percentage={95} />
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-3 gap-6 bg-white text-black p-8 absolute mt-20 ml-25">
            {[
              {
                title: "Ethical Standards",
                text: "A law firm that operates with integrity and adheres to high ethical standards earns respect and trust from clients.",
              },
              {
                title: "Proven Track Record",
                text: "A history of successfully handled cases and satisfied clients demonstrates reliability.",
              },
              {
                title: "Personalized Attention",
                text: "Treating each case with individual care ensures clients feel valued and understood.",
              },
            ].map((item, i) => (
              <div key={i} className="text-center px-6">
                <div className="text-[#b49c73] mb-4">
                  <svg className="w-14 h-14 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16h8M8 12h8M8 8h8M5 6h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-serif font-medium mb-3">{item.title}</h4>
                <p className="text-gray-600 text-base leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}

{/* 
  <section className="bg-white text-center py-16 px-4 mt-30">
                <div className="max-w-3xl mx-auto">
                 
                  <p className="text-sm uppercase tracking-widest text-[#b19777] mb-2">Testimonials</p>

                  
                  <h2 className="text-3xl md:text-4xl font-semibold text-[#0d1220] mb-6">
                    What Clients Say About Us?
                  </h2>

                  <div className="text-4xl text-[#b19777] mb-4">”</div>

                  
                  <p className="text-[#0d1220] md:text-lg text-lg leading-relaxed mb-10 px-0">
                    "I am very happy with the service I received from Aemilius Cupero. They helped me recover my money back and I would recommend them to anyone who is looking to recover their funds."
                  </p>

                      <div className="flex flex-col items-center">
                    <img
                      src="https://www.aemilius-cupero.com/wp-content/uploads/2025/01/Edgar-Baker.webp"
                      alt="client"
                      className="w-16 h-16 rounded-full border-2 border-gray-300 border-[#b19777] mb-4"
                    />
                   
                    <div className="flex space-x-1 mb-2 text-[#b19777]">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09L5.64 12.545.763 8.91l6.37-.927L10 2l2.867 5.983 6.37.927-4.877 3.636 1.518 5.545z" />
                        </svg>
                      ))}
                    </div>
                    <h3 className="font-bold text-[#0d1220] tracking-widest">MR. EDGAR BAKER</h3>
                    <p className="text-gray-500 text-sm">Scotland</p>
                  </div>

                 
                  <div className="flex justify-center items-center space-x-2 mt-8">
                  {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className={`h-1 w-5 rounded-full ${
                    i === 0 ? 'bg-gray-800' : 'bg-gray-300'
                  }`}
                ></span>
              ))}
            </div>
            </div>
              </section> */}
              
              {/* slider page */}
              {isMobile ? (
        // ----------- 📱 MOBILE VIEW -----------
        <section className="bg-white text-center py-12 px-4 mt-20">
          <div className="max-w-md mx-auto">
            <p className="text-xs uppercase tracking-widest text-[#b19777] mb-2">Testimonials</p>
            <h2 className="text-2xl font-semibold text-[#0d1220] mb-4">
              What Clients Say About Us?
            </h2>

            <div className="text-4xl text-[#b19777] mb-3">”</div>

            <p className="text-[#0d1220] text-base leading-relaxed mb-8">
              "I am very happy with the service I received from Aemilius Cupero. They helped me recover my money back and I would recommend them to anyone who is looking to recover their funds."
            </p>

            <div className="flex flex-col items-center">
              <img
                src="https://www.aemilius-cupero.com/wp-content/uploads/2025/01/Edgar-Baker.webp"
                alt="client"
                className="w-14 h-14 rounded-full border-2 border-[#b19777] mb-4"
              />

              <div className="flex space-x-1 mb-2 text-[#b19777]">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09L5.64 12.545.763 8.91l6.37-.927L10 2l2.867 5.983 6.37.927-4.877 3.636 1.518 5.545z" />
                  </svg>
                ))}
              </div>

              <h3 className="font-bold text-[#0d1220] text-sm tracking-wide">MR. EDGAR BAKER</h3>
              <p className="text-gray-500 text-xs">Scotland</p>
            </div>

            <div className="flex justify-center items-center space-x-2 mt-6">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className={`h-1.5 w-4 rounded-full ${
                    i === 0 ? 'bg-gray-800' : 'bg-gray-300'
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </section>
      ) : (
        // ----------- 💻 DESKTOP VIEW -----------
        <section className="bg-white text-center py-16 px-4 mt-30">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm uppercase tracking-widest text-[#b19777] mb-2">Testimonials</p>
            <h2 className="text-4xl font-semibold text-[#0d1220] mb-6">
              What Clients Say About Us?
            </h2>

            <div className="text-5xl text-[#b19777] mb-4">”</div>

            <p className="text-[#0d1220] text-lg leading-relaxed mb-10">
              "I am very happy with the service I received from Aemilius Cupero. They helped me recover my money back and I would recommend them to anyone who is looking to recover their funds."
            </p>

            <div className="flex flex-col items-center">
              <img
                src="https://www.aemilius-cupero.com/wp-content/uploads/2025/01/Edgar-Baker.webp"
                alt="client"
                className="w-16 h-16 rounded-full border-2 border-[#b19777] mb-4"
              />

              <div className="flex space-x-1 mb-2 text-[#b19777]">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09L5.64 12.545.763 8.91l6.37-.927L10 2l2.867 5.983 6.37.927-4.877 3.636 1.518 5.545z" />
                  </svg>
                ))}
              </div>

              <h3 className="font-bold text-[#0d1220] tracking-widest">MR. EDGAR BAKER</h3>
              <p className="text-gray-500 text-sm">Scotland</p>
            </div>

            <div className="flex justify-center items-center space-x-2 mt-8">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className={`h-1 w-5 rounded-full ${
                    i === 0 ? 'bg-gray-800' : 'bg-gray-300'
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </section>
      )}


        {isMobile ? (
        // -------- 📱 MOBILE VIEW --------
        <section className="relative w-full bg-white py-12 px-4">
          <div className="relative z-10">
            <h1 className="font-serif text-3xl font-semibold text-[#0d1220] mb-6 text-center">
              Get a Free Consultation!
            </h1>

            <p className="text-[#0d1220] text-base leading-relaxed mb-8 text-center">
              We offer a free consultation with no obligation. Get expert legal advice and
              understand your options without any pressure or cost. Contact us today to get started!
            </p>

            <img
              src={balance_women}
              alt="Balanced Woman"
              className="w-full h-auto object-contain mb-10"
            />

            <div className="bg-[#171b3a] text-white px-6 py-10 rounded-lg">
              <h3 className="text-center mb-4 tracking-widest">UNITED STATES</h3>
              <p className="text-center text-base leading-relaxed mb-4">
                1309 Coffeen Avenue STE 1200 Sheridan,<br />
                Wyoming 82801 USA
              </p>
              <hr className="border-gray-600 mb-4" />

              <h5 className="text-center text-base leading-relaxed mb-4">HONG KONG</h5>
              <p className="text-center text-base leading-relaxed mb-4">
                Lippo Centre, 89 Queensway, Admiralty, Hong Kong
              </p>
              <hr className="border-gray-600 mb-4" />

              <p className="text-base leading-relaxed mb-4 text-center">
                We will respond within 24 hours via email, or call us directly. We’re here to help!
              </p>

              <div className="flex justify-center items-center space-x-2 text-[#b19777]">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M2.003 5.884l3.311-.35a1 1 0 01.98.45l2.121 3.182a1 1 0 01-.217 1.365l-1.475 1.058a11.037 11.037 0 005.016 5.016l1.058-1.475a1 1 0 011.365-.217l3.182 2.121a1 1 0 01.45.98l-.35 3.311a1 1 0 01-.986.879C5.633 23.99.01 18.368.01 11.988a1 1 0 01.879-.986z" />
                </svg>
                <a href="tel:+1307223040" className="hover:underline text-base">+1 (307) 223-040</a>
              </div>
            </div>
          </div>
        </section>
      ) : (
        // -------- 💻 DESKTOP VIEW --------
        <section className="relative w-full overflow-hidden h-[950px]">
          <div className="absolute inset-0 hidden md:grid grid-cols-2 z-0">
            <div
              className="absolute inset-0 bg-cover bg-center grayscale"
              style={{ backgroundImage: `url(${h3_about_bg})` }}
            />
          </div>

          <div className="relative sm:absolute sm:top-0 sm:right-0">
            <img
              src={balance_women}
              alt="Balanced Woman"
              className="md:w-[610px] md:h-[850px] object-contain"
            />
            <div className="absolute inset-0 bg-white opacity-10" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20 grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-7 text-[#0d1220]">
              <h1 className="font-serif text-5xl font-semibold mb-6">
                Get a Free Consultation!
              </h1>
              <p className="max-w-lg mb-10 leading-relaxed">
                We offer a free consultation with no obligation. Get expert legal
                advice and understand your options without any pressure or cost.
                Contact us today to get started!
              </p>
            </div>

            <div className="md:col-span-5 flex md:justify-end">
              <div className="bg-[#171b3a] text-white px-8 py-12 w-[380px] h-[660px]">
                <h3 className="text-center mb-6 tracking-widest">UNITED STATES</h3>
                <p className="text-center text-lg leading-relaxed mb-6">
                  1309 Coffeen Avenue STE 1200 Sheridan,<br />
                  Wyoming 82801 USA
                </p>
                <hr className="border-gray-600 mb-6" />
                <h5 className="text-center text-lg leading-relaxed mb-6">HONG KONG</h5>
                <p className="text-center text-lg leading-relaxed mb-6">
                  Lippo Centre, 89 Queensway, Admiralty, Hong Kong
                </p>
                <hr className="border-gray-600 mb-6" />
                <p className="text-lg leading-relaxed mb-4">
                  We will respond to your inquiry within 24 hours via email, or feel
                  free to call us directly. We’re always here to assist you. Thank you!
                </p>
                <div className="flex items-center justify-center space-x-2 mt-4 text-[#b19777]">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M2.003 5.884l3.311-.35a1 1 0 01.98.45l2.121 3.182a1 1 0 01-.217 1.365l-1.475 1.058a11.037 11.037 0 005.016 5.016l1.058-1.475a1 1 0 011.365-.217l3.182 2.121a1 1 0 01.45.98l-.35 3.311a1 1 0 01-.986.879C5.633 23.99.01 18.368.01 11.988a1 1 0 01.879-.986z" />
                  </svg>
                  <a href="tel:+1307223040" className="hover:underline text-lg">+1 (307) 223-040</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}


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

export default Services;