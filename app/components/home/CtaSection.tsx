import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="relative isolate overflow-hidden bg-deep py-12 md:py-16">
      <Image
        src="/images/cta-bg.webp"
        alt="夜の街で光るLEDビジョン"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-deep/78" />
      <div className="relative mx-auto max-w-5xl px-4 text-center md:px-6">
        <p className="font-[family:var(--font-display)] text-sm font-semibold tracking-[0.18em] text-primary">
          CONTACT CTA
        </p>
        <h2 className="mt-4 text-[28px] font-bold leading-[1.4] text-white md:text-[40px]">
          高額投資の前に、
          <br />
          まずは導入しやすい方法を確認。
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/82 md:text-[17px]">
          店舗前の通行量、見せたい情報、設置スペースに合わせて、機種選びから運用開始までご案内します。オンライン相談も無料です。
        </p>
        <Link
          href="#contact"
          className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-[18px] bg-accent px-7 py-4 text-base font-bold text-white hover:bg-accent-dark"
        >
          無料で問い合わせる
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}
