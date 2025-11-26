import Link from "next/link";

interface Article {
  title: string;
  platform: "Zenn" | "Qiita" | "Note" | "LinkedIn" | "Sysdig Blog" | "Other";
  date: string;
  description: string;
  link: string;
  tags: string[];
}

const articles: Article[] = [
  {
    title: "クラウド人図鑑 エピソード 6 – 檜垣慶太さん",
    platform: "Other",
    date: "2024-07",
    description: "Momento主催のクラウド人図鑑シリーズに出演。オンプレミスからクラウド移行の経験、クラウドコスト最適化の考え方、ユースケースに応じた適切なアーキテクチャ構築の哲学について語る。AWS Japan・Google CloudからTop Engineerとして認定された経歴を持つクラウドアーキテクト。",
    link: "https://www.gomomento.com/jp/resources/blog-jp/cloud-people-encyclopedia-episode-6/",
    tags: ["Interview", "Cloud", "AWS", "Google Cloud", "Architecture"]
  },
  {
    title: "制度の活用で"つながりを広げ、未来を切り拓く" – iret テクニカルアンバサダーインタビュー",
    platform: "Other",
    date: "2024-09",
    description: "2024年度iret Advanced Technical Ambassadorとして紹介。TAMグループリーダーとしての役割、顧客課題解決へのアプローチ、社内でのタレント育成への取り組みについて語る。AWSトレーニングのメンターシップなど、テクニカルアンバサダープログラムを通じた活動を紹介。",
    link: "https://iret.media/121848",
    tags: ["Interview", "Career", "Technical Ambassador", "Leadership"]
  },
];

const platformColors = {
  "Zenn": "bg-blue-500",
  "Qiita": "bg-green-600",
  "Note": "bg-purple-600",
  "LinkedIn": "bg-blue-700",
  "Sysdig Blog": "bg-pink-600",
  "Other": "bg-gray-600",
};

export default function Articles() {
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
              <Link href="/projects" className="text-slate-300 hover:text-white transition">Projects</Link>
              <Link href="/articles" className="text-white font-semibold">Articles</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-4">Technical Articles</h1>
          <p className="text-xl text-slate-300 mb-12">Blog posts, tutorials, and technical writing</p>

          {articles.length === 0 ? (
            <div className="bg-slate-800 p-8 rounded-lg text-center">
              <p className="text-slate-400">Articles will be added soon. Stay tuned!</p>
            </div>
          ) : (
            <div className="space-y-8">
              {articles.map((article, index) => (
                <div key={index} className="bg-slate-800 p-8 rounded-lg hover:bg-slate-700 transition">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-3 py-1 ${platformColors[article.platform]} text-white text-sm rounded-full`}>
                          {article.platform}
                        </span>
                        <span className="text-slate-400 text-sm">{article.date}</span>
                      </div>
                      <h2 className="text-2xl font-bold text-white mb-2">{article.title}</h2>
                    </div>
                    <span className="text-4xl">✍️</span>
                  </div>
                  <p className="text-slate-300 mb-4">{article.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded transition"
                  >
                    Read Article →
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
