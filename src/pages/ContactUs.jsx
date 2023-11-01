import "../App.css"
import React, { useState,useEffect } from 'react';
import { nanoid } from 'nanoid';
import { db, firestore } from '../services/firebaseInit'; 





export default function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');


  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      db.ref(`ContactUs_Page`).on('value', (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const userList = Object.values(data);
          setUsers(userList);
        }
      });
    };
    fetchData();
    return () => {
      db.ref(`ContactUs_Page`).off();
    };
  }, []);



    const handleSubmit = (e) => {
      e.preventDefault();

      const userId = nanoid();

      const user = {
        id: userId,
        name: name,
        email: email,
        subject: subject,
        phone: phone,
        message: message,

      };
      db.ref(`ContactUs_Page`).child(userId).set(user);

      db.ref(`ContactUs_Page`).push(user)
        .then(() => {
          alert('Your details saved successfully');
          setName('');
          setEmail('');
          setSubject('');
          setPhone('');
          setMessage('');
        })
        .catch((error) => {
          console.error('Error saving employee details: ', error);
          alert('Error saving employee details');
        });
    };



    return (
      <>
        <div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="row">
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
              <h1 id="aboutus" className="mt-16 text-4xl font-bold tracking-tight text-gray-900 text-center border-b-4 border-black ">CONTACT US</h1>
            </div>
          </div>
          <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <h4 id='ourAddress' className="mt-16 text-2xl  tracking-tight text-gray-900 text-left">OUR ADDRESS</h4>
              <h5 className="mt-5 text-base  tracking-tight text-gray-700 text-left">If you have any questions about the services we provide simply use the form
                below. We try and respond to all queries
                and comments within 24 hours.</h5>
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-7">
                <h6 id='address' className="mb-2 text-2xl  tracking-tight text-gray-900 text-justify">Address &amp; Direction:</h6>
                <p className='mt-0 text-gray-700 text-justify'>Please see the below map</p>
              </div>


              <p className='text-base flex tracking-tight text-gray-400 text-left mt-7'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#C20000" className="w-5 h-5">
                <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
              </svg>
                <a href="#" className='hover:text-red-500 ...  ml-2'>Shop No. 05, Zia Apartment, 264 Bellasis
                  Road, Nagpada, Mumbai-400 008</a></p>


              <p className='text-base flex tracking-tight text-gray-400 text-left mt-7'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#1EE547" className="w-5 h-5">
                <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
              </svg>
                <a href="tel:09867622683" className="hover:text-green-500 ... ml-2">+91-9867622683</a>
              </p>

              <p className='text-base flex tracking-tight text-gray-400 text-left mt-7'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#1E88E5" className="w-5 h-5">
                <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
              </svg>
                <a href="mailto:ignitebcatalyst@gmail.com" className="hover:text-blue-500 ... ml-2">ignitebcatalyst@gmail.com </a>
              </p>
            </div>


            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <h4 id='getIn' className="mt-16 text-2xl  tracking-tight text-gray-900 text-left">GET IN TOUCH</h4>

              <div className="mt-5 sm:mx-auto sm:w-full">
                <form className="space-y-6" action="#" onSubmit={handleSubmit}>
                  <div>
                    <div className="name">
                      <input id="name" type="text" placeholder='  Name' value={name} onChange={(e) => setName(e.target.value)} required className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                  <div>
                    <div className="email">
                      <input id="email" type="email" placeholder='  Email' value={email} onChange={(e) => setEmail(e.target.value)} required className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                  <div>
                    <div className="subject">
                      <input id="subject" type="text" placeholder='  Subject' value={subject} onChange={(e) => setSubject(e.target.value)} required className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                  <div>
                    <div className="phone">
                      <input id="phone" type="phone" placeholder='  Phone Number' value={phone} onChange={(e) => setPhone(e.target.value)} required className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                  </div>
                  <div>
                    <div className="message">
                      <textarea id="message" type="text" placeholder='  Message' value={message} onChange={(e) => setMessage(e.target.value)} cols="100" rows="4" required className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                    </div>
                  </div><div>
                    <button type="submit" className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

{/* 
        fatch
        <div>
      <h2>User List</h2>
      {users.map((user) => (
        <div key={user.id}>
          <h4>{user.name}</h4>
          <p>Email: {user.email}</p>
          <hr />
        </div>
      ))}
    </div> */}



        <div>
          <div className="map mt-20" >
            <iframe
              className="absolute  w-full "
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex={0}
            ></iframe>
          </div>
          <div className="clearfix pt-56"></div>
          <div className='pt-40'>
            {/* Start Footer  */}
            <footer className="bg-white">
              <div className="mx-auto mt-2 w-full max-w-screen-xl p-4 py-6 lg:py-8">

                <hr className="my-6 sm:mx-auto dark:border-black lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                  <span className="text-sm font-bold text-black sm:text-center dark:text-gray-700">© IBC—All Rights Reserved.<br />Proudly Made in India
                  </span>
                  <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                      </svg>
                      <span className="sr-only">Facebook page</span>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                      </svg>
                      <span className="sr-only">Discord community</span>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                        <path fillRule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clipRule="evenodd" />
                      </svg>
                      <span className="sr-only">Twitter page</span>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
                      </svg>
                      <span className="sr-only">GitHub account</span>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clipRule="evenodd" />
                      </svg>
                      <span className="sr-only">Dribbble account</span>
                    </a>
                  </div>
                </div>
              </div>
            </footer>


          </div>
        </div>

      </>


    );
  };

