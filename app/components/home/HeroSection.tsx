import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const badges = ["初期費用 0円", "最短1ヶ月から", "36ヶ月後は資産に", "工事不要"];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative mt-16 min-h-[500px] md:min-h-[600px] flex items-center"
    >
      <Image
        src="/images/hero.webp"
        alt="店舗前で鮮やかに映像を表示するLEDビジョン"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-dark/60" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 md:py-24">
        <p className="text-primary text-sm md:text-base font-bold tracking-wider mb-3">
          レンタルビジョン
        </p>
        <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-4">
          置くだけで、集客。
        </h1>
        <p className="text-white/90 text-lg md:text-xl mb-8 max-w-xl">
          レンタルなのに資産になる LEDビジョン
        </p>

        <div className="grid grid-cols-2 md:flex gap-3 mb-10">
          {badges.map((text) => (
            <span
              key={text}
              className="bg-white/10 border border-white/30 text-white px-4 py-2 rounded text-sm font-bold text-center whitespace-nowrap"
            >
              {text}
            </span>
          ))}
        </div>

        <Link
          href="#contact"
          className="inline-flex items-center gap-2 bg-cta text-white px-8 py-4 rounded-md text-lg font-bold hover:bg-cta-dark"
        >
          無料相談する
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
