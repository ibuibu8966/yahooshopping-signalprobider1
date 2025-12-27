import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | センリツヤフショシグナルプロパイダー",
  description: "センリツヤフショシグナルプロパイダーの特定商取引法に基づく表記です。",
};

export default function LawPage() {
  return (
    <>
      <Header />
      <main className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
              Legal Notice
            </p>
            <h1 className="text-3xl md:text-4xl font-bold">特定商取引法に基づく表記</h1>
          </div>

          <div className="bg-card border border-border/50 rounded-2xl p-8 md:p-12">
            <div className="space-y-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 border-b border-border/50">
                <div className="font-medium text-foreground">販売事業者</div>
                <div className="md:col-span-2 text-muted-foreground">
                  株式会社SENRITSU
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 border-b border-border/50">
                <div className="font-medium text-foreground">運営責任者</div>
                <div className="md:col-span-2 text-muted-foreground">
                  代表取締役 加藤 大成
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 border-b border-border/50">
                <div className="font-medium text-foreground">所在地</div>
                <div className="md:col-span-2 text-muted-foreground">
                  〒579-8036
                  <br />
                  大阪府東大阪市鷹殿町11-2 カワショウビル2・3階
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 border-b border-border/50">
                <div className="font-medium text-foreground">連絡先</div>
                <div className="md:col-span-2 text-muted-foreground">
                  お問い合わせフォームよりご連絡ください。
                  <br />
                  （電話番号はご請求に応じて遅滞なく開示いたします）
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 border-b border-border/50">
                <div className="font-medium text-foreground">販売価格</div>
                <div className="md:col-span-2 text-muted-foreground">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>初期費用：330,000円（税込）</li>
                    <li>月額費用：110,000円（税込）</li>
                  </ul>
                  <p className="mt-2 text-sm">
                    ※詳細は申込画面または見積書をご確認ください。
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 border-b border-border/50">
                <div className="font-medium text-foreground">販売価格以外に発生する費用</div>
                <div className="md:col-span-2 text-muted-foreground">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>銀行振込手数料（振込の場合）</li>
                    <li>利用者側で発生する通信費、インターネット接続費用</li>
                    <li>運用資金（利用者が商品購入のために用意する資金）</li>
                    <li>外注者への報酬（利用者が外注者を用いる場合）</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 border-b border-border/50">
                <div className="font-medium text-foreground">支払方法</div>
                <div className="md:col-span-2 text-muted-foreground">
                  クレジットカード、銀行振込
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 border-b border-border/50">
                <div className="font-medium text-foreground">支払時期</div>
                <div className="md:col-span-2 text-muted-foreground">
                  申込時の定めに従います（初期費用は契約成立後速やかに、月額費用は毎月所定の日まで）。
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 border-b border-border/50">
                <div className="font-medium text-foreground">役務の提供時期</div>
                <div className="md:col-span-2 text-muted-foreground">
                  初期費用の入金確認後、順次サービス提供を開始します（詳細は申込時にご案内）。
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 border-b border-border/50">
                <div className="font-medium text-foreground">契約期間</div>
                <div className="md:col-span-2 text-muted-foreground">
                  月次更新（詳細は利用規約をご確認ください）。
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 border-b border-border/50">
                <div className="font-medium text-foreground">解約・返金について</div>
                <div className="md:col-span-2 text-muted-foreground">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>利用者は、更新日の14日前までに所定の方法で通知することで、次回更新をもって解約できます。</li>
                    <li>解約時点までに発生した料金は、解約理由を問わず返金いたしません。</li>
                    <li>初期構築等、既に提供済みの業務に係る料金についても返金対象外です（別途返金条件を明示した場合を除く）。</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 border-b border-border/50">
                <div className="font-medium text-foreground">動作環境</div>
                <div className="md:col-span-2 text-muted-foreground">
                  インターネット接続環境およびWebブラウザ（最新版推奨）。
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6">
                <div className="font-medium text-foreground">免責事項</div>
                <div className="md:col-span-2 text-muted-foreground">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>本サービスは、利益、売上、成果等を保証するものではありません。</li>
                    <li>市況、在庫、価格変動、プラットフォーム規約変更、その他外部要因により運用結果は変動します。</li>
                    <li>詳細は利用規約をご確認ください。</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
