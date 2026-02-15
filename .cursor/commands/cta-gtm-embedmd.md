# CTA GTM Auto (Standalone + Grouped Review Gate)

目的：
GTM計測が未設定のCTA（a / button / Next Link）候補を自動抽出し、
「同一CTA（例：同一画像CTAが上中下にある）」を **グルーピング**したうえで、
**承認（確認）後にだけ**、以下を一括適用する。

- 親CTAに gtm-id（class/className）を追加
- 親CTAに data-gtm-element-id="同じgtm-id" を追加
- （任意）一括計測用 mcv-trigger を親CTAに追加
- 子要素クリック問題（img/div/svg/span等で計測漏れ）を pointer-events-none で必ず解消
- 巨大A（入れ子クリック）/ 多重発火の温床（親以外への付与）を解消

---

## 制約（必須）
- 設定ファイル作成/参照は禁止（gtm.config.ts 等）
- import禁止（GTM_IDS等は禁止）
- 付与するIDは **文字列直書き**で付与する
- 承認されるまでコードを変更しない（候補抽出と一覧提示のみで停止）

---

## 実行前に必ず質問（MANDATORY）
### Q1. 全CTAを一括計測しますか？（mcv-trigger を付けますか？）
- YES：親CTA（a/button/Link）に `mcv-trigger` を付与する
- NO ：`mcv-trigger` は付与しない（gtm-id + data属性のみ）

※ユーザーの回答を待ってから次へ進む。

---

## 背景（今回の計測漏れを必ず潰す）
CTAが `<a>` の中に `<img>/<div>` 等の子要素を持つ場合、
ユーザーは子要素をクリックしがち。
GTM側が「実際にクリックされた要素」を参照する設定だと、
親 `<a>` の gtm-id が拾われず計測漏れになることがある。

対策（このコマンドで必ず実施）：
- CTAの子要素（img/svg/div/span等）に `pointer-events-none` を付与し、
  クリックを親CTAへ「すり抜け」させる

---

## 絶対ルール（事故防止）
1) gtm-id / data-gtm-element-id / mcv-trigger は **親のクリック要素だけ**に付ける  
   - 子要素には付けない（誤発火・多重発火の原因）
2) 1クリック要素 = gtm-id は1つ（同一要素に複数の gtm- を混在させない）
3) 巨大A禁止：`<a>/<Link>` の中に `<a>/<Link>/<button>` を入れない
4) 子要素クリック対策：CTA配下の img/svg/div/span 等は `pointer-events-none`

---

## CTA候補の抽出方針（文言縛りに依存しない）
CTA候補＝「主要アクション導線」。
以下を総合して候補抽出する（単一条件に依存しない）：

- ボタンっぽい見た目（rounded, bg/gradient, shadow, h-12/h-14, w-full, font-bold, text-white 等）
- 画像CTAっぽい（リンクが画像を包む / CTA画像）
- 目立つ配置（ヒーロー、セクション末尾、固定フッター、カード内の主ボタン等）
- form送信（type=submit）などの主導線

「ナビっぽい小リンク群（メニュー列、規約等）」は、
明らかにCTAでない限り候補から除外する。

---

## 同一CTAのグルーピング（今回の要望の核）
同一CTA（例：同じ画像ボタンが上中下にある）を **同じグループ**として扱い、
そのグループ全体に **同じ gtm-id / data-gtm-element-id** を付ける。

### グループ化 Fingerprint（指紋）ルール
候補CTAごとに Fingerprint を作り、同一Fingerprintは同一グループ。

Fingerprint は以下の順で強く判断：
1) **遷移先（Destination）**：href / Link href / onClick遷移先 / form submit先（取れる範囲）
2) **CTA画像src**：CTAが画像なら src（Next/Image含む）
3) **CTA形状特徴**：className/class から “ボタン形状” に関係する特徴のみ抽出（rounded/bg/shadow/h-*/w-full 等）
4) **ラベル補助**：aria-label / alt / 表示テキスト（※文言縛りではなく補助）

基本ルール：
- Destinationが同じ かつ（画像srcが同じ OR 形状特徴が近い） → 同一CTAグループ
- 画像srcが同じでもDestinationが違う → **別グループ**（同一CTA扱いしない）

---

## gtm-id の生成（文字列直書き・グループ単位で1つ）
グループごとに gtm-id を1つ生成し、グループ内の全CTAに同じ値を付ける。

