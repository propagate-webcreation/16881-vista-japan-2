"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "課題と解決", href: "#why" },
  { label: "商品・料金", href: "#service" },
  { label: "活用シーン", href: "#scenes" },
  { label: "導入比較", href: "#comparison" },
  { label: "導入実績", href: "#results" },
  { label: "FAQ", href: "#faq" },
  { label: "会社概要", href: "#company" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-divider bg-white/96">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-18 md:px-6">
        <Link
          href="/"
          className="font-[family:var(--font-display)] text-lg font-bold tracking-[0.08em] text-ink md:text-xl"
        >
          RENTAL VISION
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-soft hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[16px] bg-accent px-5 py-3 text-sm font-bold text-white hover:bg-accent-dark"
          >
            お問い合わせ
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[14px] border border-divider text-ink md:hidden"
          aria-expanded={isOpen}
          aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-divider bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-[14px] border border-divider px-4 py-3 text-sm font-medium text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex min-h-12 items-center justify-center rounded-[16px] bg-accent px-5 py-3 text-base font-bold text-white hover:bg-accent-dark"
            >
              お問い合わせ
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
