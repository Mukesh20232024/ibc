import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import reverseLogo from "../assests/images/ibc-logo-reverse.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth, provider } from '../services/firebaseInit';

import React, { useState } from "react";
const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About IBC", href: "/AboutUs", current: false },
  { name: "Services", href: "/Services", current: false },
  { name: "Contact Us", href: "/ContactUs", current: false },
  { name: "Video Tutorialt", href: "/VideoTut", current: false },
  { name: "Our Careers", href: "/OurCareers", current: false },
];


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [userDetails, setUserDetails] = useState({});
  const [isUserLoggedIn, setUserAuthStatus] = useState(false);

  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <>
      {/* <GoogleOAuthProvider clientId="774653224004-a55gvh5ptoo4kdld00sdbr5davipiv43.apps.googleusercontent.com"> */}

      <Disclosure as="nav" className="bg-gray-800 ">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <Link to="/">
                      {" "}
                      <img
                        src={reverseLogo}
                        title="Ignite Business Catalyst"
                        className="block h-8 w-auto "
                        alt="Ignite Business Catalyst"
                      />
                    </Link>
                  </div>

                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                 >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                 </button> */}

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div className="flex">
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>

                      {/* --- OldGoogleLogin---- */}
                      {/* <GoogleLogin
                          onSuccess={(credentialResponse) => {
                            console.log(credentialResponse);
                          }}
                          onError={() => {
                            console.log("Login Failed");
                          }}
                          useOneTap
                        /> */}

                      {/* ---NewGoogleLogin---- */}
                      <div className="login-wrapper ml-5">
                        {isUserLoggedIn && (
                          <div className="welcome-wrapper">
                            <span
                              className="profile-picture"
                              style={{
                                backgroundImage: `url(${userDetails.photoURL})`,
                              }}
                            />
                            <h6 className="welcome-text">
                              Welcome, {userDetails.name}!
                            </h6>
                          </div>
                        )}
                        <button
                          className="btn"
                          type="button"
                          onClick={() => {
                            if (isUserLoggedIn) {
                              setUserDetails({});
                              setUserAuthStatus(false);
                              navigate("/");
                            } else {
                              auth
                                .signInWithPopup(provider)
                                .then((res) => {
                                  const { displayName, email, photoURL } =
                                    res.user;
                                  const userInfo = {
                                    photoURL,
                                    email,
                                    name: displayName,
                                  };
                                  setUserDetails(userInfo);
                                  setUserAuthStatus(true);

                                  return res;
                                })
                                .catch((err) => err);
                            }
                          }}
                        >
                          {isUserLoggedIn ? "Logout" : "Google Login"}
                        </button>
                      </div>


                      <Link to="/Login">
                      <div className="login-wrapper ml-5">
                        <button
                          className="btn"
                          type="button"
                        >
                          Login/Signup
                        </button>
                      </div>
                      </Link>
                    </div>
                   

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {/* </GoogleOAuthProvider> */}
    </>
  );
}

// import { Fragment } from "react";
// import { Disclosure, Menu, Transition } from "@headlessui/react";
// import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
// import reverseLogo from "../assests/images/ibc-logo-reverse.png";
// // import { GoogleOAuthProvider } from "@react-oauth/google";
// // import { GoogleLogin } from "@react-oauth/google";
// import { Link } from "react-router-dom";

// import React, { useState } from "react";
// import { auth, provider } from './firebase'
// import "./login.css"

// const navigation = [
//   { name: "Home", href: "/", current: true },
//   { name: "About IBC", href: "/aboutus", current: false },
//   { name: "Services", href: "/Services", current: false },
//   { name: "Contact Us", href: "/ContactUs", current: false },
//   { name: "Video Tutorial", href: "/VideoTut", current: false },
//   { name: "Our Careers", href: "/OurCareers", current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Header() {
//   const [userDetails, setUserDetails] = useState({});
//   const [isUserLoggedIn, setUserAuthStatus] = useState(false);

//   return (
//     <>

//       {/* <GoogleOAuthProvider clientId="774653224004-a55gvh5ptoo4kdld00sdbr5davipiv43.apps.googleusercontent.com"> */}

//       <Disclosure as="nav" className="bg-gray-800">
//         {({ open }) => (
//           <>
//             <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//               <div className="relative flex h-16 items-center justify-between">
//                 <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                   {/* Mobile menu button*/}
//                   <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                     <span className="sr-only">Open main menu</span>
//                     {open ? (
//                       <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                     ) : (
//                       <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                     )}
//                   </Disclosure.Button>

