import { useEffect, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-32 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-3xl blur-xl"></div>

            <div className="relative bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-3xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative w-48 h-48 bg-gradient-to-br from-orange-500 to-blue-500 rounded-full p-1">
                    <div className="w-full h-full bg-gray-900 rounded-full flex items-center justify-center">
                      <span className="text-6xl font-bold bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
                        MB
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                    <Sparkles className="text-orange-500" size={24} />
                    <p className="text-xl text-blue-400 font-semibold">Code. Create. Inspire.</p>
                  </div>

                  <p className="text-lg text-gray-300 leading-relaxed">
                    I'm a passionate <span className="text-orange-500 font-semibold">Computer Science Engineering student</span> who
                    loves transforming creative ideas into impactful digital experiences. My focus is on{' '}
                    <span className="text-blue-500 font-semibold">AI-driven products</span>, intelligent systems,
                    and modern web development.
                  </p>

                  <p className="text-gray-400 mt-4">
                    Every line of code I write is a step toward building something extraordinary.
                    Let's shape the future together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
