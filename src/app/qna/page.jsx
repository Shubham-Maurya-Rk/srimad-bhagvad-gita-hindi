'use client'
import Loading from '@/utils/Loading'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const QnA = () => {
    const [qnas, setqnas] = useState([])
    const [category, setcategory] = useState('')
    const [loading, setloading] = useState(false)
    useEffect(() => {
        const getQnas = async () => {
            try {
                setloading(true)
                const res = await fetch(`/api/qna${category}`)
                const data = await res.json()
                setqnas(data)
            } catch (error) {
                toast.error('Failed to fetch QnA')
            } finally {
                setloading(false)
            }
        }
        getQnas()
    }, [category])
    return (
        <div className='p-2'>
            <div className='w-full flex justify-end'>
                <select value={category} onChange={(e) => setcategory(e.target.value)} className="my-2 w-1/3 select select-md">
                    <option disabled={true}>Category</option>
                    <option value={""}>All</option>
                    <option value={"/1"}>Chapter 1</option>
                    <option value={"/2"}>Chapter 2</option>
                    <option value={"/3"}>Chapter 3</option>
                    <option value={"/4"}>Chapter 4</option>
                    <option value={"/5"}>Chapter 5</option>
                    <option value={"/6"}>Chapter 6</option>
                    <option value={"/7"}>Chapter 7</option>
                    <option value={"/8"}>Chapter 8</option>
                    <option value={"/9"}>Chapter 9</option>
                    <option value={"/10"}>Chapter 10</option>
                    <option value={"/11"}>Chapter 11</option>
                    <option value={"/12"}>Chapter 12</option>
                    <option value={"/13"}>Chapter 13</option>
                    <option value={"/14"}>Chapter 14</option>
                    <option value={"/15"}>Chapter 15</option>
                    <option value={"/16"}>Chapter 16</option>
                    <option value={"/17"}>Chapter 17</option>
                    <option value={"/18"}>Chapter 18</option>
                </select>
            </div>
            {loading && <Loading />}
            {
                qnas && qnas.map(qna => (
                    <div key={qna._id} className="collapse collapse-arrow bg-base-100 border border-base-300">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-semibold">{qna.question}</div>
                        <div className="collapse-content text-sm">{qna.answer}</div>
                    </div>
                )) 
            }
        </div>
    )
}

export default QnA
