import Link from "next/link";
import { Phone, Mail } from "lucide-react";

const navItems = [
  { label: "サービス", href: "#service" },
  { label: "選ばれる理由", href: "#reasons" },
  { label: "ご利用の流れ", href: "#flow" },
  { label: "導入実績", href: "#results" },
  { label: "よくある質問", href: "#faq" },
  { label: "会社概要", href: "#company" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div>
            <Link
              href="/"
              className="text-xl font-bold tracking-wide text-white"
            >
              Vista Japan
            </Link>
            <p className="text-white/70 text-sm mt-2">Vista Japan株式会社</p>
            <div className="flex flex-col gap-2 mt-4 text-sm text-white/80">
              <span className="inline-flex items-center gap-2">
                <Phone className="w-4 h-4" />
                050-3565-4007
              </span>
              <span className="inline-flex items-center gap-2">
                <Mail className="w-4 h-4" />
                info@vista-japan.com
              </span>
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/70 whitespace-nowrap tracking-wider hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm text-white/50">
          &copy; {new Date().getFullYear()} Vista Japan株式会社 All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
}
