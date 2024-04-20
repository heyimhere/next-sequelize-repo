'use client';
import Image from "next/image";

export default function Home() {
  const handleClick = async () => {
    try {
      const response = await fetch('/api/button', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if(response.ok) {
        const results = await response.json();
        console.log('results', results);
      }
    } catch (err) {
      console.error('Error fetching data', err);
    }
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={handleClick}>Button</button>
    </main>
  );
}
