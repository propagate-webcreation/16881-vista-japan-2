"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "サービス", href: "#service" },
  { label: "選ばれる理由", href: "#reasons" },
  { label: "ご利用の流れ", href: "#flow" },
  { label: "導入実績", href: "#results" },
  { label: "会社概要", href: "#company" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-divider z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link
          href="/"
          className="text-lg font-bold text-heading tracking-wide whitespace-nowrap"
        >
          Vista Japan
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-body whitespace-nowrap tracking-wider hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-cta text-white px-5 py-2.5 rounded-md text-sm font-bold whitespace-nowrap tracking-wider hover:bg-cta-dark"
          >
            お問い合わせ
          </Link>
        </nav>

        <button
          className="md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-heading" />
          ) : (
            <Menu className="w-6 h-6 text-heading" />
          )}
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden border-t border-divider bg-white">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-body py-2 whitespace-nowrap tracking-wider"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-cta text-white px-5 py-3 rounded-md font-bold whitespace-nowrap tracking-wider hover:bg-cta-dark"
              onClick={() => setIsOpen(false)}
            >
              お問い合わせ
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
