'use client'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const QnaAdmin = () => {
    const [input, setinput] = useState({
        chapter: 1,
        question: '',
        answer: ''
    })
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if(!input.chapter || !input.question || !input.answer) return toast.error('All fields are required');
            const res = await fetch('/api/qna/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chapter: input.chapter,
                    question: input.question,
                    answer: input.answer,
                }),
            });
            setinput({
                question: '',
                answer: ''
            });
            toast.success('QnA added successfully!');
        } catch (error) {
            console.error('POST /api/qna/add error:', error);
        }
    }
    return (
        <form onSubmit={handleSubmit} className="fieldset bg-base-200 m-auto my-10 border-base-300 rounded-box border p-4 w-full">
            <legend className="fieldset-legend text-lg">Add QnA</legend>

            <label className="label">Chapter</label>
            <input value={input.chapter} min={1} max={18} onChange={e => setinput({ ...input, chapter: e.target.value })} type="number" className="input w-full text-lg" placeholder="1" />

            <label className="label">Question</label>
            <input value={input.question} onChange={e => setinput({ ...input, question: e.target.value })} type="text" className="input w-full text-lg" placeholder="Your question ?" />

            <label className="label">Answer</label>
            <textarea value={input.answer} onChange={e => setinput({ ...input, answer: e.target.value })} className="textarea w-full text-lg" rows={3} placeholder="Your answer..." > 
            </textarea>

            <button className="btn btn-neutral py-7 text-lg mt-4">ADD</button>
        </form>
    )
}

export default QnaAdmin
