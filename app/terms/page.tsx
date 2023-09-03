"use client";

import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/Logo.png';
import logo6 from "./assets/faircomlogo.png";
import loocationimage from "../assets/location.png";
import mailimage from "../assets/mail.png";
import phoneimage from "../assets/phone.png";
import { useState } from 'react';

export default function Page() {

    const [navbar, setNavbar] = useState(false);
    return <div>
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

      {/* privact policy */}

      <div >
      <div className=" px-4 mx-auto lg:max-w-7xl md:items-center  md:px-0">
     <h1 className='mb-4 my-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl' >Terms & Conditions</h1>
   
           <p> By downloading or using the app, these terms will automatically apply to you – you should make sure therefore that you read them carefully before using the app. You’re not allowed to copy or modify the app, any part of the app, or our trademarks in any way. You’re not allowed to attempt to extract the source code of the app, and you also shouldn’t try to translate the app into other languages or make derivative versions. The app itself, and all the trademarks, copyright, database rights, and other intellectual property rights related to it, still belong to Elnet Technologies.</p>
            <p>
            Elnet Technologies is committed to ensuring that the app is as useful and efficient as possible. For that reason, we reserve the right to make changes to the app or to charge for its services, at any time and for any reason. We will never charge you for the app or its services without making it very clear to you exactly what you’re paying for.
          </p>
            <p>
            The Houfa app stores and processes personal data that you have provided to us, to provide our Service. It’s your responsibility to keep your phone and access to the app secure. We therefore recommend that you do not jailbreak or root your phone, which is the process of removing software restrictions and limitations imposed by the official operating system of your device. It could make your phone vulnerable to malware/viruses/malicious programs, compromise your phone’s security features and it could mean that the Houfa app won’t work properly or at all.  </p>
            
            <p>
            The app does use third-party services that declare their Terms and Conditions.

             </p>
            <p>
           
              Link to Terms and Conditions of third-party service providers used by the app
             </p>
            <p>
            Link to the privacy policy of third-party service providers used by the app
            </p>
              <h1 className='mb-4 my-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl'>
              &#x2022; Google Play Services
            </h1>
           
            <p>
            If you’re using the app outside of an area with Wi-Fi, you should remember that the terms of the agreement with your mobile network provider will still apply. As a result, you may be charged by your mobile provider for the cost of data for the duration of the connection while accessing the app, or other third-party charges. In using the app, you’re accepting responsibility for any such charges, including roaming data charges if you use the app outside of your home territory (i.e. region or country) without turning off data roaming. If you are not the bill payer for the device on which you’re using the app, please be aware that we assume that you have received permission from the bill payer for using the app.
            </p>
           
            <p>
            Along the same lines, Elnet Technologies cannot always take responsibility for the way you use the app i.e. You need to make sure that your device stays charged – if it runs out of battery and you can’t turn it on to avail the Service, Elnet Technologies cannot accept responsibility.
            </p>
            <p>
            With respect to Elnet Technologies’s responsibility for your use of the app, when you’re using the app, it’s important to bear in mind that although we endeavor to ensure that it is updated and correct at all times, we do rely on third parties to provide information to us so that we can make it available to you. Elnet Technologies accepts no liability for any loss, direct or indirect, you experience as a result of relying wholly on this functionality of the app.
            </p>
          
            <p>
            At some point, we may wish to update the app. The app is currently available on Android & iOS – the requirements for the both systems(and for any additional systems we decide to extend the availability of the app to) may change, and you’ll need to download the updates if you want to keep using the app. Elnet Technologies does not promise that it will always update the app so that it is relevant to you and/or works with the Android & iOS version that you have installed on your device. However, you promise to always accept updates to the application when offered to you, We may also wish to stop providing the app, and may terminate use of it at any time without giving notice of termination to you. Unless we tell you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must stop using the app, and (if needed) delete it from your device.  </p>

            <h1 className='mb-4 my-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl'>
            Changes to This Terms and Conditions
            </h1>
            <p>
            We may update our Terms and Conditions from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Terms and Conditions on this page.</p>
           
            <p>
            These terms and conditions are effective as of 2023-08-31 </p>
            <h1 className='mb-4 my-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl'>
            Contact Us
            </h1>
            <p>
            If you have any questions or suggestions about our Terms and Conditions, do not hesitate to contact us at contact@houfa.com. </p>
            
            </div>
            
       </div>
       <div className='mt-10 pt-10' style={{background: '#F3FAFF'}}>
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
                   <div className='mx-auto flex justify-center'>
                    <p><Link href={'/privacy'} className='hover:text-blue-500'>Privacy Policy</Link> </p>
                   
                    </div>
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
  }