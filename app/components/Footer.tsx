"use client";
import Link from 'next/link';

import loocationimage from "../assets/location.png";
import mailimage from "../assets/mail.png";
import phoneimage from "../assets/phone.png";
import Image from 'next/image';
const Footer=()=>{
    return(
        <div className='py-20' style={{background: '#F3FAFF'}}>
              <div className='md:columns-2 '>
                <div className='mx-auto justify-center flex '>
                  <div className='md:px-10'>
                    <div className='m-10' style={{fontSize: '30px', color: '#773F9F'}}>  
                CONTACT US
                
                </div>
                {/* <div className='m-5 md:m-10 sm:m-10'>
                    <p> <Image
                    className='mdm:mx-10'
                  style={{display: 'inline'}}
                  src={loocationimage}
                  alt="Logo"
                />  1 Smith St, Lagos Island 102273, Lagos, Nigeria </p>
                </div> */}
                     <div className='m-5 md:m-10 sm:m-10'>
                    <p> <Image
                    className='md:mx-10'
                  style={{display: 'inline'}}
                  src={loocationimage}
                  alt="Logo"
                /> 1 Smith St, Lagos Island 102273, Lagos, Nigeria</p>
                </div>
                    <div className='m-5 md:m-10 sm:m-10'>
                    <p> <Image
                    className='md:mx-10'
                  style={{display: 'inline'}}
                  src={mailimage}
                  alt="Logo"
                />  Info@Houfa.com</p>
                </div>
                    <div className='m-5 md:m-10 sm:m-10'>
                    <p> <Image
                  style={{display: 'inline'}}
                  className='md:mx-10'
                  src={phoneimage}
                  alt="Logo"
                />  +2519110876555</p></div>
                  
                    </div>
                </div>
                <div>
                <div className='m-10 '></div>
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
    )
}
export default Footer;