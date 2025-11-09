import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-8 border-t border-gray-800">
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-pulse"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <span>© 2025 | Designed by</span>
            <span className="text-transparent bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text font-semibold">
              Mithun B
            </span>
            <span>|</span>
            <span className="flex items-center gap-1">
              <Heart size={16} className="text-orange-500 fill-orange-500" />
              <span className="font-semibold text-white">Elevix Design</span>
            </span>
          </div>

          <p className="text-sm text-gray-500 text-center">
            Built with passion, powered by innovation
          </p>
        </div>
      </div>
    </footer>
  );
}
