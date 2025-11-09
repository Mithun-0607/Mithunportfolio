import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-gray-900 to-blue-900/20"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8 inline-block px-6 py-2 border border-orange-500/30 rounded-full bg-gray-800/50 backdrop-blur-sm">
          <p className="text-orange-400 text-sm">Welcome to my digital space</p>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          <span className="inline-block animate-[pulse_2s_ease-in-out_infinite]">
            <span className="bg-gradient-to-r from-orange-500 via-blue-500 to-orange-500 bg-clip-text text-transparent">
              Mithun B
            </span>
          </span>
        </h1>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Turning <span className="text-orange-500 font-semibold">Imagination</span> into{' '}
            <span className="text-blue-500 font-semibold">Innovation</span>
          </p>
          <p className="text-lg text-gray-400 mt-4">
            CSE Engineer | Creator | Developer
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <button
            onClick={scrollToContact}
            className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-blue-500 rounded-lg font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]"
          >
            <span className="relative z-10">Hire Me</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </button>

          <div className="mt-12 animate-bounce">
            <ChevronDown size={32} className="text-gray-400" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section>
  );
}
