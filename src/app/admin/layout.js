// app/admin/layout.jsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Menu from './Menu';

export default function AdminLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem('admin'))
      router.replace('/admin/login');
  }, []);

  return <div className="flex flex-col md:flex-row min-h-screen">
    <Menu />
    <div className="flex w-full items-center justify-center text-lg md:p-5">
      {children}
    </div>
  </div>
}
