"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "初期費用は本当に0円ですか。",
    answer:
      "はい。初期費用はかからず、月額料金のみで導入できます。高額な設備投資を避けたい店舗でも始めやすい設計です。",
  },
  {
    question: "最短どれくらいで導入できますか。",
    answer:
      "ヒアリング内容と在庫状況によりますが、最短数日で発送から運用開始まで進められます。",
  },
  {
    question: "設置に工事は必要ですか。",
    answer:
      "不要です。スタンド型でコンセントに挿すだけなので、店頭や窓際などに置いて運用できます。",
  },
  {
    question: "動画の内容は後から変更できますか。",
    answer:
      "可能です。スマートフォンから差し替えられるため、営業時間変更、キャンペーン、求人訴求にも使えます。",
  },
  {
    question: "途中で解約できますか。",
    answer:
      "はい。一般的な長期リースとは異なり、柔軟に運用しやすい契約形態です。詳細はご相談時に案内します。",
  },
  {
    question: "36カ月後は資産になるとはどういう意味ですか。",
    answer:
      "36カ月の利用後、LEDビジョンをそのまま自社資産として継続利用できます。追加の買い取り費用は発生しません。",
  },
];

export default function FaqSection() {
  const [openItem, setOpenItem] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-base py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="max-w-3xl">
          <p className="font-[family:var(--font-display)] text-sm font-semibold tracking-[0.18em] text-primary">
            FAQ
          </p>
          <h2 className="mt-4 text-[30px] font-bold leading-[1.35] text-ink md:text-[42px]">
            導入前に多い質問を、
            <br />
            先に整理。
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openItem === index;
            return (
              <div
                key={faq.question}
                className="rounded-[22px] border border-divider bg-surface"
              >
                <button
                  type="button"
                  onClick={() => setOpenItem(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex min-h-12 w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-base font-bold leading-7 text-ink md:text-[18px]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-divider px-5 py-4">
                    <p className="text-sm leading-7 text-ink-soft md:text-[15px]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
