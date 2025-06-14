// app/[chapter]/[verse]/page.jsx
'use client'
import { useFontSize } from '@/store/useFontSize';
import parse from 'html-react-parser';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

export default function Verse({ chapter, verse }) {
  const verseCnt = [46, 72, 43, 42, 29, 47, 30, 28, 34, 42, 55, 20, 35, 27, 20, 24, 28, 78]
  const images = ['1_1','1_3','1_4','1_14','1_26','1_33','2_11','2_13','2_14','2_22','2_62','3_10','3_12','3_37','4_1','4_7','4_8','4_11','5_4','5_18','6_11','6_24','6_34','6_47','7_4','7_15','8_21','9_11','10_12','10_41','11_13','11_50','12_6','14_14','15_1','15_6','15_8','16_5','16_10','17_4','18_14','18_41','18_65','18_78']
  const fontSize = useFontSize(state => state.fontSize);
  const router = useRouter()
  const [data, setdata] = useState({
    shloka: "",
    devnagri: "",
    synonyms: "",
    translation: "",
    purport: ""
  })
  function parseVerse() {
    const parts = verse.split('-').map(Number);
    return parts.length === 1 ? [parts[0], parts[0]] : [parts[0], parts[1]];
  }
  const [start, end] = parseVerse();
  const nextVerse = parseInt(end) + 1;
  const prevVerse = parseInt(start) - 1;

  useEffect(() => {
    const getData = async () => {
      localStorage.setItem("lastRead", JSON.stringify({ chapter, verse }));
      const res = await fetch(`/api/${chapter}/${verse}`);
      const resData = await res.json();
      setdata(resData)
    }
    getData();
  }, [])
  if (data.shloka === "") return (<div className="flex flex-col items-center gap-8 py-10 px-3 text-lg">
    <span className="loading loading-spinner loading-xl"></span>
  </div>)
  return (
    <main className="flex flex-col items-center gap-8 py-5 px-3" style={{ fontSize }}>
      <div>
        <h1 className="py-2 border-t border-b font-bold inline" style={{ fontSize: fontSize + 6 }}>श्लोक {chapter}.{verse}</h1>
      </div>
      <p className="text-center font-semibold">
        {parse(data.shloka)}
      </p>
      <p className="text-center italic">
        {parse(data.devnagri)}
      </p>
      <p className="text-justify">
        {parse(data.synonyms)}
      </p>
      <div>
        <h2 className="font-semibold text-center">भावार्थ</h2>
        <p className="text-justify">
          {parse(data.translation)}
        </p>
      </div>
      { images.includes(`${chapter}_${verse}`) && <div className="w-full rounded-xl overflow-hidden">
        <img src={`/shloka/${chapter}_${verse}.jpg`} alt={`Shloka ${chapter}.${verse}`} className="w-full object-contain" />
      </div>}
      <div>
        <h2 className="font-semibold text-center">तात्पर्य</h2>
        <div className="text-justify">
          {parse(data.purport)}
        </div>
      </div>
      <div className="join grid grid-cols-2 w-full">
        <button onClick={() => router.replace(`/${chapter}/${prevVerse}`)} className="join-item btn btn-outline" disabled={prevVerse <= 0}>{`<< `}Text {prevVerse}</button>
        <button onClick={() => router.replace(`/${chapter}/${nextVerse}`)} className="join-item btn btn-outline" disabled={nextVerse >= verseCnt[chapter - 1]}>Text {` ${nextVerse} >>`}</button>
      </div>
    </main>
  );
}
