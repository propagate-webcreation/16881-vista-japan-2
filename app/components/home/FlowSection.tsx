const steps = [
  { num: 1, title: "お問い合わせ", description: "お電話またはフォームからお気軽にご連絡ください。" },
  { num: 2, title: "オンライン相談・ヒアリング", description: "ご要望や設置環境をオンラインでお伺いします。" },
  { num: 3, title: "設置場所の確認", description: "最適なビジョンと設置場所をご提案いたします。" },
  { num: 4, title: "お申込み", description: "プランとお見積りにご納得いただけましたらお申込みへ。" },
  { num: 5, title: "LEDビジョン発送", description: "お申込み後、速やかにLEDビジョンをお届けします。" },
  { num: 6, title: "動画コンテンツ設定", description: "オリジナル動画の制作・設定をサポートいたします。" },
  { num: 7, title: "運用開始", description: "コンセントに挿して設置するだけ。すぐに集客スタートできます。" },
];

export default function FlowSection() {
  return (
    <section id="flow" className="py-16 md:py-24 bg-surface">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-heading text-2xl md:text-3xl font-bold text-center mb-12">
          ご利用の流れ
        </h2>

        <div className="flex flex-col gap-0">
          {steps.map((step, index) => (
            <div key={step.num} className="flex gap-4 md:gap-6">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                  {step.num}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-px h-full min-h-[40px] bg-divider" />
                )}
              </div>
              <div className="pb-8">
                <h3 className="text-heading font-bold mb-1">{step.title}</h3>
                <p className="text-muted text-sm text-left">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-4 text-primary font-bold text-lg">
          最短数日で利用開始可能
        </p>
      </div>
    </section>
  );
}
