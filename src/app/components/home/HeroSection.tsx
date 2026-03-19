import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CirclePlay } from "lucide-react";

const points = [
  "初期費用0円",
  "最短1カ月から利用可能",
  "36カ月後は資産化",
  "工事不要で置くだけ",
  "動画はいつでも変更可能",
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden pt-16 md:pt-18"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero.webp"
          alt="店舗前で鮮やかな映像を表示するLEDビジョン"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-deep/76" />
      </div>

      <div className="relative mx-auto flex min-h-[680px] max-w-6xl flex-col justify-center px-4 py-16 md:min-h-[840px] md:px-6 md:py-24">
        <div className="max-w-3xl">
          <p className="font-[family:var(--font-display)] text-sm font-semibold tracking-[0.22em] text-primary md:text-base">
            VISTA JAPAN / RENTAL VISION
          </p>
          <h1 className="mt-5 max-w-2xl font-[family:var(--font-display)] text-5xl font-bold leading-[1.05] text-white md:text-7xl">
            レンタルビジョンで
            <span className="mt-2 block font-[family:var(--font-body)] text-[30px] leading-[1.35] md:text-[44px]">
              置くだけ集客。
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/86 md:text-[18px]">
            店舗前の通行量を売上につなげる、全国対応のLEDビジョンレンタル。
            月々27,500円（税込）から始められ、3年後はそのまま資産として使えます。
          </p>
        </div>

        <div className="mt-8 grid gap-3 md:max-w-4xl md:grid-cols-3">
          {points.map((point) => (
            <div
              key={point}
              className="rounded-[20px] border border-white/20 bg-white/8 px-4 py-3 text-sm font-bold text-white backdrop-blur-[2px] md:text-base"
            >
              {point}
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-5 md:flex-row md:items-center">
          <Link
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[18px] bg-accent px-7 py-4 text-base font-bold text-white hover:bg-accent-dark"
          >
            お問い合わせはこちら
            <ArrowRight className="h-5 w-5" />
          </Link>
          <div className="inline-flex items-start gap-3 rounded-[18px] border border-white/16 bg-white/8 px-4 py-4 text-white/90">
            <CirclePlay className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <p className="text-sm leading-7 md:text-base">
              オリジナル動画3本制作プレゼントを期間限定で実施中。
              導入相談から設置場所の確認までオンラインで対応します。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
