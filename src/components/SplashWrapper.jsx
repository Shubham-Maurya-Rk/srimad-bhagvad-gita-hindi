// components/SplashWrapper.jsx
'use client';

import { useState, useEffect } from 'react';

export default function SplashWrapper({ children }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1500); // 2 sec splash
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash ? (
        <div className="fixed inset-0 z-50 bg-white flex text-2xl font-bold">
          <div className='flex flex-col items-center'>
            <div className='h-20'></div>
            <img src="/images/flashScreen.webp" alt="flash" />
            <h1 className="text-md mt-5">अनुवाद एवं तात्पर्य</h1>
            <p className="text-xl font-bold">श्रील ए.सी भक्तिवेदांत स्वामी प्रभुपाद </p>
            <span className="loading loading-dots loading-xl mt-10"></span>
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
}
