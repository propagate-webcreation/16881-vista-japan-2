import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Film, MonitorSmartphone, PlugZap } from "lucide-react";

const plans = [
  {
    name: "スタンドビジョン S",
    size: "W500 × H500（3.9mmp）",
    price: "27,500",
    image: "/images/product-stand-small.webp",
    alt: "小型スタンドビジョンの設置イメージ",
    fit: "小規模な店頭や受付前に置きやすいコンパクトモデル。",
  },
  {
    name: "スタンドビジョン L",
    size: "W500 × H1000（3.9mmp）",
    price: "33,000",
    image: "/images/product-stand-large.webp",
    alt: "縦長スタンドビジョンの設置イメージ",
    fit: "入口でしっかり目線を止めたい店舗向けの主力モデル。",
  },
  {
    name: "キューブ型ビジョン",
    size: "W500 × H500 × D500（3.9mmp）",
    price: "44,000",
    image: "/images/product-cube.webp",
    alt: "キューブ型ビジョンの設置イメージ",
    fit: "多方向から見せたい売場やイベント導線に向く立体モデル。",
  },
];

const supports = [
  {
    icon: PlugZap,
    title: "置くだけで始まる",
    text: "工事不要で、コンセントに挿してすぐ運用開始。スタンド型だから移動も柔軟です。",
  },
  {
    icon: MonitorSmartphone,
    title: "スマホで差し替え可能",
    text: "動画・静止画・文字情報をタイムリーに更新でき、営業時間変更や求人にも対応します。",
  },
  {
    icon: Film,
    title: "動画制作サポート付き",
    text: "今ならオリジナル動画3本制作プレゼント。導入初期の訴求づくりまで伴走します。",
  },
];

export default function ServiceSection() {
  return (
    <section id="service" className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="font-[family:var(--font-display)] text-sm font-semibold tracking-[0.18em] text-primary">
              WHAT WE OFFER
            </p>
            <h2 className="mt-4 text-[30px] font-bold leading-[1.35] text-ink md:text-[42px]">
              3つのラインアップで、
              <br />
              導入しやすい価格設計。
            </h2>
            <p className="mt-5 text-base leading-8 text-ink-soft md:text-[17px]">
              レンタルビジョンは、月々27,500円（税込）から導入できる店舗向けLEDビジョンサービスです。全国・オンラインで相談でき、最短数日で利用開始まで進められます。
            </p>
          </div>
          <Link
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 self-start rounded-[18px] bg-primary px-6 py-4 text-base font-bold text-white hover:bg-primary-dark"
          >
            料金を相談する
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="rounded-[26px] border border-divider bg-white p-6"
            >
              <div className="relative aspect-[4/3] max-h-[260px] overflow-hidden rounded-[20px] border border-divider bg-surface">
                <Image
                  src={plan.image}
                  alt={plan.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-6 text-xl font-bold text-ink">{plan.name}</h3>
              <p className="mt-2 text-sm font-medium text-ink-soft">{plan.size}</p>
              <p className="mt-3 text-sm leading-7 text-ink-soft">{plan.fit}</p>
              <div className="mt-6 flex items-end gap-2 border-t border-divider pt-5">
                <span className="text-sm font-bold text-ink-soft">月額</span>
                <span className="font-[family:var(--font-display)] text-4xl font-bold text-primary">
                  {plan.price}
                </span>
                <span className="pb-1 text-sm font-medium text-ink-soft">
                  円（税込）
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {supports.map((support) => {
            const Icon = support.icon;
            return (
              <article
                key={support.title}
                className="rounded-[22px] border border-divider bg-white px-5 py-6"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-[14px] border border-primary/18 bg-surface">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-ink">
                  {support.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-ink-soft md:text-[15px]">
                  {support.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
