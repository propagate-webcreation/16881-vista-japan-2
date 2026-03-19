const companyInfo = [
  { label: "会社名", value: "Vista Japan株式会社" },
  { label: "代表者", value: "代表取締役 渡辺英樹" },
  { label: "設立", value: "2020年3月2日" },
  {
    label: "本社",
    value:
      "〒538-0037 大阪府大阪市鶴見区焼野2丁目4-25 TEL 06-7777-3991",
  },
  {
    label: "東日本支店",
    value:
      "〒971-8101 福島県いわき市小名浜字古湊39番地 TEL 0246-38-3701",
  },
  {
    label: "浜松支店",
    value:
      "〒430-0926 静岡県浜松市中区砂山町335-4 ハマキョウレックス浜松駅南ビル4F TEL 053-541-7532",
  },
  {
    label: "神奈川支店",
    value:
      "〒243-0033 神奈川県厚木市温水2042-1 2-101 TEL 046-244-0593",
  },
  { label: "電話番号", value: "050-3565-4007" },
  { label: "メールアドレス", value: "info@vista-japan.com" },
  { label: "営業時間", value: "10:00〜17:00" },
  {
    label: "事業内容",
    value:
      "LED事業【AXLEAD】運営、LEDビジョンの輸入・販売・設置・保守、プロモーション映像制作",
  },
  {
    label: "建設業許可",
    value: "大阪府知事 許可(般-7)第163700号 電気工事業",
  },
];

export default function CompanySection() {
  return (
    <section id="company" className="py-16 md:py-24 bg-surface">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-heading text-2xl md:text-3xl font-bold text-center mb-12">
          会社概要
        </h2>

        <dl className="border border-divider rounded bg-white overflow-hidden">
          {companyInfo.map((item, index) => (
            <div
              key={item.label}
              className={`flex flex-col md:flex-row ${
                index < companyInfo.length - 1
                  ? "border-b border-divider"
                  : ""
              }`}
            >
              <dt className="bg-surface px-5 py-3 md:py-4 md:w-40 shrink-0 text-heading font-bold text-sm">
                {item.label}
              </dt>
              <dd className="px-5 py-2 md:py-4 text-body text-sm">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-8">
          <h3 className="text-heading font-bold mb-4">アクセス（本社）</h3>
          <div className="rounded overflow-hidden border border-divider">
            <iframe
              src="https://maps.google.com/maps?q=%E5%A4%A7%E9%98%AA%E5%BA%9C%E5%A4%A7%E9%98%AA%E5%B8%82%E9%B6%B4%E8%A6%8B%E5%8C%BA%E7%84%BC%E9%87%8E2%E4%B8%81%E7%9B%AE4-25&t=m&z=15&ie=UTF8&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vista Japan株式会社 本社所在地"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
