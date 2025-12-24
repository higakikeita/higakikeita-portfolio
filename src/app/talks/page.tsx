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
  {
    title: "AI Security Conference",
    event: "AI Security Conference 2026",
    date: "2026-01",
    type: "Conference",
    description: "ファインディ株式会社が主催するAI時代のセキュリティカンファレンス。AI活用が当たり前になった時代における組織のセキュリティ戦略について、最新の事例と知見を共有。",
    slides: "https://ai-security-con.findy-tools.io/2026/timetable"
  },
  {
    title: "Google Cloud で目指すクラウド二刀流エンジニア講座",
    event: "Google Cloud Official Event",
    date: "2025-06",
    type: "Webinar",
    description: "Google Cloud公式イベントにゲストスピーカーとして登壇。AWSとGoogle Cloudの両方を使いこなす「二刀流エンジニア」を目指すための講座。マルチクラウド環境での実践的なノウハウを共有。",
    slides: "https://cloudpack.jp/info/20250523-2.html"
  },
  {
    title: "マルチクラウド環境におけるコスト最適化持続的サイクルの構築",
    event: "ServerlessDays Tokyo 2024",
    date: "2024-10",
    type: "Conference",
    description: "マルチクラウド（Google Cloud・AWS）環境での継続的なコスト最適化戦略を解説。サーバーレスアーキテクチャへの移行事例、技術選定の根拠、実装詳細、利用予測、予算計画について、実際のケーススタディを交えて発表。FinOpsの実践的な要素についても、チームの経験をもとに共有。",
    slides: "https://tokyo.serverlessdays.io/2024/speakers/detail-higaki.html"
  },
  // TODO: 他の登壇実績を追加
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
