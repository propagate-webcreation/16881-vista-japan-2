import Link from "next/link";

const navItems = [
  { label: "課題と解決", href: "#why" },
  { label: "商品・料金", href: "#service" },
  { label: "活用シーン", href: "#scenes" },
  { label: "導入比較", href: "#comparison" },
  { label: "導入の流れ", href: "#flow" },
  { label: "導入実績", href: "#results" },
  { label: "FAQ", href: "#faq" },
  { label: "会社概要", href: "#company" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-deep">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="flex flex-col gap-8 border-b border-white/15 pb-8 md:flex-row md:justify-between">
          <div className="max-w-md">
            <Link
              href="/"
              className="font-[family:var(--font-display)] text-2xl font-bold tracking-[0.08em] text-white"
            >
              RENTAL VISION
            </Link>
            <p className="mt-3 text-sm leading-7 text-white/72">
              Vista Japan株式会社②
              <br />
              初期費用0円で始められる、店舗向けLEDビジョンの全国対応レンタルサービス。
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/72 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-6 flex flex-col gap-2 text-sm text-white/62 md:flex-row md:items-center md:justify-between">
          <p>電話: 050-3565-4007 / Mail: info@vista-japan.com</p>
          <p>© 2026 Vista Japan株式会社②</p>
        </div>
      </div>
    </footer>
  );
}
