"use client";

import { Send } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    /* TODO: 送信処理を接続する場合は通知先 watanabe@vista-japan.com に連携する */
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="rounded-[28px] border border-divider bg-white p-6 md:p-8">
          <p className="font-[family:var(--font-display)] text-sm font-semibold tracking-[0.18em] text-primary">
            CONTACT
          </p>
          <h2 className="mt-4 text-[30px] font-bold leading-[1.35] text-ink md:text-[42px]">
            導入相談・見積もり依頼
          </h2>
          <p className="mt-4 text-sm leading-7 text-ink-soft md:text-[15px]">
            2営業日以内にご登録メールアドレス宛に返信します。お急ぎの場合は 050-3565-4007
            までご連絡ください。
          </p>

          {submitted ? (
            <div className="mt-8 rounded-[22px] border border-divider bg-surface px-5 py-10 text-center">
              <p className="text-xl font-bold text-ink">送信を受け付けました</p>
              <p className="mt-3 text-sm leading-7 text-ink-soft md:text-[15px]">
                内容を確認のうえ、2営業日以内に連絡します。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="inquiryType"
                  className="mb-2 block text-sm font-bold text-ink"
                >
                  お問い合わせ種別 <span className="text-accent">必須</span>
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  required
                  defaultValue=""
                  className="min-h-12 w-full rounded-[16px] border border-divider px-4 py-3 text-base text-ink outline-none"
                >
                  <option value="" disabled>
                    導入相談を選ぶ
                  </option>
                  <option value="service">レンタルビジョンについて</option>
                  <option value="price">料金・サイズについて</option>
                  <option value="support">設置や運用サポートについて</option>
                  <option value="other">その他</option>
                </select>
              </div>

              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-bold text-ink">
                  お名前 <span className="text-accent">必須</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="渡辺 英樹"
                  className="min-h-12 w-full rounded-[16px] border border-divider px-4 py-3 text-base text-ink outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-bold text-ink">
                  メールアドレス <span className="text-accent">必須</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="info@vista-japan.com"
                  className="min-h-12 w-full rounded-[16px] border border-divider px-4 py-3 text-base text-ink outline-none"
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-bold text-ink">
                  電話番号
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="050-3565-4007"
                  className="min-h-12 w-full rounded-[16px] border border-divider px-4 py-3 text-base text-ink outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-bold text-ink"
                >
                  お問い合わせ内容
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="店舗前の通行量がある立地で使いたい。おすすめサイズと最短導入日を知りたい。"
                  className="w-full rounded-[16px] border border-divider px-4 py-3 text-base leading-7 text-ink outline-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[18px] bg-accent px-6 py-4 text-base font-bold text-white hover:bg-accent-dark"
              >
                送信する
                <Send className="h-5 w-5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
