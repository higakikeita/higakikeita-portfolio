import Link from "next/link";

interface Project {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  link?: string;
  stars?: number;
}

const projects: Project[] = [
  {
    name: "tfdrift-falco",
    description: "Infrastructure drift detection using Terraform and Falco. Detects unauthorized changes to cloud infrastructure in real-time.",
    tech: ["Terraform", "Falco", "Kubernetes", "Security"],
    github: "https://github.com/higakikeita/tfdrift-falco",
    stars: 0, // TODO: 実際のStar数に更新
  },
  // TODO: 他のOSSプロジェクトを追加
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-sm z-50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-white hover:text-blue-400 transition">
              Keita Higaki
            </Link>
            <div className="flex gap-6">
              <Link href="/#about" className="text-slate-300 hover:text-white transition">About</Link>
              <Link href="/publications" className="text-slate-300 hover:text-white transition">Publications</Link>
              <Link href="/talks" className="text-slate-300 hover:text-white transition">Talks</Link>
              <Link href="/projects" className="text-white font-semibold">Projects</Link>
              <Link href="/articles" className="text-slate-300 hover:text-white transition">Articles</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-4">OSS Projects</h1>
          <p className="text-xl text-slate-300 mb-12">Open-source contributions and community projects</p>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800 p-8 rounded-lg hover:bg-slate-700 transition">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-2">{project.name}</h2>
                    {project.stars !== undefined && (
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-yellow-400">⭐</span>
                        <span className="text-slate-400 text-sm">{project.stars} stars</span>
                      </div>
                    )}
                  </div>
                  <span className="text-4xl">🚀</span>
                </div>
                <p className="text-slate-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded transition"
                    >
                      View on GitHub →
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded transition"
                    >
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contribution Stats */}
          <div className="mt-16 bg-slate-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-6">Open Source Contributions</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">10+</div>
                <div className="text-slate-400">Repositories</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">50+</div>
                <div className="text-slate-400">Contributions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">5+</div>
                <div className="text-slate-400">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
