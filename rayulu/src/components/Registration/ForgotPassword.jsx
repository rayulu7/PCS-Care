import React from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-orange-50">
            <div className="bg-white text-gray-500 max-w-96 mx-4 md:p-6 p-4 text-left text-sm rounded-xl shadow-[0px_0px极 10px_0px] shadow-black/10">
                <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Reset Password</h2>
                <p className="text-center mb-6 text-gray-600">
                    Enter your email address and we'll send you instructions to reset your password.
                </p>
                <form>
                    <input 
                        id="email" 
                        className="w-full bg-transparent border my-3 border-gray-500/30 outline-none rounded-full py-2.5 px-4" 
                        type="email" 
                        placeholder="Enter your email address" 
                        required 
                    />
                    <button type="submit" className="w-full mb-3 bg-orange-500 py-2.5 rounded-full text-white">
                        Send Reset Instructions
                    </button>
                </form>
                <p className="text-center mt-4">
                    <Link to="/login" className="text-blue-500 underline">Back to Login</Link>
                </p>
            </div>
        </div>
    );
}
