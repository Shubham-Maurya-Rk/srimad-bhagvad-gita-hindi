'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const AdminLogin = () => {
    const [password, setpassword] = useState('')
    const router = useRouter();
    const handleSubmit = () => {
        if(!password) return toast.error('Password is required');
        console.log(process.env.NEXT_PUBLIC_ADMIN_PASSWORD);
        if(password !== process.env.NEXT_PUBLIC_ADMIN_PASSWORD) return toast.error('Incorrect password');
        else{
            toast.success('Logged in successfully!');
            localStorage.setItem('admin', 'true');
            router.push('/admin');
        }
    }
    return (
        <div className="flex justify-center items-center h-155">
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend text-lg">Admin Login</legend>

                <label className="label text-md">Admin Password</label>
                <input onChange={(e) => setpassword(e.target.value)} type="text" className="input text-lg" placeholder="Password..." />

                <button onClick={handleSubmit} className="btn btn-neutral mt-4">Login</button>
            </fieldset>
        </div>
    )
}

export default AdminLogin
