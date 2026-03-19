import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaBannerSection() {
  return (
    <section className="relative py-12 md:py-16">
      <Image
        src="/images/cta-bg.webp"
        alt="夜の商店街に輝くLEDサイネージ"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-dark/70" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
          まずはお気軽にご相談ください
        </h2>
        <p className="text-white/80 mb-8">
          導入に関するご質問やお見積りなど、お気軽にお問い合わせください。
        </p>
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
