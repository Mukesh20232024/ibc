import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Validation from './Signupvalidation';








const SignUp = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const err = Validation(values);
        setErrors(err);
        if (err.name === "" && err.email === "" && err.password === "") {
            axios.post('https://localhost:3307/signup', values)
                .then(res => {
                    navigate('/Login');
                })
                .catch(err => console.log(err));
        }
    }





    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-20 rounded shadow-2xl">
                <h2 className="text-2xl font-bold mb-10">User Registration</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600">Name</label>
                        <input onChange={handleInput} type="text" id="name" name='name' className="w-full px-20 py-2 border border-gray-300 rounded" />
                        {errors.name && <span className='text-red-500'> {errors.name}</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
                        <input onChange={handleInput} type="email" id="email" name='email' className="w-full px-20 py-2 border border-gray-300 rounded" />
                        {errors.email && <span className='text-red-500'> {errors.email}</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>
                        <input onChange={handleInput} type="password" id="password" name='password' className="w-full px-20 py-2 border border-gray-300 rounded" />
                        {errors.password && <span className='text-red-500'> {errors.password}</span>}
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Sign Up</button>
                </form>
                <p className="mt-10 text-center text-sm text-gray-500">
                    Already have an account{' '}
                    <Link to="/Login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">

                        Click to Login

                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
































// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import { useFirebase } from '../services/firebaseInit';





// const SignUp = () => {
//     const firebase = useFirebase();

//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log("Signin up a user.....");
//         const result = await firebase.signupUserWithEmailAndPassword(email, password);
//         console.log("Successfull", result);
//         alert("Successfull Regester")
//     };





//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">
//             <div className="bg-white p-20 rounded shadow-2xl">
//                 <h2 className="text-2xl font-bold mb-10">User Registration</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-4">
//                         <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
//                         <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" id="email" className="w-full px-20 py-2 border border-gray-300 rounded" required />
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>
//                         <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" id="password" className="w-full px-20 py-2 border border-gray-300 rounded" required />
//                     </div>
//                     <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Sign Up</button>
//                 </form>
//                 <p className="mt-10 text-center text-sm text-gray-500">
//                     Already have an account{' '}
//                     <Link to="/Login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">

//                         Click to Login

//                     </Link>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default SignUp;


