'use client';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Image src="rainbow-cat.gif" alt="Rainbow Cat" width={300} height={300} priority />
      <p style={{ 
        fontSize: '2rem', fontWeight: 'bold', marginTop: '2rem', 
        background: 'linear-gradient(to right, #ff0000, #ff7f00, #ffff99, #00ff99, #0000ff, #4b0082, #8f00ff)', 
        WebkitTextFillColor: 'transparent', 
        WebkitBackgroundClip: 'text',
        animation: 'rainbow 6s ease-in-out infinite',
        backgroundSize: '200% 20%',
        }}>
          404 Page Not Found
      </p>
      <style jsx>{`
        @keyframes rainbow {
          0%,100% {
            background-position: 0 0;
          }
      
          50% {
              background-position: 100% 0;
          }
        }
      `}</style>
    </div>
  )
}

