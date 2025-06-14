'use client'
import React, { useEffect, useState } from 'react'

const Admin = () => {
  const [counts, setcounts] = useState  ({
    shlokaCount: 0,
    qnaCount: 0,
    askQuestionCount: 0
  })
  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const response = await fetch('/api/counts');
        const data = await response.json();
        setcounts(data);
      } catch (error) {
        console.error('Failed to fetch counts:', error);
      }
    };
    fetchCounts();
  }, []);
  return (
    <div className="stats stats-vertical lg:stats-horizontal w-full self-start mt-5 shadow">
      <div className="stat">
        <div className="stat-title md:text-lg">Total Shlokas</div>
        <div className="stat-value">{counts.shlokaCount}</div>
      </div>

      <div className="stat">
        <div className="stat-title md:text-lg">Total QnA</div>
        <div className="stat-value">{counts.qnaCount}</div>
      </div>

      <div className="stat">
        <div className="stat-title md:text-lg">Total Questions</div>
        <div className="stat-value">{counts.askQuestionCount}</div>
      </div>
    </div>
  )
}

export default Admin
