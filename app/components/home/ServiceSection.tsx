import Image from "next/image";
import { Zap, Calendar, TrendingUp, Wrench, Film, Smartphone } from "lucide-react";

const plans = [
  {
    name: "スタンドビジョン S",
    size: "W500×H500（3.9mm）",
    price: "27,500",
    image: "/images/product-stand-small.webp",
    alt: "スタンドビジョン S サイズ W500×H500",
  },
  {
    name: "スタンドビジョン L",
    size: "W500×H1000（3.9mm）",
    price: "33,000",
    image: "/images/product-stand-large.webp",
    alt: "スタンドビジョン L サイズ W500×H1000",
  },
  {
    name: "キューブ型ビジョン",
    size: "W500×H500×D500（3.9mm）",
    price: "44,000",
    image: "/images/product-cube.webp",
    alt: "キューブ型ビジョン W500×H500×D500",
  },
];

const features = [
  { icon: Zap, text: "初期費用0円" },
  { icon: Calendar, text: "最短1ヶ月から" },
  { icon: TrendingUp, text: "36ヶ月後は資産に" },
  { icon: Wrench, text: "工事不要" },
  { icon: Film, text: "動画変更いつでも可能" },
  { icon: Smartphone, text: "スマホで簡単操作" },
];

export default function ServiceSection() {
  return (
    <section id="service" className="py-16 md:py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-heading text-2xl md:text-3xl font-bold text-center mb-4">
          レンタルビジョンとは
        </h2>
        <p className="text-muted text-center max-w-2xl mx-auto mb-12 text-left md:text-center">
          初期費用0円・工事不要で始められるLEDビジョンのレンタルサービスです。
          36ヶ月のご利用後はそのまま資産としてお使いいただけます。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white border border-divider rounded p-6 text-center"
            >
              <div className="relative w-full aspect-square max-h-[240px] mx-auto mb-4">
                <Image
                  src={plan.image}
                  alt={plan.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-heading text-lg font-bold mb-1">
                {plan.name}
              </h3>
              <p className="text-muted text-sm mb-3">{plan.size}</p>
              <p className="text-heading text-sm">月々</p>
              <p className="text-primary text-3xl font-bold">
                {plan.price}
                <span className="text-base font-normal text-muted">
                  円（税込）
                </span>
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.text}
                className="flex items-center gap-3 text-body"
              >
                <Icon className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm font-bold whitespace-nowrap">
                  {feature.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
