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
  {
    title: "Falco実践ガイドシリーズ",
    role: "著者",
    publisher: "Zenn Book",
    year: 2024,
    description: "クラウドネイティブランタイムセキュリティツールFalcoの実践的な使い方を解説。Sysdig CSEとしての実務経験をもとに、実際の顧客環境で発生したインシデント事例や、Falcoルールのカスタマイズ、運用ノウハウを詳しく紹介。Kubernetes環境でのセキュリティ監視を実装したいエンジニア必読の一冊。",
    link: "https://zenn.dev/keitah0322/books/falco-practice-series"
  },
  {
    title: "AWS認定 高度なネットワーキング - 専門知識 (ANS-C01) 完全対応テキスト",
    role: "共著・技術レビュー",
    publisher: "技術評論社",
    year: 2024,
    description: "AWS認定資格「高度なネットワーキング - 専門知識 (ANS-C01)」の完全対応テキスト。AWSのネットワーク設計、Direct Connect、VPN、Transit Gateway、Route 53など、高度なネットワーキングサービスの設計と実装を詳しく解説。実務で役立つベストプラクティスも豊富に掲載。",
    link: "https://www.amazon.co.jp/dp/4865944087"
  },
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
