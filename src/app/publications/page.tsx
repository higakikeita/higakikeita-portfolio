import Link from "next/link";

interface Publication {
  title: string;
  role: string;
  publisher: string;
  year: number;
  description: string;
  link?: string;
}

const publications: Publication[] = [
  // TODO: あなたの著書・寄稿をここに追加
  // 例:
  // {
  //   title: "クラウドネイティブセキュリティ実践ガイド",
  //   role: "共著（第3章：Kubernetesセキュリティ執筆）",
  //   publisher: "技術評論社",
  //   year: 2024,
  //   description: "Kubernetesやクラウド環境におけるセキュリティ設計・運用のベストプラクティスを解説。Sysdig、Falco、IaCを活用した実践内容も紹介。",
  //   link: "https://example.com"
  // },
];

export default function Publications() {
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
              <Link href="/publications" className="text-white font-semibold">Publications</Link>
              <Link href="/talks" className="text-slate-300 hover:text-white transition">Talks</Link>
              <Link href="/projects" className="text-slate-300 hover:text-white transition">Projects</Link>
              <Link href="/articles" className="text-slate-300 hover:text-white transition">Articles</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-4">Publications</h1>
          <p className="text-xl text-slate-300 mb-12">Books, technical articles, and industry contributions</p>

          {publications.length === 0 ? (
            <div className="bg-slate-800 p-8 rounded-lg text-center">
              <p className="text-slate-400">Publications will be added soon. Stay tuned!</p>
            </div>
          ) : (
            <div className="space-y-8">
              {publications.map((pub, index) => (
                <div key={index} className="bg-slate-800 p-8 rounded-lg hover:bg-slate-700 transition">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-2">{pub.title}</h2>
                      <p className="text-blue-400 font-semibold mb-1">{pub.role}</p>
                      <p className="text-slate-400">
                        {pub.publisher} • {pub.year}
                      </p>
                    </div>
                    <span className="text-4xl">📘</span>
                  </div>
                  <p className="text-slate-300 mb-4">{pub.description}</p>
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded transition"
                    >
                      View Publication →
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
