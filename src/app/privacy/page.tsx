import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | センリツヤフショシグナルプロパイダー",
  description: "センリツヤフショシグナルプロパイダーのプライバシーポリシーです。",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
              Privacy Policy
            </p>
            <h1 className="text-3xl md:text-4xl font-bold">プライバシーポリシー</h1>
          </div>

          <div className="bg-card border border-border/50 rounded-2xl p-8 md:p-12">
            <p className="text-muted-foreground leading-relaxed mb-12">
              株式会社SENRITSU（以下「当社」といいます。）は、当社が提供する「センリツヤフショシグナルプロパイダー」（以下「本サービス」といいます。）における利用者の個人情報等を、以下のとおり取り扱います。
            </p>

            <div className="space-y-10">
              <section>
                <h2 className="text-xl font-bold mb-4 text-primary">1. 取得する情報</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  当社は、以下の情報を取得する場合があります。
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 leading-relaxed">
                  <li>氏名、会社名（屋号）、役職等</li>
                  <li>メールアドレス、電話番号、住所</li>
                  <li>問い合わせ内容、相談内容、申込情報</li>
                  <li>決済に関する情報（※クレジットカード番号等は原則として決済代行事業者が保持し、当社が保持しない形を推奨）</li>
                  <li>対象アカウントに関する情報（ID等。ただしパスワード等は最小限の取り扱いとし、必要に応じて利用者側で管理）</li>
                  <li>外注者情報（利用者が提供する範囲）</li>
                  <li>アクセスログ、Cookie、端末情報、ブラウザ情報、IPアドレス等</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-primary">2. 利用目的</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  当社は、取得した情報を以下の目的で利用します。
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 leading-relaxed">
                  <li>本サービスの提供、運用、連絡、本人確認</li>
                  <li>運用支援の遂行（利益計算、レポート等を含む）</li>
                  <li>問い合わせ対応、サポート対応</li>
                  <li>請求・決済・支払い確認</li>
                  <li>不正利用の防止、セキュリティ確保</li>
                  <li>サービス改善、品質向上、マーケティング分析</li>
                  <li>重要なお知らせの通知（規約変更等）</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-primary">3. 第三者提供</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  当社は、次の場合を除き、個人情報を第三者に提供しません。
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 leading-relaxed">
                  <li>本人の同意がある場合</li>
                  <li>法令に基づく場合</li>
                  <li>人の生命・身体・財産の保護のために必要で、同意取得が困難な場合</li>
                  <li>業務委託先への提供（次条）</li>
                  <li>事業承継に伴う提供</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-primary">4. 委託</h2>
                <p className="text-muted-foreground leading-relaxed">
                  当社は、利用目的の達成に必要な範囲で、個人情報の取扱いを外部に委託することがあります（例：決済代行、クラウドサービス、分析ツール、問い合わせ管理等）。この場合、当社は委託先を適切に監督します。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-primary">5. 安全管理措置</h2>
                <p className="text-muted-foreground leading-relaxed">
                  当社は、個人情報の漏えい、滅失、毀損等を防止するため、アクセス制御、権限管理、ログ管理等の合理的な安全管理措置を講じます。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-primary">6. Cookie・アクセス解析について</h2>
                <p className="text-muted-foreground leading-relaxed">
                  当社は、利便性向上や利用状況分析のためCookieを利用する場合があります。また、Google Analytics等のアクセス解析ツールを利用する場合があります。利用者はブラウザ設定によりCookieを無効化できますが、その場合一部機能が利用できない可能性があります。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-primary">7. 開示・訂正・削除等の請求</h2>
                <p className="text-muted-foreground leading-relaxed">
                  利用者は、当社所定の手続により、保有個人データの開示、訂正、追加、削除、利用停止等を求めることができます。本人確認の上、法令に従い対応します。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-primary">8. お問い合わせ窓口</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  本ポリシーに関するお問い合わせは、以下の窓口までお願いいたします。
                </p>
                <div className="bg-background/50 rounded-xl p-6 border border-border/50">
                  <address className="not-italic text-muted-foreground space-y-1">
                    <p className="font-medium text-foreground">株式会社SENRITSU</p>
                    <p>〒579-8036</p>
                    <p>大阪府東大阪市鷹殿町11-2 カワショウビル2・3階</p>
                    <p>代表者：代表取締役 加藤 大成</p>
                  </address>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-primary">9. 改定</h2>
                <p className="text-muted-foreground leading-relaxed">
                  当社は、必要に応じて本ポリシーを改定します。改定後の内容は当社所定の方法により告知し、告知後に利用者が利用を継続した場合、改定に同意したものとみなします。
                </p>
              </section>

              <section className="pt-10 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  制定日：2025年12月27日
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
