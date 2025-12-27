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
      <main className="py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
              Terms of Service
            </p>
            <h1 className="text-3xl md:text-4xl font-bold">利用規約</h1>
          </div>

          <div className="bg-card border border-border/50 rounded-2xl p-8 md:p-12">
            <p className="text-muted-foreground leading-relaxed mb-12">
              本利用規約（以下「本規約」といいます。）は、株式会社SENRITSU（以下「当社」といいます。）が提供する「センリツヤフショシグナルプロパイダー」（以下「本サービス」といいます。）の利用条件を定めるものです。利用者（第2条で定義します。）は、本規約に同意の上、本サービスを利用するものとします。
            </p>

            <div className="space-y-10">
              <section>
                <h2 className="text-xl font-bold mb-4 text-primary">第1条（適用）</h2>
                <ol className="list-decimal pl-6 text-muted-foreground space-y-2 leading-relaxed">
                  <li>本規約は、当社と利用者との間の本サービスの利用に関わる一切の関係に適用されます。</li>
                  <li>当社が本サービスに関して別途定めるルール、ガイドライン、注意事項等（名称を問わず）は、本規約の一部を構成します。</li>
                  <li>本規約と前項の内容が矛盾する場合、別途定めがあるものを除き、本規約が優先します。</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-primary">第2条（定義）</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  本規約において使用する用語は、以下のとおり定義します。
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 leading-relaxed">
                  <li>「利用者」：本サービスの申込みを行い、当社が承諾した個人または法人</li>
                  <li>「対象アカウント」：本サービスの支援対象となるECプラットフォーム等のアカウント（ヤフーショッピング等）</li>
                  <li>「外注者」：利用者が利用する第三者（購入代行、作業代行等を含む）</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-primary">第3条（本サービスの内容）</h2>
                <ol className="list-decimal pl-6 text-muted-foreground space-y-4 leading-relaxed">
                  <li>
                    当社は、利用者に対し、以下を含む業務支援を提供します（詳細は申込時の個別合意に従います）。
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>初期費用に含まれる支援：アカウント作成補助、配送先登録、決済手段登録、管理画面作成、利益計算シート作成、外注者への購入フロー・ルール伝達 等</li>
                      <li>月額費用に含まれる支援：購入商品・買取先リサーチ、外注者への購入指示、買取事業者との連絡、請求管理、月次利益計算・報告 等</li>
                    </ul>
                  </li>
                  <li>本サービスは、投資助言・代理業、金融商品取引業その他法令上許認可を要する業務を行うものではありません。</li>
                  <li>本サービスは、各プラットフォームの規約・法令を遵守する前提で提供されます。当社は、規約違反・不正行為・アカウント回避（いわゆる複数アカウントの不正運用等）を助長・指示することは行いません。</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-primary">第4条（申込み・契約成立）</h2>
                <ol className="list-decimal pl-6 text-muted-foreground space-y-2 leading-relaxed">
                  <li>利用者は、当社所定の方法で申込みを行います。</li>
                  <li>当社が申込みを承諾し、当社所定の方法で承諾通知を行った時点で、利用契約が成立します。</li>
                  <li>当社は、申込内容に虚偽がある場合、反社会的勢力に該当する場合、その他当社が不適切と判断した場合、申込みを承諾しないことがあります。</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-primary">第5条（料金・支払い）</h2>
                <ol className="list-decimal pl-6 text-muted-foreground space-y-2 leading-relaxed">
                  <li>
                    利用者は、当社に対し、以下の料金を支払います（税別/税込の扱いは申込画面または見積書の記載に従います）。
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>初期費用：330,000円</li>
                      <li>月額費用：110,000円（毎月）</li>
                    </ul>
                  </li>
                  <li>支払方法は、クレジットカードまたは銀行振込とします。振込手数料は利用者負担とします。</li>
                  <li>支払時期は、申込時の定めに従います。</li>
                  <li>期日までに支払いが確認できない場合、当社は本サービスの提供を停止または契約を解除できるものとします。</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-primary">第6条（業務遂行に必要な情報提供）</h2>
                <ol className="list-decimal pl-6 text-muted-foreground space-y-2 leading-relaxed">
                  <li>利用者は、当社が業務遂行に必要とする情報（対象アカウント情報、配送先、決済情報、外注者情報、買取条件等）を適切に提供するものとします。</li>
                  <li>利用者の情報提供の遅延・不備により、納期や成果に影響が出た場合、当社は責任を負いません。</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-primary">第7条（禁止事項）</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  利用者は、以下の行為をしてはなりません。
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 leading-relaxed">
                  <li>法令または公序良俗に反する行為</li>
                  <li>各プラットフォームの規約に違反する行為、または違反を前提とする運用</li>
                  <li>不正アクセス、なりすまし、アカウントの不正取得・不正利用</li>
                  <li>当社または第三者の権利侵害（知的財産権、名誉、プライバシー等）</li>
                  <li>当社の業務を妨害する行為</li>
                  <li>反社会的勢力に関連する行為</li>
                  <li>その他当社が不適切と判断する行為</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-primary">第8条（成果・利益に関する免責）</h2>
                <ol className="list-decimal pl-6 text-muted-foreground space-y-2 leading-relaxed">
                  <li>当社は、利用者の利益、売上、粗利、成果の発生を保証するものではありません。</li>
                  <li>市況、在庫、価格変動、プラットフォームの規約変更、アカウント状況、利用者の資金投入状況、外注者の稼働状況等により結果は変動します。</li>
                  <li>申込ページ等で目標や想定を示す場合も、それは説明目的であり、保証ではありません。</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-primary">第9条（知的財産権）</h2>
                <ol className="list-decimal pl-6 text-muted-foreground space-y-2 leading-relaxed">
                  <li>本サービスに関連して当社が作成・提供する資料、テンプレート、ノウハウ、レポート、シート等（以下「提供物」）の知的財産権は、当社または正当な権利者に帰属します。</li>
                  <li>利用者は、提供物を自らの利用目的の範囲で使用できるものとし、当社の事前承諾なく第三者へ譲渡・転載・再配布してはなりません。</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-primary">第10条（秘密保持）</h2>
                <p className="text-muted-foreground leading-relaxed">
                  利用者および当社は、本サービスに関連して知り得た相手方の営業上・技術上その他の非公開情報を、相手方の事前承諾なく第三者に開示・漏えいしないものとします（法令に基づく開示を除く）。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-primary">第11条（契約期間・解約）</h2>
                <ol className="list-decimal pl-6 text-muted-foreground space-y-2 leading-relaxed">
                  <li>契約期間は月次更新とし、申込時の定めに従います。</li>
                  <li>利用者は、更新日の14日前までに当社所定の方法で通知することにより、次回更新以降の契約を解約できます。</li>
                  <li>解約時点までに発生した料金は、解約理由を問わず支払義務が残ります。</li>
                  <li>既に着手・提供済みの業務（初期構築等）について、返金は行いません（別途返金条件を明示した場合を除く）。</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-primary">第12条（契約解除）</h2>
                <p className="text-muted-foreground leading-relaxed">
                  当社は、利用者が本規約に違反した場合、支払い遅延がある場合、その他当社が継続困難と判断した場合、催告なしに契約を解除できるものとします。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-primary">第13条（損害賠償・責任制限）</h2>
                <ol className="list-decimal pl-6 text-muted-foreground space-y-2 leading-relaxed">
                  <li>当社が利用者に損害を与えた場合、当社の故意または重過失がある場合を除き、当社の賠償責任は、直近1か月の月額費用を上限とします。</li>
                  <li>当社は、間接損害、特別損害、逸失利益について責任を負いません。</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-primary">第14条（反社会的勢力の排除）</h2>
                <p className="text-muted-foreground leading-relaxed">
                  利用者および当社は、反社会的勢力に該当しないこと、また関与しないことを表明し、将来にわたり保証します。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-primary">第15条（規約変更）</h2>
                <p className="text-muted-foreground leading-relaxed">
                  当社は、必要に応じて本規約を変更できます。変更後の規約は当社所定の方法で告知し、告知後に利用者が利用を継続した場合、変更に同意したものとみなします。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4 text-primary">第16条（準拠法・管轄）</h2>
                <p className="text-muted-foreground leading-relaxed">
                  本規約は日本法に準拠し、本サービスに関して紛争が生じた場合、大阪地方裁判所を第一審の専属的合意管轄裁判所とします。
                </p>
              </section>

              <section className="pt-10 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  制定日：2025年12月27日
                  <br />
                  事業者：株式会社SENRITSU
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
