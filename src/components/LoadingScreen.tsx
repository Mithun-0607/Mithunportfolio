import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-orange-500 via-blue-500 to-orange-500 bg-clip-text text-transparent animate-pulse">
            ELEVIX
          </h1>
          <p className="text-xl text-blue-400 mt-2 tracking-widest">DESIGN</p>
        </div>

        <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-orange-500 to-blue-500 transition-all duration-300 rounded-full"
            style={{ width: `${progress}%` }}
          >
            <div className="h-full w-full bg-white opacity-30 animate-pulse"></div>
          </div>
        </div>

        <p className="mt-4 text-gray-400">{progress}%</p>
      </div>
    </div>
  );
}
