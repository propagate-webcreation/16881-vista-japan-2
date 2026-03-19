"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "初期費用は本当に0円ですか？",
    a: "はい、初期費用は一切かかりません。月額料金のみでLEDビジョンをご利用いただけます。",
  },
  {
    q: "最短何日で導入できますか？",
    a: "お申し込み後、最短数日で導入可能です。LEDビジョンの発送から動画コンテンツの設定まで迅速にサポートいたします。",
  },
  {
    q: "動画コンテンツの変更方法は？",
    a: "スマートフォンから簡単に変更できます。営業時間やキャンペーン情報をいつでもリアルタイムで更新可能です。",
  },
  {
    q: "途中で解約できますか？",
    a: "はい、途中解約が可能です。一般的なリース契約と異なり、柔軟な契約形態となっております。",
  },
  {
    q: "設置に工事は必要ですか？",
    a: "いいえ、工事は不要です。コンセントに挿すだけで設置完了。スタンド型のため移動も自由にできます。",
  },
  {
    q: "36ヶ月後に資産になるとは？",
    a: "36ヶ月間ご利用いただいた後、LEDビジョンはそのままお客様の資産としてお使いいただけます。追加費用は一切かかりません。",
  },
  {
    q: "どのような業種で利用されていますか？",
    a: "飲食店・美容室・整骨院・歯科・学習塾・不動産会社・工務店など、来店型ビジネスを中心に幅広い業種でご利用いただいております。",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-24 bg-surface">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-heading text-2xl md:text-3xl font-bold text-center mb-12">
          よくある質問
        </h2>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-divider rounded bg-white"
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left min-h-[44px]"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                aria-expanded={openIndex === index}
              >
                <span className="text-heading font-bold text-sm md:text-base">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-muted shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-5 pb-4">
                  <p className="text-body text-sm text-left">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