形式：
`gtm-{type}-cta-{action}[-{key}]`

- type：
  - button → button
  - a / Link → link
- action：文脈から推定（trial/contact/tel/line/submit/map/instagram/more/cta など）
- key：同一actionが複数グループある時に区別するための短い識別子
  - 画像srcがある → 画像ファイル名（拡張子除外・小文字化・記号を-）
  - 画像srcがない → 代表CTAのaria-label/短いテキスト/ファイル名等から短縮
- 重複回避：同じgtm-idが既に存在する場合は `-2`, `-3` を末尾に付ける

例：
- gtm-link-cta-trial-cta-4
- gtm-button-cta-submit
- gtm-link-cta-line-2

---

## 実行手順（2パス + 承認ゲート）

### Pass 0：Q1（mcv-trigger）回答を受け取る
- YES → 親CTAに mcv-trigger を追加する
- NO  → 追加しない

ここから先に進む。

---

### Pass 1：候補抽出とグルーピング（まだ変更しない）
1) 対象を走査（優先：`app/**/*.(tsx|jsx)`, `src/**/*.(tsx|jsx)`, `**/*.html`）
2) a/button/Link を抽出し、CTA候補を選定
3) それぞれ Fingerprint を作ってグルーピング
4) 各グループに対し「提案内容」を作る（この時点ではコード変更しない）
   - 付与する gtm-id（グループで共通）
   - data-gtm-element-id（同じ値）
   - Q1=YESなら mcv-trigger（親のみ）
   - pointer-events-none を付与する子要素（img/svg/div/span 等）
   - 巨大Aや入れ子クリックがある場合の修正方針

---

### Pass 1.5：グループ一覧提示（ここで必ず停止）
グループ単位で番号を振って提示し、承認を求める（表形式推奨）。

各グループに必ず含める情報：
- Group ID（G1, G2...）
- 件数（同一CTAが何箇所あるか）
- 代表（1件）：ファイル/要素種別(a/button/Link)/簡単な位置説明
- Destination（推定）
- 画像src（あれば）
- 提案 gtm-id（このグループに共通で付ける値）
- 追加予定：data-gtm-element-id /（Q1=YESなら）mcv-trigger
- pointer-events-none 追加対象（img/svg/div/span等）
- 入れ子クリック（巨大A）有無（あれば注意）

そして必ず質問して停止：
「どのグループに適用しますか？」

選択肢：
- A) 全グループに適用
- S) グループ指定（例：G1,G3,G5）
- E) 除外指定（例：全適用だがG2だけ除外）
- SPLIT) 分割（例：G1を2つに分けたい。理由：同一画像だが意図が違う 等）
- MERGE) 結合（例：G2とG4を同一CTAとして扱いたい）
- N) 何もしない
- R) 再抽出（抽出/グルーピング基準を少し変えて再提示）

※ユーザーの回答が来るまでコード変更は一切しない。

---

### Pass 2：承認されたグループだけ編集（付与 + 計測漏れ対策）
ユーザー承認（A/S/E/SPLIT/MERGE）に従い、対象グループのみ編集する。

#### 2-1 親CTAに付与（必須）
- 親CTA（a/button/Link）に gtm-id を class/className へ追加
- 親CTAに data-gtm-element-id="同じgtm-id" を追加
- Q1=YES の場合のみ、親CTAに mcv-trigger を追加
  - 子要素には付けない

#### 2-2 子要素クリック問題の解消（必須）
- CTA配下の img/svg/div/span 等に pointer-events-none を追加
- 背景画像（absolute overlay）も pointer-events-none

#### 2-3 事故修正（見つけたら必ず直す）
- 巨大A（入れ子クリック）を解消：クリック要素を分離
- 子要素に gtm-/mcv-trigger/data-gtm-element-id が付いていたら除去（親に集約）
- 1要素に gtm- が複数混在していたら統一（必要なら要素分割）

---

## 実装例（参考）

### React/Next（aタグ）
```tsx
<a
  className={`mcv-trigger gtm-link-cta-trial-cta-4 ...既存クラス`}
  data-gtm-element-id="gtm-link-cta-trial-cta-4"
  href="/trial"
>
  <img className="pointer-events-none w-full h-auto block" alt="" />
</a>
