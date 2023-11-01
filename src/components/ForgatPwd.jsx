import React from 'react'
import { Link } from 'react-router-dom'

export default function ForgatPwd() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-10 rounded shadow-2xl">
                <p className='w-96 text-left'>Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.</p>
                <form className='mt-8'>
                    <div className="mb-4">
                        <input type="password" id="password" placeholder='Enter Email Address' className="w-full px-20 py-2 border border-gray-300 rounded" required />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Email Password Reset Link</button>
                </form>
            </div>
        </div>
    )
}
