import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useFirebase } from '../services/firebaseInit';





const Login = () => {
    const firebase = useFirebase();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Login in a user.....");
        const result = await firebase.signinUserWithEmailAndPass(email, password);
        console.log("Successfull", result);
        alert("Successfull Login")
    };



    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-10 rounded shadow-2xl">
                <h2 className="text-2xl font-bold mb-10">User Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" id="email" className="w-full px-20 py-2 border border-gray-300 rounded" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" id="password" className="w-full px-20 py-2 border border-gray-300 rounded" required />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Login</button>
                </form>
                <p className="mt-7 text-center text-sm text-gray-500">
                    <Link to="/ForgatPwd" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">

                        Forgot your password?

                    </Link>
                </p>
                <p className="mt-10 text-center text-sm text-gray-500">
                    Don’t have an account{' '}
                    <Link to="/Signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">

                        Click to Sign Up

                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;