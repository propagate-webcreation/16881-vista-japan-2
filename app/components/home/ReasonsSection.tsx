import {
  Banknote,
  Plug,
  BadgeCheck,
  Smartphone,
  Eye,
  HeadsetIcon,
} from "lucide-react";

const reasons = [
  {
    icon: Banknote,
    title: "初期費用0円で導入可能",
    description: "月額料金のみで手軽にスタート。設備投資のリスクなく導入できます。",
  },
  {
    icon: Plug,
    title: "工事不要、置くだけ",
    description:
      "コンセントに挿すだけで設置完了。スタンド型なので移動も自由にできます。",
  },
  {
    icon: BadgeCheck,
    title: "36ヶ月後は資産に",
    description:
      "レンタル終了後はそのまま所有。追加費用なしでLEDビジョンが資産になります。",
  },
  {
    icon: Smartphone,
    title: "スマホで簡単操作",
    description:
      "営業時間やキャンペーン情報をスマートフォンからリアルタイムで更新できます。",
  },
  {
    icon: Eye,
    title: "圧倒的な視認性",
    description:
      "動画で通行人の目を引き、集客力を大幅に向上。看板の何倍もの情報量を伝えます。",
  },
  {
    icon: HeadsetIcon,
    title: "専門会社の安心サポート",
    description:
      "LEDビジョン専門7年以上の知見で、導入から運用までしっかりサポートいたします。",
  },
];

const comparisonItems = [
  {
    label: "初期費用",
    general: "約30万〜200万円",
    rental: "0円",
  },
  {
    label: "工事",
    general: "必要",
    rental: "不要",
  },
  {
    label: "契約期間",
    general: "5〜7年リース",
    rental: "最短1ヶ月",
  },
  {
    label: "途中解約",
    general: "不可",
    rental: "可能",
  },
  {
    label: "コンテンツ制作",
    general: "別料金",
    rental: "サポートあり",
  },
  {
    label: "導入まで",
    general: "1〜2ヶ月",
    rental: "最短数日",
  },
];

export default function ReasonsSection() {
  return (
    <section id="reasons" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-heading text-2xl md:text-3xl font-bold text-center mb-12">
          選ばれる理由
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div key={reason.title} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-heading font-bold mb-1">
                    {reason.title}
                  </h3>
                  <p className="text-muted text-sm text-left">
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <h3 className="text-heading text-xl md:text-2xl font-bold text-center mb-8">
          一般的なLEDビジョン導入との比較
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px] border border-divider rounded text-sm">
            <thead>
              <tr className="bg-surface">
                <th className="border-b border-divider px-4 py-3 text-left text-heading font-bold">
                  比較項目
                </th>
                <th className="border-b border-divider px-4 py-3 text-center text-muted font-bold">
                  一般的なLEDビジョン
                </th>
                <th className="border-b border-divider px-4 py-3 text-center text-primary font-bold">
                  レンタルビジョン
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonItems.map((item) => (
                <tr key={item.label} className="border-b border-divider last:border-b-0">
                  <td className="px-4 py-3 text-heading font-bold">
                    {item.label}
                  </td>
                  <td className="px-4 py-3 text-center text-muted">
                    {item.general}
                  </td>
                  <td className="px-4 py-3 text-center text-primary font-bold">
                    {item.rental}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
