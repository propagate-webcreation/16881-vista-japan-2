# /gtm — CTA一括計測（Always mcv-trigger / Total Count）

あなたは Cursor の Agent です。以下の仕様に100%従って実行してください。
目的は「CTAが何回押されたか（総数）」の一括計測です。CTA別の識別は不要。

---

## ゴール
- 承認された CTA 親要素に **必ず** `mcv-trigger` を付与する（YES/NO分岐は禁止）
- クリック漏れ（子要素クリック）を潰すため、CTA配下の非インタラクティブ子要素に `pointer-events-none` を付与する
- GTM側は「Click Classes contains mcv-trigger」の1トリガー固定で動く状態にする

---

## 絶対禁止
- Pass 1 の段階でコードを書き換えること
- gtm-id / data-gtm-element-id / 設定ファイル / import を追加すること（総数計測のみなので不要）
- 入れ子クリック構造（<a>の中に<a>/<button>など）を勝手に修正すること（壊すリスクが高いのでWARNINGのみ）

---

## 対象ファイル
優先的に走査：
- app/**/*.(tsx|jsx)
- src/**/*.(tsx|jsx)
- **/*.html

---

## Pass 1：CTA候補の抽出（変更禁止・ここで必ず止まる）
CTA候補の抽出（総合判定でOK。単一条件に依存しない）：
- <a href="...">（主要導線っぽいもの）
- <button>（type=submit含む）
- Next.js の <Link ...>（next/link）
- role="button"
- 見た目がボタンっぽい（rounded/bg/gradient/shadow/w-full/h-12等）・画像CTA など

基本除外（ただしユーザーが希望したら含めてもよい）：
- ヘッダー/フッターの小リンク列
- 規約/プライバシー/会社概要などの弱い導線
- 明らかに主要アクションではないテキストリンク群

### Pass 1 の出力（表形式）
各候補に C1, C2… のIDを振り、以下を必ず出す：
- ID（C1, C2...）
- file path
- 代表行（近い行番号）
- 要素種別（a/button/Link/role=button）
- destination（href / Link href / submit など取れる範囲）
- 既に `mcv-trigger` が付いているか
- WARNING（入れ子a/button、classNameが複雑で安全に追記できない、など）

### Pass 1 の最後（ここで停止）
必ず次を質問して停止する（この時点では変更ゼロ）：
「どれに適用しますか？ A / S / E / N / R」
- A) 全部
- S) 指定（例：C1,C3,C8）
- E) 除外（例：全適用だがC2,C5は除外）
- N) 何もしない
- R) 再抽出（基準を少し変えて再提示）

---

## Pass 2：承認された候補だけ編集（mcv-trigger常時付与）
ユーザーが A/S/E を返したら、その対象だけ編集する。

### 2-1 親CTAに `mcv-trigger` を付与（必須）
- 親CTA（a/button/Link/role=button）の class/className に `mcv-trigger` を追加
- 既に含まれている場合は何もしない
- 子要素には付けない

安全な className 追記ルール（壊さない優先）：
- className が文字列リテラル → 末尾に `mcv-trigger` を追加
- cn(...) / clsx(...) / classnames(...) → 引数に "mcv-trigger" を追加
- それ以外の複雑式 → 自動改変はしない。WARNINGに出してスキップ（手動対応対象）

### 2-2 子要素クリック漏れ対策：`pointer-events-none` を付与（必須）
CTA配下の「非インタラクティブ」要素に `pointer-events-none` を追加：
- 対象例：img / svg / span / div / p / strong / em / h1-h6 等
- 背景オーバーレイ（absolute divなど）も対象

付与禁止（これが子にある場合はWARNINGして自動修正しない）：
- a / button / input / textarea / select / label 等のインタラクティブ要素
- <a>の中に<a>/<button>等がある（入れ子クリック）場合もWARNINGのみ

---

## 実行後ログ（必須）
Pass 2 実行後に必ず出す：
- 変更したファイル一覧
- 追加した `mcv-trigger` の総数
- 追加した `pointer-events-none` の総数
- WARNING一覧（要手動対応の理由付き）

---

## GTM設定（固定・コピペ用：総数カウント）
※a/button/Link差は無視してOK。GTMはこれ1回作ったら基本触らない。

【推奨：名称も固定】
- Trigger name: TR - CTA Click (mcv-trigger)
- Tag name: TAG - GA4 Event - cta_click

1) GTM → 変数 → 組み込み変数
   - Click Classes を ON

2) GTM → トリガー → 新規 → クリック → All Elements → Some Clicks
   - 条件：Click Classes contains `mcv-trigger`

3) GTM → タグ → 新規（例：GA4 Event）
   - Event name：`cta_click`
   - Trigger：上記トリガー

---

## 最後に（必須の振る舞い）
- Pass 1 のみ実行→一覧提示→質問→停止
- 承認後に Pass 2 実行→ログ出力→GTM設定を再掲して終了
