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
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl font-bold mb-8">プライバシーポリシー</h1>

          <div className="prose prose-gray max-w-none space-y-8">
            <p className="text-muted-foreground leading-relaxed">
              株式会社SENRITSU（以下「当社」といいます）は、お客様の個人情報の保護を重要な責務と認識し、以下のとおりプライバシーポリシーを定め、個人情報の適切な取り扱いに努めます。
            </p>

            <section>
              <h2 className="text-xl font-bold mb-4">1. 個人情報の定義</h2>
              <p className="text-muted-foreground leading-relaxed">
                個人情報とは、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、その他の記述等により特定の個人を識別することができるもの（他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含みます）をいいます。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">2. 個人情報の収集</h2>
              <p className="text-muted-foreground leading-relaxed">
                当社は、以下の場合に個人情報を収集することがあります。
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
                <li>お問い合わせフォームからのお問い合わせ時</li>
                <li>サービスのお申し込み時</li>
                <li>契約締結時</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">3. 個人情報の利用目的</h2>
              <p className="text-muted-foreground leading-relaxed">
                当社は、収集した個人情報を以下の目的で利用いたします。
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
                <li>サービスの提供・運営</li>
                <li>お問い合わせへの対応</li>
                <li>契約の履行</li>
                <li>サービスに関するご案内</li>
                <li>利用規約違反への対応</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">4. 個人情報の第三者提供</h2>
              <p className="text-muted-foreground leading-relaxed">
                当社は、以下の場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要がある場合</li>
                <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
                <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">5. 個人情報の安全管理</h2>
              <p className="text-muted-foreground leading-relaxed">
                当社は、個人情報の漏洩、滅失またはき損を防止するため、適切な安全管理措置を講じます。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">6. 個人情報の開示・訂正・削除</h2>
              <p className="text-muted-foreground leading-relaxed">
                お客様ご本人から個人情報の開示、訂正、削除のご請求があった場合は、ご本人であることを確認の上、適切に対応いたします。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">7. Cookieの使用</h2>
              <p className="text-muted-foreground leading-relaxed">
                当社のウェブサイトでは、サービスの改善やアクセス解析のためにCookieを使用することがあります。Cookieの使用を希望されない場合は、ブラウザの設定により無効化することができます。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">8. プライバシーポリシーの変更</h2>
              <p className="text-muted-foreground leading-relaxed">
                当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当社ウェブサイトに掲載した時点で効力を生じるものとします。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">9. お問い合わせ窓口</h2>
              <p className="text-muted-foreground leading-relaxed">
                個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください。
              </p>
              <address className="not-italic text-muted-foreground mt-4">
                株式会社SENRITSU
                <br />
                〒579-8036 大阪府東大阪市鷹殿町11-2 カワショウビル2・3階
              </address>
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
