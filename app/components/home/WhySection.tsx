import { AlertTriangle, Search, HandCoins, Megaphone } from "lucide-react";

const problems = [
  {
    icon: Search,
    title: "店の存在に気づかれない",
    text: "看板だけでは何のお店か伝わらず、通行人の視線を取りこぼしてしまう。",
  },
  {
    icon: Megaphone,
    title: "情報量が足りない",
    text: "営業時間、キャンペーン、求人情報まで出したいのに、静止看板では伝えきれない。",
  },
  {
    icon: HandCoins,
    title: "高額投資が重い",
    text: "一般的なLEDビジョンは初期費用や工事費が高く、長期契約も導入の壁になる。",
  },
  {
    icon: AlertTriangle,
    title: "広告効果が見えにくい",
    text: "チラシやポスティングの反応が落ち、別の集客導線が必要になっている。",
  },
];

export default function WhySection() {
  return (
    <section id="why" className="bg-base py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
          <div>
            <p className="font-[family:var(--font-display)] text-sm font-semibold tracking-[0.18em] text-primary">
              WHY VISTA JAPAN
            </p>
            <h2 className="mt-4 text-[30px] font-bold leading-[1.35] text-ink md:text-[42px]">
              良い店が、
              <br />
              見つけられていない。
            </h2>
            <p className="mt-6 text-base leading-8 text-ink-soft md:text-[17px]">
              Vista Japan株式会社②は、LEDビジョン専門会社として7年以上にわたり販売・施工を行う中で、
              「通行人に気づかれていない店舗」が非常に多い現実を見てきました。
            </p>
            <p className="mt-4 text-base leading-8 text-ink-soft md:text-[17px]">
              そこで、初期費用0円、最短1カ月から使えて、36カ月後には資産になるレンタルビジョンを立ち上げました。高額投資なしで、動く看板をもっと身近にするためのサービスです。
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {problems.map((problem) => {
              const Icon = problem.icon;
              return (
                <article
                  key={problem.title}
                  className="rounded-[24px] border border-divider bg-surface p-6"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-[16px] border border-primary/18 bg-white">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-ink">
                    {problem.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-ink-soft md:text-[15px]">
                    {problem.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
