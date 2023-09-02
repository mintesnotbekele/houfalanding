"use client";
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import logo from './assets/Logo.png';
import Image from 'next/image';
import "./assets/css/home.css";
import googlePlay from "./assets/GooglePlay.png";
import appStore from "./assets/AppStore.png";
import warning from "./assets/warining.png";
import bannertext from "./assets/bannertext.png";
import logo1 from "./assets/synverselogo.png";
import logo2 from "./assets/scaleoutlogo.png";
import logo3 from "./assets/astrocastlogo.png";
import logo4 from "./assets/cradlepointlogo.png";
import logo5 from "./assets/plantirlogo.png";
import logo6 from "./assets/faircomlogo.png";
import loocationimage from "./assets/location.png";
import mailimage from "./assets/mail.png";
import phoneimage from "./assets/phone.png";
import featuresframe from "./assets/featuresframe1.png"; 
import featuresframe1 from "./assets/featuresfraame1.png";
import featuresframe2 from "./assets/featuresframe2.png";

export default function Home() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div style={{background: 'white'}}>
      <div style={{backgroundImage: 'linear-gradient(to bottom right, #FFFFFF33, #652D8D33)'}}>
      <Head>
        <title>Houfa Web</title>
        <meta
          name="description"
          content="Create Next JS Responsive Menu with Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="w-full shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-0">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
             
                <h2 className="text-2xl text-white font-bold">
                <Image
                  src={logo}
                  alt="Logo"
                  width={100}
                  height={24}
                  priority
                />
                  </h2>
              
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-black">
                  <Link href="/">
                    Home
                  </Link>
                </li>
                <li className="text-black">
                  <Link href="/blogs">
                    About Us
                  </Link>
                </li>
                <li className="text-black">
                  <Link href="/about">
                    Features
                  </Link>
                </li>
                <li className="text-black">
                  <Link href="/contact">
                     Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="mx-auto lg:py-40 lg:max-w-7xl md:px-0">
      <div className="columns-2 ">
                <div className='w-full'>            
                  <Image
                       className='py-8'
                        src={bannertext}
                        alt="Logo"
                    />
                        <div className='mx-auto md:flex'>
                        <Image
                                className='px-4'
                                src={googlePlay}
                                alt="Logo"
                              />

                        <Image
                            className='px-4'
                            src={appStore}
                                alt="Logo"  
                              />
                      </div>
                  </div>
              <div className='w-3/4'>
                  <Image
              className='px-4'
              src={warning}
                  alt="Logo"  
                />
                  </div>
            </div>
      </div>
      </div>
      <div className='trustedbyHeader mx-auto justify-center flex my-20' >Trusted By</div>
      <div className='mx-auto justify-center flex my-10'>
       <Image
              className="mx-10"
              src={logo1}
                  alt="Logo"  
                />
         <Image
              className="mx-10"
              src={logo2}
                  alt="Logo"  
                />
           <Image
              className="mx-10"
              src={logo3}
                  alt="Logo"  
                />
             <Image
              className="mx-10"
              src={logo4}
                  alt="Logo"  
                />
       </div>
       <div className='mx-auto justify-center flex my-10'>
       <Image
              className="mx-10"
              src={logo5}
                  alt="Logo"  
                />
         <Image
              className="mx-10"
              src={logo6}
                  alt="Logo"  
                />
        
       </div>
      <div style={{background: '#F9F1FF', }} className='py-12'>
       <div className='trustedbyHeader mx-auto justify-center flex my-10' >About us </div>
       <div className='mx-auto justify-center flex my-20 w-1/3 text-center  '>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
       </div>
       </div>
       <div>
       <div className='trustedbyHeader mx-auto justify-center flex my-20'>Features</div>
       <div className="columns-2 my-3">
       <div className='mx-auto justify-end flex p-10'>
       <Image
              className="mx-10"
              src={featuresframe}
                  alt="Logo"  
                />
        
       </div>
       <div >
        <div className='reportTitle flex pt-24'>Report Situation</div>
        <div className='justify-left flex my-1 w-1/2 text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
       </div>
        
        </div>

        <div className="columns-2 my-3">
     
       <div  className='items-end ml-64 pl-10  ' >
        
        <div className='reportTitle flex pt-32' >Report Situation Receive  and Verify notifications</div>
        <div className='justify-left flex my-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        
       </div>
        
       <div className='mx-auto justify-start flex p-10'>
       <Image
              className="mx-10"
              src={featuresframe1}
                  alt="Logo"  
                />
        
       </div>

        </div>

        <div className="columns-2 my-3">
       <div className='mx-auto justify-end flex'>
       <Image
              className="mx-10"
              src={featuresframe2}
                  alt="Logo"  
                />
        
       </div>
       <div >
        <div className='reportTitle flex pt-32'>SOS </div>
        <div className='justify-left flex my-1 w-1/2 text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
       </div>
        
        </div>
       
       </div>


       <div style={{background: '#F3FAFF'}}>
              <div className='columns-2'>
                <div className='mx-auto justify-center flex'>
                  <div>
                    <div className='m-10'>  
                CONTACT US
                
                </div>
                    <div className='m-10'>
                    <p> <Image
                    className='mx-10'
                  style={{display: 'inline'}}
                  src={loocationimage}
                  alt="Logo"
                />  1 Smith St, Lagos Island 102273, Lagos, Nigeria </p>
                </div>
                    <div className='m-10'>
                    <p> <Image
                    className='mx-10'
                  style={{display: 'inline'}}
                  src={mailimage}
                  alt="Logo"
                />  Info@Houfa.com</p>
                </div>
                    <div className='m-10'>
                    <p> <Image
                  style={{display: 'inline'}}
                  className='mx-10'
                  src={phoneimage}
                  alt="Logo"
                />  +2519110876555</p></div>
                    </div>
                </div>
                <div>
                <div className='m-10'></div>
                    <div> 
                    <div className="md:w-2/3 mt-10">
                          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" style={{visibility: 'hidden'}} id="inline-full-name" type="text" value="Name"/>
                        </div>
                    <div className="md:w-2/3 my-10">
                          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Name"/>
                        </div>
                        <div className="md:w-2/3 my-10">
                          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Email"/>
                        </div>
                        <div className="md:w-2/3 my-10">
                          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Subject"/>

                        </div>
                        <div className="md:w-2/3 my-10">
                          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 "  id="inline-full-name" type="text" value="Message"/>
                        </div>
                        <div className="max-auto flex justify-center md:w-2/3 my-10">
                        <button className="bg-violet-800 text-white font-bold py-2 px-4 rounded-full" style={{background: '773F9F'}}>
                            Send 
                          </button>
                            </div>
                    </div>
                </div>
              </div>
       </div>
    </div>
  );
}