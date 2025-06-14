'use client'
import parse from 'html-react-parser';
import { useFontSize } from "@/store/useFontSize"
import { useEffect } from 'react';

const Text = ({id, title, content}) => {
    useEffect(() => {
        localStorage.setItem("lastRead", JSON.stringify({ chapter: 'zero', verse: id }));
    },[])
    const { fontSize } = useFontSize(state => state)
    return (
        <>
            <h1 className='text-center font-bold' style={{ fontSize: fontSize + 6 }}>{title}</h1>
            <div className='text-justify mt-5' style={{ fontSize: fontSize }}>
                {parse(content)}
            </div>
        </>
    )
}

export default Text