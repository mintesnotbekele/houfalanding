"use client";
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import logo from './assets/Logo.png';
import Image from 'next/image';
import "./assets/css/home.css";
import googlePlay from "./assets/GooglePlay.png";
import appStore from "./assets/AppStore.png";
import hero from "./assets/hero.png";
import meta from "./assets/meta.svg";
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
import Footer from './components/Footer';

export default function Home() {


  const [navbar, setNavbar] = useState(false);
  return (
    <div style={{background: 'white'}}>

      
      <div style={{backgroundImage: 'linear-gradient(to bottom right, #FFFFFF33, #652D8D33)'}}>
      <Head>
        <title>Houfa Web</title>
        <meta
          name="description"
          
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="w-full shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-0">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
             
                <div className="w:1/4 mx-auto text-white font-bold">
                <Image
                  src={logo}
                  alt="Logo"
                  
                  width={100}
                  height={24}
                  priority
                />
                  </div>
              
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
      <div className="mx-auto lg:py-20 lg:max-w-7xl md:px-0">
      <div className="flex justify-center items-center">
      <Image
              className='px-4'
              src={hero}
                  alt="Logo"  
                />
</div>
  
      <div className='mx-auto sm:flex md:flex justify-center py-10'>
                        
                <div className="font-extrabold [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
                   <span className=" inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
                <ul className="block animate-text-slide-4 text-left leading-tight [&_li]:block">
                         <li className='font-[1100] sm:text-center' style={{textAlign:'center', fontSize: '40px', color: '#773F9F', fontFamily: 'poppins'}}>Be part of the community</li>
                        <li className='font-[1100] sm:text-center' style={{textAlign:'center', fontSize: '40px', color: '#773F9F',  fontFamily: 'poppins'}}>Be Safe</li>
                        <li  className='font-[1100] sm:text-center' style={{textAlign:'center',fontSize: '40px', color: '#773F9F', fontFamily: 'poppins'}}>Be Informed</li>
                        <li   className='font-[1100] sm:text-center' style={{textAlign:'center',fontSize: '40px', color: '#773F9F', fontFamily: 'poppins'}}>Be Involved</li>
                        <li   className='font-[1100] sm:text-center' style={{textAlign:'center', fontSize: '40px', color: '#773F9F', fontFamily: 'poppins'}}>Be part of the community</li>       
                    </ul>
                </span></div>
            
                       
                  
            
            </div>
            <div  className='mx-auto md:flex sm:flex justify-center'>
                        <p style={{fontSize: '40px', color: '#773F9F', fontWeight: 'bold', textAlign: 'center'}}>Coming Soon</p>
                      </div>
            <div  className='mx-auto md:flex justify-center'>
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
      </div>
      <div style={{background:  '#652D8D'}} className='py-24'>

      <div  className='mx-auto md:flex justify-center'>
      <div  className='md:w-1/2 p-5'>



      <div style={{color: 'white'}} className='sm-24 trustedbyHeader mx-auto justify-center flex ' >
      Join  Us in Metaverse
      </div>
      <div className='m-auto ' style={{color: 'white', textAlign: 'center'}}>Create your Own Metaverse</div>
      <div className="my-10 md:w-1/2 mx-auto">
                          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Username"/>
                        </div>
                        <div className="my-10 md:w-1/2 mx-auto">
                          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Email"/>
                        </div>
      <div className="max-auto flex justify-center  my-10">
      <button className="bg-white text-violet-800 font-bold py-2 px-10 rounded-full" style={{background: '773F9F'}}>
                            Send 
                          </button>
                            </div>
                            </div>
                            <div className='sm-24 mx-auto md:w-1/2 justify-start flex p-5'>
       <Image
              className="mx-10"
              src={meta}
                  alt="Logo"  
                />
        
       </div>
       </div>
      </div>
      <div className='sm-24 trustedbyHeader mx-auto justify-center flex my-20' >Trusted By</div>
      <div className='mx-auto justify-center flex flex-wrap my-10'>
       <Image
              className="md:mx-10"
              src={logo1}
                  alt="Logo"  
                />
         <Image
              className="md:mx-10"
              src={logo2}
                  alt="Logo"  
                />
           <Image
              className="md:mx-10"
              src={logo3}
                  alt="Logo"  
                />
             <Image
              className="md:mx-10"
              src={logo4}
                  alt="Logo"  
                />
       </div>
       <div className='mx-auto justify-center flex flex-wrap my-10'>
       <Image
              className="md:mx-10"
              src={logo5}
                  alt="Logo"  
                />
         <Image
              className="md:mx-10"
              src={logo6}
                  alt="Logo"  
                />
        
       </div>
      <div style={{background: '#F9F1FF', }} className='py-12'>
       <div  className='sm-24 trustedbyHeader mx-auto justify-center flex my-10' >About us </div>
       <div className='sm-24 md-12 mx-auto justify-center flex my-20 md:w-1/3 sm:w-1/4  text-center p-5 '>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
       </div>
       </div>
       <div>
       <div className='trustedbyHeader mx-auto justify-center flex my-20'>Features</div>
       <div className="md:flex my-3">
      
       <div className='flex sm:justify-center md:justify-end md:w-1/2  sm:items-center'>
       <Image
              className="mx-10"
              src={featuresframe}
                  alt="Logo"  
                />
        
       </div>
       <div  className='md:w-1/2 p-5'>
        <div className='sm-24 mx-auto my-10 reportTitle flex pt-24'>Report Situation</div>
        <div className=' justify-left md:w-3/4 flex my-1 sm-w-1 text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
       </div>
        
        </div>

        <div className="my-3 md:flex">
     
       <div  className='md:w-1/2 p-5' >
        <div className='md:flex justify-end'>
        <div className=' md:w-1/2 align-right mx-auto reportTitle pt-32' >Report Situation Receive  and Verify notifications</div>
        </div>
        <div className='md:flex justify-end'>
        <div className='md:w-3/4 justify-right items-end flex my-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div>
       </div>
        
       <div className='sm-24 mx-auto md:w-1/2 justify-start flex p-5'>
       <Image
              className="mx-10"
              src={featuresframe1}
                  alt="Logo"  
                />
        
       </div>

        </div>

        <div className="my-3 md:flex">
       <div className='sm-24 mx-auto md:w-1/2 justify-end flex p-5'>
       <Image
              className="mx-10"
              src={featuresframe2}
                  alt="Logo"  
                />
        
       </div>
       <div className='md:w-1/2 p-5' >
        <div className='reportTitle md:flex pt-32 w-1/2 mx-flex'>SOS </div>
        <div className='justify-left md:flex my-1 md:w-3/4 text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
       </div>
        
        </div>
       
       </div>

       <div style={{background:  '#652D8D'}} className='py-24'>

<div  className='mx-auto md:flex justify-center'>
<div  className='md:w-1/2 p-5'>



<div style={{color: 'white'}} className='sm-24 trustedbyHeader mx-auto justify-center flex ' >
              Subscribe for Updates
</div>
<div className='m-auto ' style={{color: 'white', textAlign: 'center'}}>Create your Own Metaverse avatar</div>
<div className="my-10 md:w-1/2 mx-auto">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Username"/>
                  </div>
                  <div className="my-10 md:w-1/2 mx-auto">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Email"/>
                  </div>
                  <div className="my-10 md:w-1/2 mx-auto">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="Country"/>
                  </div>
                  <div className="my-10 md:w-1/2 mx-auto">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value="+234"/>
                  </div>
<div className="max-auto flex justify-center  my-10">
                  <button className="bg-white m-auto font-bold py-2 px-4 rounded-full" style={{background: '773F9F'}}>
                      Subcribe 
                    </button>
                      </div>
                      </div>
                  
 </div>
</div>
        <Footer/>
        <div className="my-3 md:flex   justify-center py-20">
        <div className='md:px-20 sm:px-10'>© copyright Houfa. all rights reserved.</div>
        <div className='md:px-20 sm:px-0 hidden md:flex  justify-evenly w-1/2'>
          <p>Home </p>
          <p>About Us </p>
          <p> <Link href={'/privacy'} className='hover:text-blue-500'>Privacy Policy</Link></p>
                    <p> <Link href={'/terms'} className='hover:text-blue-500'>Terms & Condition</Link></p></div>
       </div>
    </div>
  );
}