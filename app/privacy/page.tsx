"use client";

import Link from 'next/link';
import Image from 'next/image';
import logo from '../assets/Logo.png';
import logo6 from "./assets/faircomlogo.png";
import loocationimage from "../assets/location.png";
import mailimage from "../assets/mail.png";
import phoneimage from "../assets/phone.png";
import { useState } from 'react';
import Footer from '../components/Footer';

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
     <h1 className='mb-4 my-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl' > Privacy Policy</h1>
   
           <p> Elnet Technologies built the Houfa app as a Commercial app. This SERVICE is provided by Elnet Technologies and is intended for use as is.</p>
            <p>
            This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.
            </p>
            <p>
            If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
            </p>
           <p> The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible at Houfa unless otherwise defined in this Privacy Policy.</p>
        <h1 className='mb-4 my-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl'>
            Information Collection and Use
       </h1>
            <p>
            For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to name, phone number, email. The information that we request will be retained by us and used as described in this privacy policy.
            </p>
            <p>
            The app does use third-party services that may collect information used to identify you.
            </p>
            <p>
            Link to the privacy policy of third-party service providers used by the app
            </p>
              <h1 className='mb-4 my-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl'>
            Google Play Services
            </h1>
            <h1 className='mb-4 my-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl'>
            Log Data
            </h1>
            <p>
            We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third-party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.
            </p>
            <h1 className='mb-4 my-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl'>
            Cookies
            </h1>
            <p>
            Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device&apos;s internal memory.
            </p>
            <p>
            This Service does not use these “cookies” explicitly. However, the app may use third-party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.
            </p>
            <h1 className='mb-4 my-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl'>
            Service Providers
            </h1>
            <p>
            We may employ third-party companies and individuals due to the following reasons:
            </p>
            <ul className='list-disc'>
                <li>
            To facilitate our Service;
            </li>
            <li>
            To provide the Service on our behalf;
            </li>
            <li>
            To perform Service-related services; or
            </li>
            <li>
            To assist us in analyzing how our Service is used.
            </li>
            </ul>
            <p>
            We want to inform users of this Service that these third parties have access to their Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
            </p>
            <h1 className='mb-4 my-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl'>
            Security
            </h1>
            <p>
            We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
            </p>
            <h1 className='mb-4 my-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl'>
            Links to Other Sites
            </h1>
            <p>
            This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
            </p>
            <h1 className='mb-4 my-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl'>
            Children’s Privacy
            </h1>
            <p>
            These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13 years of age. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do the necessary actions.
            </p>
            <h1 className='mb-4 my-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl'>
            Changes to This Privacy Policy
            </h1>
            <p>
            We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
            <p>
            This policy is effective as of 2023-08-31
            </p>
            <h1 className='mb-4 my-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl'>
            Contact Us
            </h1>
            <p>
            If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at contact@houfa.com.
            </p>
            </div>
            
       </div>
      <Footer/>
    </div>
  }