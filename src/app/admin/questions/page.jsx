'use client'
import Loading from '@/utils/Loading'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const Questions = () => {
    const [questionsList, setquestionsList] = useState([])

    const handleCopy = (question) => {
        try {
            navigator.clipboard.writeText(question).then(() => {
                toast.success('Question copied to clipboard!');
            })
        } catch (error) {
            toast.error('Failed to copy question!');
        }
    }
    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this question?')) return
        try {
            const res = await fetch(`/api/question/${id}`, {
                method: 'DELETE'
            });
            if (res.ok) toast.success('Question deleted successfully!');
        } catch (error) {
            toast.error('Failed to delete question');
        }
    }
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch('/api/question');
                const data = await response.json();
                setquestionsList(data);
            } catch (error) {
                toast.error('Failed to fetch questions');
            }
        }
        fetchQuestions();
    }, [])
    if (!questionsList.length) return <Loading />
    return (
        <ul className="list bg-base-100 rounded-box shadow-md w-full self-start">
            <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Questions from devotees</li>
            {
                questionsList && questionsList.map((question, index) => (
                    <li key={index} className="list-row text-lg flex items-center justify-between">
                        <div>{index + 1}. {question.question}</div>
                        <div className="flex gap-2 justify-center">
                            <button onClick={() => handleCopy(question.question)} className="btn btn-square btn-ghost">
                                <i className="ri-clipboard-line text-xl"></i>
                            </button>
                            <button onClick={() => handleDelete(question._id)} className="btn btn-square btn-ghost">
                                <i className="ri-delete-bin-5-line text-xl text-red-600"></i>
                            </button>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

export default Questions
