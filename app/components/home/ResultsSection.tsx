import Image from "next/image";

const stats = [
  { value: "100", unit: "社以上", label: "導入相談実績" },
  { value: "7", unit: "年以上", label: "営業経験" },
  { value: "10", unit: "業種以上", label: "対応業種" },
];

const cases = [
  {
    image: "/images/case-restaurant.webp",
    alt: "飲食店でのLEDビジョン活用例",
    industry: "飲食店",
    description: "店舗前の通行人を取り込み、新規来店率が向上。メニューやキャンペーン情報を動画で訴求し、客足が増加しました。",
  },
  {
    image: "/images/case-salon.webp",
    alt: "美容室でのLEDビジョン活用例",
    industry: "美容室",
    description: "施術メニューやキャンペーンを動画で表示。通りがかりのお客様からの予約が増え、新規客の獲得に成功しました。",
  },
  {
    image: "/images/case-school.webp",
    alt: "学習塾でのLEDビジョン活用例",
    industry: "学習塾",
    description: "入塾案内や合格実績を動画で表示。保護者や学生の目に留まり、問い合わせ件数が大幅に増加しました。",
  },
];

export default function ResultsSection() {
  return (
    <section id="results" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-heading text-2xl md:text-3xl font-bold text-center mb-12">
          導入実績
        </h2>

        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-16 max-w-2xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-primary text-3xl md:text-4xl font-bold">
                {stat.value}
                <span className="text-lg md:text-xl">{stat.unit}</span>
              </p>
              <p className="text-muted text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <p className="text-muted text-center mb-8 text-left md:text-center">
          飲食店・美容室・整骨院・薬局・学習塾・寺院・不動産会社・運送会社・イベント施設・スポーツ施設など、幅広い業種でLEDビジョンの導入を行ってまいりました。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((item) => (
            <div
              key={item.industry}
              className="border border-divider rounded overflow-hidden bg-white"
            >
              <div className="relative w-full aspect-[4/3] max-h-[240px]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded mb-2">
                  {item.industry}
                </span>
                <p className="text-body text-sm text-left">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
