"use client";

import { useState } from "react";
import { Send, Phone } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    /* TODO: フォーム送信処理を実装（通知先: watanabe@vista-japan.com） */
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-heading text-2xl md:text-3xl font-bold text-center mb-4">
          お問い合わせ
        </h2>
        <p className="text-muted text-center text-sm mb-2">
          2営業日以内にご登録のメールアドレスにご連絡いたします
        </p>
        <div className="flex items-center justify-center gap-2 text-muted text-sm mb-10">
          <Phone className="w-4 h-4" />
          <span>
            お電話でのお問い合わせ:{" "}
            <a href="tel:050-3565-4007" className="text-primary font-bold">
              050-3565-4007
            </a>
          </span>
        </div>

        {submitted ? (
          <div className="text-center py-12 border border-divider rounded bg-surface">
            <p className="text-heading text-lg font-bold mb-2">
              お問い合わせありがとうございます
            </p>
            <p className="text-muted text-sm">
              2営業日以内にご連絡いたします。
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label
                htmlFor="inquiry-type"
                className="block text-heading text-sm font-bold mb-1"
              >
                お問い合わせ種別
                <span className="text-cta ml-1 text-xs">必須</span>
              </label>
              <select
                id="inquiry-type"
                name="inquiry_type"
                required
                className="w-full border border-divider rounded px-4 py-3 text-body text-sm bg-white"
                defaultValue=""
              >
                <option value="" disabled>
                  選択してください
                </option>
                <option value="rental">レンタルビジョンについて</option>
                <option value="price">料金・プランについて</option>
                <option value="consult">導入に関する相談</option>
                <option value="other">その他</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="name"
                className="block text-heading text-sm font-bold mb-1"
              >
                お名前
                <span className="text-cta ml-1 text-xs">必須</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="山田 太郎"
                className="w-full border border-divider rounded px-4 py-3 text-body text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-heading text-sm font-bold mb-1"
              >
                メールアドレス
                <span className="text-cta ml-1 text-xs">必須</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="example@company.co.jp"
                className="w-full border border-divider rounded px-4 py-3 text-body text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-heading text-sm font-bold mb-1"
              >
                電話番号
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="090-1234-5678"
                className="w-full border border-divider rounded px-4 py-3 text-body text-sm"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-heading text-sm font-bold mb-1"
              >
                お問い合わせ内容
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="導入を検討しているので詳しく知りたい"
                className="w-full border border-divider rounded px-4 py-3 text-body text-sm"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 w-full bg-cta text-white py-4 rounded-md text-base font-bold hover:bg-cta-dark min-h-[48px]"
            >
              <Send className="w-5 h-5" />
              送信する
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
