import { Building2, GraduationCap, Scissors, BriefcaseBusiness } from "lucide-react";

const scenes = [
  {
    icon: Building2,
    title: "飲食店・カフェ",
    text: "メニュー、ランチ、キャンペーンを動画で訴求し、店前の足を止める導線をつくる。",
  },
  {
    icon: Scissors,
    title: "美容室・整骨院",
    text: "施術内容、予約案内、季節訴求を見せて、新規来店のきっかけを増やす。",
  },
  {
    icon: GraduationCap,
    title: "学習塾・スクール",
    text: "募集要項、合格実績、説明会情報を更新しながら、保護者への認知を高める。",
  },
  {
    icon: BriefcaseBusiness,
    title: "不動産・工務店",
    text: "物件情報、施工事例、求人情報をその場で入れ替え、訴求量を増やす。",
  },
];

export default function ScenesSection() {
  return (
    <section id="scenes" className="bg-base py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="max-w-3xl">
          <p className="font-[family:var(--font-display)] text-sm font-semibold tracking-[0.18em] text-primary">
            USE CASES
          </p>
          <h2 className="mt-4 text-[30px] font-bold leading-[1.35] text-ink md:text-[42px]">
            通行量がある立地で、
            <br />
            使い方が広がる。
          </h2>
          <p className="mt-5 text-base leading-8 text-ink-soft md:text-[17px]">
            来店型ビジネスを中心に、業種ごとに伝えたい情報をその場で差し替えられることがレンタルビジョンの強みです。集客だけでなく、求人やブランディングにも活用できます。
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {scenes.map((scene) => {
            const Icon = scene.icon;
            return (
              <article
                key={scene.title}
                className="rounded-[24px] border border-divider bg-surface p-6"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-[16px] border border-primary/18 bg-white">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink">
                  {scene.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-ink-soft md:text-[15px]">
                  {scene.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
