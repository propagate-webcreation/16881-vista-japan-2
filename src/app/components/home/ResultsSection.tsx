import Image from "next/image";

const stats = [
  { value: "100+", label: "導入相談実績" },
  { value: "7+", label: "LEDビジョン営業経験" },
  { value: "10+", label: "対応業種" },
];

const cases = [
  {
    image: "/images/case-restaurant.webp",
    alt: "飲食店に設置されたLEDビジョン",
    title: "飲食店",
    text: "店頭でメニューや限定キャンペーンを流し、通行人の認知から来店までの導線づくりに活用。",
  },
  {
    image: "/images/case-salon.webp",
    alt: "美容室に設置されたLEDビジョン",
    title: "美容室",
    text: "施術イメージや季節訴求を動画で見せ、新規予約のきっかけを増やした活用例。",
  },
  {
    image: "/images/case-school.webp",
    alt: "学習塾に設置されたLEDビジョン",
    title: "学習塾",
    text: "授業案内や募集情報を見える化し、店前の通行量を問い合わせに変える入口として活用。",
  },
];

export default function ResultsSection() {
  return (
    <section id="results" className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-3xl">
          <p className="font-[family:var(--font-display)] text-sm font-semibold tracking-[0.18em] text-primary">
            SOCIAL PROOF
          </p>
          <h2 className="mt-4 text-[30px] font-bold leading-[1.35] text-ink md:text-[42px]">
            販売・施工で培った実績を、
            <br />
            レンタルサービスに。
          </h2>
          <p className="mt-5 text-base leading-8 text-ink-soft md:text-[17px]">
            レンタルビジョン自体は新しいサービスですが、Vista Japan株式会社②はLEDビジョン専門会社として全国で100台以上の導入実績があります。飲食店、美容室、整骨院、薬局、学習塾、不動産会社など幅広い業種に対応してきました。
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-[24px] border border-divider bg-white px-6 py-7"
            >
              <p className="font-[family:var(--font-display)] text-5xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="mt-3 text-sm font-medium text-ink-soft">
                {stat.label}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {cases.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[24px] border border-divider bg-white"
            >
              <div className="relative aspect-[4/3] max-h-[260px]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-sm font-bold tracking-[0.08em] text-primary">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-ink-soft md:text-[15px]">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
