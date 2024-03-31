// pages/index.js
'use client'
import React from 'react';

export default function Home() {
    const downloadPdf = () => {
        const url = './public/output.pdf';
        const a = document.createElement('a');
        a.href = url;
        a.download = 'filename.pdf'; // Set the filename for the downloaded file
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      };


  return (
    <div>
      <h1>Download PDF</h1>
      <button onClick={()=>downloadPdf()}>Download PDF</button>
    </div>
  );
}
