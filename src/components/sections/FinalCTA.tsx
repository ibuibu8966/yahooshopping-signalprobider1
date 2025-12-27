import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-primary p-8 md:p-16 text-primary-foreground">
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-sm font-medium mb-6">
              <Clock className="w-4 h-4" />
              枠数限定
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              ヤフショ運用を
              <br className="md:hidden" />
              まるごとお任せ
            </h2>

            <p className="text-lg md:text-xl opacity-90 mb-8">
              外注管理・リサーチ・買取屋とのやり取り…
              <br />
              面倒な作業はすべて当社が代行します。
              <br />
              まずは無料相談でお話しください。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="text-lg px-8"
              >
                <a href="#contact-form">
                  無料相談を申し込む
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>

            <p className="text-sm opacity-75 mt-6">
              ※ 相談は無料です。強引な営業は一切行いません。
            </p>
          </div>

          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
        </div>

        {/* Contact Form */}
        <div id="contact-form" className="max-w-xl mx-auto mt-16">
          <div className="bg-background border rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">
              無料相談フォーム
            </h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  お名前 <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  メールアドレス <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-method"
                  className="block text-sm font-medium mb-2"
                >
                  ご希望の連絡方法
                </label>
                <select
                  id="contact-method"
                  name="contact-method"
                  className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="">選択してください</option>
                  <option value="email">メール</option>
                  <option value="line">LINE</option>
                  <option value="phone">電話</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium mb-2"
                >
                  運用予定資金
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="">選択してください</option>
                  <option value="50">50万円未満</option>
                  <option value="100">50万円〜100万円</option>
                  <option value="300">100万円〜300万円</option>
                  <option value="500">300万円〜500万円</option>
                  <option value="1000">500万円以上</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  現状・ご質問など
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  placeholder="現在の状況やご質問があればご記入ください"
                />
              </div>

              <Button type="submit" size="lg" className="w-full text-lg">
                無料相談を申し込む
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                ※ 送信いただいた情報は、お問い合わせ対応にのみ使用いたします。
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
