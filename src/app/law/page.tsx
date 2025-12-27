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
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl font-bold mb-8">特定商取引法に基づく表記</h1>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b">
              <div className="font-medium">事業者名</div>
              <div className="md:col-span-2 text-muted-foreground">
                株式会社SENRITSU
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b">
              <div className="font-medium">代表者名</div>
              <div className="md:col-span-2 text-muted-foreground">
                代表取締役 加藤 大成
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b">
              <div className="font-medium">所在地</div>
              <div className="md:col-span-2 text-muted-foreground">
                〒579-8036
                <br />
                大阪府東大阪市鷹殿町11-2 カワショウビル2・3階
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b">
              <div className="font-medium">連絡先</div>
              <div className="md:col-span-2 text-muted-foreground">
                お問い合わせフォームよりご連絡ください
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b">
              <div className="font-medium">サービス名</div>
              <div className="md:col-span-2 text-muted-foreground">
                センリツヤフショシグナルプロパイダー
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b">
              <div className="font-medium">販売価格</div>
              <div className="md:col-span-2 text-muted-foreground">
                初期費用：330,000円（税込）
                <br />
                月額費用：110,000円（税込）
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b">
              <div className="font-medium">追加手数料</div>
              <div className="md:col-span-2 text-muted-foreground">
                銀行振込の場合、振込手数料はお客様負担となります
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b">
              <div className="font-medium">支払方法</div>
              <div className="md:col-span-2 text-muted-foreground">
                銀行振込
                <br />
                ※その他の支払方法については、お問い合わせください
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b">
              <div className="font-medium">支払時期</div>
              <div className="md:col-span-2 text-muted-foreground">
                初期費用：契約締結後、サービス開始前までにお支払いください
                <br />
                月額費用：毎月末日までに翌月分をお支払いください
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b">
              <div className="font-medium">サービス提供時期</div>
              <div className="md:col-span-2 text-muted-foreground">
                初期費用のお支払い確認後、速やかにサービスを開始いたします
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b">
              <div className="font-medium">返品・キャンセル</div>
              <div className="md:col-span-2 text-muted-foreground">
                サービスの性質上、サービス開始後の返金はいたしかねます。
                <br />
                解約条件については契約時にご説明いたします。
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b">
              <div className="font-medium">契約期間</div>
              <div className="md:col-span-2 text-muted-foreground">
                契約時に別途定めるものとします。詳細はお問い合わせください。
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 border-b">
              <div className="font-medium">免責事項</div>
              <div className="md:col-span-2 text-muted-foreground">
                本サービスは利益を保証するものではありません。
                <br />
                市況、商品の在庫状況、プラットフォームの規約変更等により、運用結果は変動する可能性があります。
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