//                 </div>
//                 <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//                   <div className="flex flex-shrink-0 items-center">
//                     <img
//                       src={reverseLogo}
//                       title="Ignite Business Catalyst"
//                       className="block h-8 w-auto lg:hidden"
//                       alt="Ignite Business Catalyst"
//                     />
//                     <img
//                       src={reverseLogo}
//                       title="Ignite Business Catalyst"
//                       className="hidden h-8 w-auto lg:block"
//                       alt="Ignite Business Catalyst"
//                     />
//                   </div>
//                   <div className="hidden sm:ml-6 sm:block">
//                     <div className="flex space-x-4">
//                       {navigation.map((item) => (
//                         <a
//                           key={item.name}
//                           href={item.href}
//                           className={classNames(
//                             item.current
//                               ? "bg-gray-900 text-white"
//                               : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                             "px-3 py-2 rounded-md text-sm font-medium"
//                           )}
//                           aria-current={item.current ? "page" : undefined}
//                         >
//                           {item.name}
//                         </a>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//                   {/* <button
//                   type="button"
//                   className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                 >
//                   <span className="sr-only">View notifications</span>
//                   <BellIcon className="h-6 w-6" aria-hidden="true" />
//                 </button> */}

//                   {/* Profile dropdown */}
//                   <Menu as="div" className="relative ml-3">
//                     <div className="flex">
//                       <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                         <span className="sr-only">Open user menu</span>
//                         <img
//                           className="h-8 w-8 rounded-full"
//                           src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                           alt=""
//                         />
//                       </Menu.Button>

//                       {/* --- OldGoogleLogin---- */}
//                       {/* <GoogleLogin
//                           onSuccess={(credentialResponse) => {
//                             console.log(credentialResponse);
//                           }}
//                           onError={() => {
//                             console.log("Login Failed");
//                           }}
//                           useOneTap
//                         /> */}

//                       {/* ---NewGoogleLogin---- */}
//                       <div className="login-wrapper ml-5">
//                         {isUserLoggedIn && (
//                           <div className="welcome-wrapper">
//                             <span
//                               className="profile-picture"
//                               style={{ backgroundImage: `url(${userDetails.photoURL})` }}
//                             />
//                             <h6 className="welcome-text">Welcome, {userDetails.name}!</h6>
//                           </div>
//                         )}
//                         <button
//                           className="btn"
//                           type="button"
//                           onClick={() => {
//                             if (isUserLoggedIn) {
//                               setUserDetails({});
//                               setUserAuthStatus(false);
//                             } else {
//                               auth
//                                 .signInWithPopup(provider)
//                                 .then(res => {
//                                   const { displayName, email, photoURL } = res.user;
//                                   const userInfo = {
//                                     photoURL,
//                                     email,
//                                     name: displayName
//                                   };
//                                   setUserDetails(userInfo);
//                                   setUserAuthStatus(true);

//                                   return res;
//                                 })
//                                 .catch(err => err);
//                             }
//                           }}
//                         >
//                           {isUserLoggedIn ? "Logout" : "Google Login"}
//                         </button>
//                       </div>

//                     </div>

//                     <Transition
//                       as={Fragment}
//                       enter="transition ease-out duration-100"
//                       enterFrom="transform opacity-0 scale-95"
//                       enterTo="transform opacity-100 scale-100"
//                       leave="transition ease-in duration-75"
//                       leaveFrom="transform opacity-100 scale-100"
//                       leaveTo="transform opacity-0 scale-95"
//                     >
//                       <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                         <Menu.Item>
//                           {({ active }) => (
//                             <a
//                               href="#"
//                               className={classNames(
//                                 active ? "bg-gray-100" : "",
//                                 "block px-4 py-2 text-sm text-gray-700"
//                               )}
//                             >
//                               Your Profile
//                             </a>
//                           )}
//                         </Menu.Item>
//                         <Menu.Item>
//                           {({ active }) => (
//                             <a
//                               href="#"
//                               className={classNames(
//                                 active ? "bg-gray-100" : "",
//                                 "block px-4 py-2 text-sm text-gray-700"
//                               )}
//                             >
//                               Settings
//                             </a>
//                           )}
//                         </Menu.Item>
//                         <Menu.Item>
//                           {({ active }) => (
//                             <a
//                               href="#"
//                               className={classNames(
//                                 active ? "bg-gray-100" : "",
//                                 "block px-4 py-2 text-sm text-gray-700"
//                               )}
//                             >
//                               Sign out
//                             </a>
//                           )}
//                         </Menu.Item>
//                       </Menu.Items>
//                     </Transition>
//                   </Menu>
//                 </div>
//               </div>
//             </div>

//             <Disclosure.Panel className="sm:hidden">
//               <div className="space-y-1 px-2 pt-2 pb-3">
//                 {navigation.map((item) => (
//                   <Disclosure.Button
//                     key={item.name}
//                     as="a"
//                     href={item.href}
//                     className={classNames(
//                       item.current
//                         ? "bg-gray-900 text-white"
//                         : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                       "block px-3 py-2 rounded-md text-base font-medium"
//                     )}
//                     aria-current={item.current ? "page" : undefined}
//                   >
//                     {item.name}
//                   </Disclosure.Button>
//                 ))}
//               </div>
//             </Disclosure.Panel>
//           </>
//         )}
//       </Disclosure>
//       {/* </GoogleOAuthProvider> */}
//     </>
//   );
// }
