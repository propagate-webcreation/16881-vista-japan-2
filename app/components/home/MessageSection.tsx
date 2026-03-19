import Image from "next/image";

export default function MessageSection() {
  return (
    <section id="message" className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-[320px_1fr] lg:gap-12">
          <div className="rounded-[24px] border border-divider bg-white p-5">
            <div className="relative aspect-[3/4] max-h-[300px] overflow-hidden rounded-[20px] border border-divider">
              <Image
                src="/images/ceo-portrait.webp"
                alt="Vista Japan株式会社② 代表取締役 渡辺英樹"
                fill
                sizes="(max-width: 1024px) 100vw, 320px"
                className="object-cover"
              />
            </div>
            <p className="mt-5 text-sm font-medium text-ink-soft">代表取締役</p>
            <p className="mt-1 text-xl font-bold text-ink">渡辺 英樹</p>
          </div>

          <div>
            <p className="font-[family:var(--font-display)] text-sm font-semibold tracking-[0.18em] text-primary">
              MESSAGE
            </p>
            <h2 className="mt-4 text-[30px] font-bold leading-[1.35] text-ink md:text-[42px]">
              通行量を、
              <br />
              売上に変えるために。
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-8 text-ink-soft md:text-[16px]">
              <p>
                私たちはLEDビジョン専門会社として、店舗や企業向けに販売・施工を行い、全国で100台以上の導入に携わってきました。
              </p>
              <p>
                その中で繰り返し感じたのは、良い商品やサービスがあるのに、通行人に気づかれていない店舗が非常に多いという現実です。看板だけでは魅力も情報量も伝え切れず、来店機会や売上を取りこぼしてしまう場面が少なくありません。
              </p>
              <p>
                だからこそ、初期費用0円、最短1カ月から利用可能、36カ月後は資産になるレンタルビジョンを立ち上げました。高額な導入障壁を下げ、もっと多くの店舗が動く看板を使える状態をつくりたいと考えています。
              </p>
              <p>
                置くだけで集客できる看板を全国に広げる。その実現に向けて、導入しやすさと安心できるサポートの両方を提供していきます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
