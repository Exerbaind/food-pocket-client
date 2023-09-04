'use client'
import { useAppSelector } from '@/store';
// import { useAppSelector } from '@/store';
import React from 'react';

function DataComp() {
  const { data } = useAppSelector((state) => state.postsService);
    if (Array.isArray(data) && data.length) {
         return data.map((item: any) => (
        <p key={item.id}>{item.title}</p>
      )) 
    }
  return (
    <div>DataComp</div>
  )
}

export default DataComp;