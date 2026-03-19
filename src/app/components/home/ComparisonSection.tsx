import Link from "next/link";
import { ArrowRight, BadgeCheck, Clock3, Smartphone } from "lucide-react";

const strengths = [
  {
    icon: BadgeCheck,
    title: "LEDビジョン専門会社の運用支援",
    text: "販売・施工100台以上の経験をベースに、設置場所の確認から導入後の相談まで継続サポートします。",
  },
  {
    icon: Clock3,
    title: "最短数日でスタート",
    text: "お問い合わせから発送、動画設定、運用開始までをオンライン中心で進められるため、長い待機期間がありません。",
  },
  {
    icon: Smartphone,
    title: "情報更新が簡単",
    text: "動画・静止画・文字を使い分け、営業時間、採用情報、キャンペーンをスマホで即時変更できます。",
  },
];

const comparisonRows = [
  ["初期費用", "約30万円〜200万円", "0円"],
  ["工事", "必要", "不要"],
  ["契約期間", "5年〜7年リース", "最短1カ月"],
  ["途中解約", "不可", "可能"],
  ["コンテンツ制作", "別料金", "サポートあり"],
  ["導入まで", "1〜2カ月", "最短数日"],
];

export default function ComparisonSection() {
  return (
    <section id="comparison" className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="font-[family:var(--font-display)] text-sm font-semibold tracking-[0.18em] text-primary">
              HOW WE DIFFER
            </p>
            <h2 className="mt-4 text-[30px] font-bold leading-[1.35] text-ink md:text-[42px]">
              一般的な導入より、
              <br />
              軽く始めて、長く使える。
            </h2>
            <p className="mt-5 text-base leading-8 text-ink-soft md:text-[17px]">
              高額な初期投資や長期契約がネックで導入できなかった店舗でも、レンタルビジョンなら月額制で始めやすく、36カ月後は資産として残せます。
            </p>

            <div className="mt-8 grid gap-4">
              {strengths.map((strength) => {
                const Icon = strength.icon;
                return (
                  <article
                    key={strength.title}
                    className="rounded-[22px] border border-divider bg-white p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-[14px] border border-primary/18 bg-surface">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-ink">
                          {strength.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-ink-soft md:text-[15px]">
                          {strength.text}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="rounded-[28px] border border-divider bg-white p-5 md:p-7">
            <h3 className="text-xl font-bold text-ink md:text-2xl">
              一般的なLEDビジョン導入との比較
            </h3>
            <div className="mt-6 overflow-x-auto">
              <table className="min-w-full border border-divider text-left text-sm md:text-[15px]">
                <thead className="bg-surface">
                  <tr>
                    <th className="border-b border-divider px-4 py-4 font-bold text-ink">
                      比較項目
                    </th>
                    <th className="border-b border-divider px-4 py-4 font-bold text-ink-soft">
                      一般的な導入
                    </th>
                    <th className="border-b border-divider px-4 py-4 font-bold text-primary">
                      レンタルビジョン
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map(([label, general, rental]) => (
                    <tr key={label} className="border-b border-divider last:border-b-0">
                      <th className="px-4 py-4 font-bold text-ink">{label}</th>
                      <td className="px-4 py-4 text-ink-soft">{general}</td>
                      <td className="px-4 py-4 font-bold text-primary">{rental}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Link
              href="#contact"
              className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-[18px] bg-accent px-6 py-4 text-base font-bold text-white hover:bg-accent-dark"
            >
              導入可否を相談する
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
