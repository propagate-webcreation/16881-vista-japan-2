import Image from "next/image";

export default function MessageSection() {
  return (
    <section id="message" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-heading text-2xl md:text-3xl font-bold text-center mb-12">
          代表メッセージ
        </h2>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
          <div className="w-full md:w-1/3 shrink-0">
            <div className="relative w-full aspect-[3/4] max-h-[280px] rounded overflow-hidden">
              <Image
                src="/images/ceo-portrait.webp"
                alt="Vista Japan株式会社 代表取締役 渡辺英樹"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <p className="text-heading font-bold mt-4 text-center md:text-left">
              代表取締役
            </p>
            <p className="text-heading text-lg font-bold text-center md:text-left">
              渡辺 英樹
            </p>
          </div>

          <div className="text-body text-sm md:text-base leading-relaxed text-left">
            <p className="mb-4">
              当社はLEDビジョン専門会社として7年以上にわたり、全国で100台以上の販売・施工を行ってまいりました。
            </p>
            <p className="mb-4">
              その中で「良い商品やサービスを持ちながら、通行人に気づかれていない店舗が非常に多い」という課題を数多く見てきました。看板だけではお店の魅力が伝わらず、本来得られるはずの売上や来店機会を失っている店舗が少なくありません。
            </p>
            <p className="mb-4">
              LEDビジョンは店舗の集客力を大きく高めるツールですが、一般的には数十万〜数百万円の初期費用や長期リース契約が必要で、中小店舗にとって導入のハードルが高いのが現状です。
            </p>
            <p className="mb-4">
              「もっと気軽にLEDビジョンを使える仕組みを作りたい」という想いから、初期費用0円・最短1ヶ月から利用でき、36ヶ月後には資産になるレンタルビジョンを立ち上げました。
            </p>
            <p>
              <span className="text-primary font-bold">「通行量を売上に変える」</span>をコンセプトに、LEDビジョンをもっと身近なツールにし、地域のお店の集客力を高めてまいります。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
