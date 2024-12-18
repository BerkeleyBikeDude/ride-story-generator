'use client'

import { useState } from 'react';

export default function Home() {
  const [selectedStyle, setSelectedStyle] = useState('casual');

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">Ride Story Generator</h1>
      
      <div className="space-y-6 w-full max-w-md">
        {/* File Upload */}
        <div className="flex justify-center">
          <label 
            className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600"
          >
            Select GPX File
            <input
              type="file"
              accept=".gpx"
              className="hidden"
              onChange={(e) => {
                if (e.target.files) {
                  console.log('File selected:', e.target.files[0].name);
                }
              }}
            />
          </label>
        </div>

        {/* Style Selector */}
        <div className="w-full">
          <label className="block text-sm font-medium mb-2">Select Style:</label>
          <select 
            value={selectedStyle}
            onChange={(e) => setSelectedStyle(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="casual">Casual</option>
            <option value="technical">Technical</option>
            <option value="magazine">Magazine</option>
            <option value="epic">Epic</option>
          </select>
        </div>
      </div>
      
      <p className="mt-4">Upload your GPX file to generate a ride story</p>
    </main>
  );
}