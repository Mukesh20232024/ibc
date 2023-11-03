import React from 'react';
import { useState } from 'react';
import { useFirebase } from '../services/firebaseInit';



export default function ForgatPwd() {
    const firebase = useFirebase();

    const [email, setEmail] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Some wait");
        const result = await firebase.sendPwdResetEmail( email );
        console.log("Successfull", result);
        alert("Check your Gmail")
        };

        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-10 rounded shadow-2xl">
                    <p className='w-96 text-left'>Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.</p>
                    <form onSubmit={handleSubmit} className='mt-8'>
                        <div className="mb-4">
                            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" id="password" placeholder='Enter Email Address' className="w-full px-20 py-2 border border-gray-300 rounded" required />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Email Password Reset Link</button>
                    </form>
                </div>
            </div>
        )
    }
