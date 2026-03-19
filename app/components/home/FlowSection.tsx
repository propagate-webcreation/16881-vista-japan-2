const steps = [
  {
    number: "01",
    title: "お問い合わせ",
    text: "フォームまたは電話で、導入予定の店舗や活用イメージを共有いただきます。",
  },
  {
    number: "02",
    title: "オンライン相談・ヒアリング",
    text: "業種、立地、通行量、見せたい情報を整理し、最適な機種と運用イメージを提案します。",
  },
  {
    number: "03",
    title: "設置場所の確認",
    text: "店頭や窓際など、視認性が高く運用しやすい設置場所を確認します。",
  },
  {
    number: "04",
    title: "お申込み",
    text: "契約期間や料金、導入スケジュールを確認したうえでお申込みに進みます。",
  },
  {
    number: "05",
    title: "LEDビジョン発送",
    text: "最短数日で発送し、現地で受け取れる状態までスムーズに手配します。",
  },
  {
    number: "06",
    title: "動画コンテンツ設定",
    text: "オリジナル動画の制作や初期コンテンツ設定を行い、配信状態を整えます。",
  },
  {
    number: "07",
    title: "運用開始",
    text: "設置後すぐに集客用の動く看板として活用でき、必要な更新もスマホで行えます。",
  },
];

export default function FlowSection() {
  return (
    <section id="flow" className="bg-base py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-3xl">
          <p className="font-[family:var(--font-display)] text-sm font-semibold tracking-[0.18em] text-primary">
            FLOW
          </p>
          <h2 className="mt-4 text-[30px] font-bold leading-[1.35] text-ink md:text-[42px]">
            お問い合わせから、
            <br />
            最短数日で運用開始。
          </h2>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-[24px] border border-divider bg-surface p-6"
            >
              <p className="font-[family:var(--font-display)] text-sm font-bold tracking-[0.14em] text-primary">
                STEP {step.number}
              </p>
              <h3 className="mt-3 text-xl font-bold text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink-soft md:text-[15px]">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
