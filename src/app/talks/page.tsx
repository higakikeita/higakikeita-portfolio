import Link from "next/link";

interface Talk {
  title: string;
  event: string;
  date: string;
  type: "Conference" | "Lightning Talk" | "Workshop" | "Booth" | "Webinar";
  description: string;
  slides?: string;
  video?: string;
}

const talks: Talk[] = [
  // TODO: あなたの登壇実績をここに追加
  // 例:
  // {
  //   title: "Terraform×Falcoで始めるInfra Drift Detection",
  //   event: "CloudNative Days Tokyo 2024",
  //   date: "2024-12",
  //   type: "Lightning Talk",
  //   description: "GitHub OSS \"tfdrift-falco\" のコンセプトと実装事例を紹介",
  //   slides: "https://speakerdeck.com/...",
  // },
  // {
  //   title: "Sysdig Secure/Monitor Live Demo",
  //   event: "Architecture 2025 - Expo Booth",
  //   date: "2025-01",
  //   type: "Booth",
  //   description: "エンタープライズ向け Sysdig Secure/Monitor のライブデモ担当。Prometheus v2, Falco, KSPM, Vulnerability Lifecycleを紹介。",
  // },
];

const typeColors = {
  "Conference": "bg-purple-600",
  "Lightning Talk": "bg-blue-600",
  "Workshop": "bg-green-600",
  "Booth": "bg-orange-600",
  "Webinar": "bg-pink-600",
};

export default function Talks() {
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
              <Link href="/talks" className="text-white font-semibold">Talks</Link>
              <Link href="/projects" className="text-slate-300 hover:text-white transition">Projects</Link>
              <Link href="/articles" className="text-slate-300 hover:text-white transition">Articles</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-4">Talks & Speaking</h1>
          <p className="text-xl text-slate-300 mb-12">Conference talks, workshops, and technical demonstrations</p>

          {talks.length === 0 ? (
            <div className="bg-slate-800 p-8 rounded-lg text-center">
              <p className="text-slate-400">Speaking engagements will be added soon. Stay tuned!</p>
            </div>
          ) : (
            <div className="space-y-8">
              {talks.map((talk, index) => (
                <div key={index} className="bg-slate-800 p-8 rounded-lg hover:bg-slate-700 transition">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-3 py-1 ${typeColors[talk.type]} text-white text-sm rounded-full`}>
                          {talk.type}
                        </span>
                        <span className="text-slate-400 text-sm">{talk.date}</span>
                      </div>
                      <h2 className="text-2xl font-bold text-white mb-2">{talk.title}</h2>
                      <p className="text-blue-400 font-semibold mb-2">{talk.event}</p>
                    </div>
                    <span className="text-4xl">🎤</span>
                  </div>
                  <p className="text-slate-300 mb-4">{talk.description}</p>
                  <div className="flex gap-3">
                    {talk.slides && (
                      <a
                        href={talk.slides}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded transition"
                      >
                        View Slides →
                      </a>
                    )}
                    {talk.video && (
                      <a
                        href={talk.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded transition"
                      >
                        Watch Video →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
