import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-sm z-50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-white">Keita Higaki</div>
            <div className="flex gap-6">
              <Link href="#about" className="text-slate-300 hover:text-white transition">About</Link>
              <Link href="/publications" className="text-slate-300 hover:text-white transition">Publications</Link>
              <Link href="/talks" className="text-slate-300 hover:text-white transition">Talks</Link>
              <Link href="/projects" className="text-slate-300 hover:text-white transition">Projects</Link>
              <Link href="/articles" className="text-slate-300 hover:text-white transition">Articles</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Cloud Security & DevOps Engineer
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              Sysdig CSE | Kubernetes | Terraform | Security
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/higakikeita"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/keita-higaki"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-slate-300 space-y-4">
              <p className="text-lg">
                Customer Success Engineer at Sysdig Japan, specializing in cloud-native security, Kubernetes, and DevSecOps.
              </p>
              <p>
                I work with enterprise customers including IIJ, SCSK, and Square Enix to implement comprehensive security solutions
                across their Kubernetes and container environments.
              </p>
              <p>
                Active OSS contributor, particularly in the Falco ecosystem and infrastructure-as-code tooling.
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Core Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {["Kubernetes", "Terraform", "AWS", "GCP", "Falco", "Security", "DevOps", "IaC", "Observability"].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-slate-700 text-slate-200 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Highlights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/publications" className="group">
              <div className="bg-slate-800 p-8 rounded-lg hover:bg-slate-700 transition h-full">
                <div className="text-4xl mb-4">📘</div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition">Publications</h3>
                <p className="text-slate-300">Books, technical articles, and contributions to industry publications</p>
              </div>
            </Link>
            <Link href="/talks" className="group">
              <div className="bg-slate-800 p-8 rounded-lg hover:bg-slate-700 transition h-full">
                <div className="text-4xl mb-4">🎤</div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition">Talks & Events</h3>
                <p className="text-slate-300">Conference talks, workshops, and technical demonstrations</p>
              </div>
            </Link>
            <Link href="/projects" className="group">
              <div className="bg-slate-800 p-8 rounded-lg hover:bg-slate-700 transition h-full">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition">OSS Projects</h3>
                <p className="text-slate-300">Open-source contributions and community projects</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-700">
        <div className="max-w-7xl mx-auto text-center text-slate-400">
          <p>&copy; 2025 Keita Higaki. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
