const companyRows = [
  ["会社名", "Vista Japan株式会社②"],
  ["代表者", "代表取締役 渡辺英樹"],
  ["設立", "2020年3月2日"],
  ["電話番号", "050-3565-4007"],
  ["メールアドレス", "info@vista-japan.com"],
  ["営業時間", "10:00〜17:00"],
  ["対応エリア", "全国・オンライン"],
  [
    "本社",
    "〒538-0037 大阪府大阪市鶴見区焼野2丁目4−25 / TEL 06-7777-3991",
  ],
  [
    "東日本支店",
    "〒971-8101 福島県いわき市小名浜字古湊39番地 / TEL 0246-38-3701",
  ],
  [
    "浜松支店",
    "〒430-0926 静岡県浜松市中央区砂山町335-4 ハマキョウレックス浜松駅南ビル4F / TEL 053-541-7532",
  ],
  [
    "神奈川支店",
    "〒243-0033 神奈川県厚木市温水2042-1 2-101 / TEL 046-244-0593",
  ],
  [
    "事業内容",
    "LED事業【AXLEAD】運営、LEDを利用した表示機の輸入・販売・設置・保守、プロモーション映像制作",
  ],
  [
    "建設業許可",
    "大阪府知事 許可(般-7)第163700号 電気工事業",
  ],
];

export default function CompanySection() {
  return (
    <section id="company" className="bg-base py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-3xl">
          <p className="font-[family:var(--font-display)] text-sm font-semibold tracking-[0.18em] text-primary">
            COMPANY
          </p>
          <h2 className="mt-4 text-[30px] font-bold leading-[1.35] text-ink md:text-[42px]">
            全国対応できる体制で、
            <br />
            導入後まで支える。
          </h2>
        </div>

        <div className="mt-10 overflow-hidden rounded-[24px] border border-divider bg-surface">
          <dl>
            {companyRows.map(([label, value], index) => (
              <div
                key={label}
                className={`grid gap-2 px-5 py-5 md:grid-cols-[180px_1fr] md:px-7 ${
                  index !== companyRows.length - 1
                    ? "border-b border-divider"
                    : ""
                }`}
              >
                <dt className="text-sm font-bold text-ink">{label}</dt>
                <dd className="text-sm leading-7 text-ink-soft md:text-[15px]">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
