import Link from "next/link";
import { ArrowRight, Gift } from "lucide-react";

export default function OfferSection() {
  return (
    <section className="py-12 md:py-16 bg-primary">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-1.5 rounded text-sm font-bold mb-4">
          <Gift className="w-4 h-4" />
          期間限定
        </div>
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-3">
          今だけの特典
        </h2>
        <p className="text-white/90 text-lg md:text-xl font-bold mb-8">
          オリジナル動画3本制作プレゼント
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
