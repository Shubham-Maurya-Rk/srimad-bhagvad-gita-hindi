'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const Navbar = () => {
    const [question, setquestion] = useState("")
    const handleSubmit = () => {
        try {
            if(!question) return
            const res = fetch('/api/question/ask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ question }),
            });
            setquestion("")
            toast.success('Question added successfully!');
            document.getElementById('my_modal_3').close()
        } catch (error) {
            console.error('POST /api/ask-question error:', error);
            toast.error('Internal Server Error');
        }
    }
    return (
        <div className="navbar fixed top-0 z-50 bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-45 p-2 shadow">
                        <li><Link href={"/"} className='text-lg'>Home</Link></li>
                        <li><Link href={"/qna"} className='text-lg'>Q&A</Link></li>
                        <li><button onClick={() => document.getElementById('my_modal_3').showModal()} className='text-lg'>Ask Questions</button></li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link href="/" className="btn btn-ghost text-xl">श्रीमद् भगवद्गीता  यथारूप</Link>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle p-2" onClick={() => document.getElementById('my_modal_5').showModal()}>
                    <i className="ri-font-size-ai text-xl"></i>
                </button>
            </div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg mb-3">Ask!</h3>
                    <div className="join">
                        <input value={question} onChange={(e) => setquestion(e.target.value)} type="text" className="input join-item" placeholder="Question?" />
                        <button onClick={handleSubmit} className="btn join-item">Send</button>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default Navbar
