import { useEffect, useRef, useState } from 'react';
import { Code2, Database, Cpu, Terminal, Wrench, GitBranch } from 'lucide-react';

export default function Skills() {
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

  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      skills: [
        { name: 'C', level: 85 },
        { name: 'Python', level: 90 },
        { name: 'Java', level: 80 },
        { name: 'JavaScript', level: 88 },
      ],
    },
    {
      title: 'Web Tech',
      icon: Database,
      skills: [
        { name: 'HTML/CSS', level: 95 },
        { name: 'React', level: 85 },
        { name: 'Flask', level: 82 },
      ],
    },
    {
      title: 'Hardware',
      icon: Cpu,
      skills: [
        { name: 'Raspberry Pi', level: 78 },
        { name: 'IoT', level: 75 },
      ],
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: [
        { name: 'VS Code', level: 92 },
        { name: 'Git', level: 88 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-32 relative" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-blue-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-4">Tools I use to bring ideas to life</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {skillCategories.map((category, catIndex) => {
              const Icon = category.icon;
              return (
                <div
                  key={catIndex}
                  className="group relative"
                  style={{ animationDelay: `${catIndex * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                        <Icon className="text-white" size={24} />
                      </div>
                      <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    </div>

                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex}>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-gray-300 font-medium">{skill.name}</span>
                            <span className="text-orange-400 text-sm font-semibold">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r from-orange-500 to-blue-500 rounded-full transition-all duration-1000 ease-out ${
                                isVisible ? 'w-full' : 'w-0'
                              }`}
                              style={{
                                width: isVisible ? `${skill.level}%` : '0%',
                                transitionDelay: `${(catIndex * 100) + (skillIndex * 100)}ms`,
                              }}
                            >
                              <div className="h-full w-full bg-white opacity-30 animate-pulse"></div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 rounded-full">
              <GitBranch className="text-orange-500" size={20} />
              <span className="text-gray-300">Always learning, always growing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
