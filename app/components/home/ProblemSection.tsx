import { AlertCircle } from "lucide-react";

const problems = [
  "通行人に店の存在を気づいてもらえない",
  "看板だけでは情報が伝わらない",
  "新規客がなかなか増えない",
  "チラシやポスティングの効果が落ちている",
  "LEDビジョンは高額で導入できないと思っている",
  "広告費をかけても効果が分からない",
];

export default function ProblemSection() {
  return (
    <section id="problems" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-heading text-2xl md:text-3xl font-bold text-center mb-12">
          こんなお悩みありませんか？
        </h2>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {problems.map((problem) => (
            <li
              key={problem}
              className="flex items-start gap-3 bg-surface p-5 rounded border border-divider"
            >
              <AlertCircle className="w-5 h-5 text-cta shrink-0 mt-0.5" />
              <span className="text-body text-left">{problem}</span>
            </li>
          ))}
        </ul>

        <div className="text-center">
          <p className="text-heading text-lg md:text-xl font-bold">
            そのお悩み、
            <span className="text-primary">レンタルビジョン</span>
            が解決します
          </p>
        </div>
      </div>
    </section>
  );
}
