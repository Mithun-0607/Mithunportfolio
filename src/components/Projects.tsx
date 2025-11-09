import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Lightbulb, Zap } from 'lucide-react';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Temple Flow',
      description:
        'A smart automation system that streamlines temple management and flow monitoring using IoT and data analytics. Real-time crowd management, automated darshan scheduling, and intelligent resource allocation.',
      tech: ['IoT', 'Python', 'Raspberry Pi', 'Data Analytics', 'Flask'],
      icon: Lightbulb,
      gradient: 'from-orange-500 to-yellow-500',
    },
    {
      title: 'HireMe',
      description:
        'An AI-powered job-matching and virtual interview platform that helps recruiters connect with candidates intelligently. Features smart CV parsing, skill matching algorithms, and automated interview scheduling.',
      tech: ['AI/ML', 'Python', 'React', 'NLP', 'Flask'],
      icon: Zap,
      gradient: 'from-blue-500 to-cyan-500',
    },
  ];

  return (
    <section id="projects" className="py-32 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-4">Innovation meets execution</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  className={`group relative transition-all duration-500 delay-${index * 100}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>

                  <div className="relative bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-3xl p-8 h-full hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-[1.02]">
                    <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300`}>
                      <Icon className="text-white" size={32} />
                    </div>

                    <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-orange-500 group-hover:to-blue-500 transition-all duration-300">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm bg-gray-700/50 border border-gray-600 rounded-full text-gray-300 hover:border-orange-500/50 hover:text-orange-400 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button className={`flex items-center gap-2 text-white font-semibold group/btn`}>
                      <span className={`bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                        View Project
                      </span>
                      <ExternalLink
                        size={16}
                        className="group-hover/btn:translate-x-1 transition-transform duration-300"
                      />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
