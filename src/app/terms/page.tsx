import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約 | センリツヤフショシグナルプロパイダー",
  description: "センリツヤフショシグナルプロパイダーの利用規約です。",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl font-bold mb-8">利用規約</h1>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-bold mb-4">第1条（適用）</h2>
              <p className="text-muted-foreground leading-relaxed">
                本規約は、株式会社SENRITSU（以下「当社」といいます）が提供するセンリツヤフショシグナルプロパイダー（以下「本サービス」といいます）の利用に関する条件を、本サービスを利用するお客様（以下「利用者」といいます）と当社との間で定めるものです。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">第2条（サービス内容）</h2>
              <p className="text-muted-foreground leading-relaxed">
                本サービスは、Yahoo!ショッピングにおける運用代行サービスです。具体的なサービス内容は、当社が別途定めるところによります。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">第3条（料金）</h2>
              <p className="text-muted-foreground leading-relaxed">
                本サービスの利用料金は、初期費用330,000円（税込）、月額費用110,000円（税込）とします。支払い方法、支払い期日等の詳細は、契約時に別途定めるものとします。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">第4条（免責事項）</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>
                  本サービスは利益を保証するものではありません。市況、商品の在庫状況、プラットフォームの規約変更等により、運用結果は変動する可能性があります。
                </li>
                <li>
                  当社は、本サービスの利用により生じた損害について、当社に故意または重大な過失がある場合を除き、責任を負いません。
                </li>
                <li>
                  プラットフォーム側の仕様変更、システム障害、その他当社の責に帰さない事由により本サービスが提供できない場合、当社は責任を負いません。
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">第5条（契約期間・解約）</h2>
              <p className="text-muted-foreground leading-relaxed">
                契約期間、解約条件等については、契約時に別途定めるものとします。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">第6条（禁止事項）</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                利用者は、本サービスの利用にあたり、以下の行為を行ってはならないものとします。
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>法令または公序良俗に違反する行為</li>
                <li>当社または第三者の権利を侵害する行為</li>
                <li>本サービスの運営を妨害する行為</li>
                <li>その他、当社が不適切と判断する行為</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">第7条（規約の変更）</h2>
              <p className="text-muted-foreground leading-relaxed">
                当社は、必要と判断した場合には、利用者に通知することなく本規約を変更することができるものとします。変更後の規約は、当社ウェブサイトに掲載した時点で効力を生じるものとします。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">第8条（準拠法・管轄）</h2>
              <p className="text-muted-foreground leading-relaxed">
                本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、大阪地方裁判所を第一審の専属的合意管轄裁判所とします。
              </p>
            </section>

            <section className="pt-8 border-t">
              <p className="text-sm text-muted-foreground">
                制定日：2025年1月1日
                <br />
                株式会社SENRITSU
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
