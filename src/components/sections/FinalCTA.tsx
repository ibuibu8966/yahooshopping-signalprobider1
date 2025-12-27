import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Shield } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="contact" className="py-24 md:py-40">
      <div className="container mx-auto px-4">
        {/* CTA Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-primary/90 p-12 md:p-20 text-primary-foreground">
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-sm font-medium mb-8 border border-primary-foreground/20">
              <Clock className="w-4 h-4" />
              枠数限定
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              ヤフショ運用を
              <br />
              まるごとお任せ
            </h2>

            <p className="text-lg md:text-xl opacity-90 mb-10 leading-relaxed">
              外注管理・リサーチ・買取屋とのやり取り…
              <br />
              面倒な作業はすべて当社が代行します。
              <br />
              まずは無料相談でお話しください。
            </p>

            <Button
              size="lg"
              variant="secondary"
              asChild
              className="text-lg px-10 py-6 rounded-xl shadow-lg"
            >
              <a href="#contact-form">
                無料相談を申し込む
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>

            <p className="text-sm opacity-75 mt-8 flex items-center justify-center gap-2">
              <Shield className="w-4 h-4" />
              相談は無料です。強引な営業は一切行いません。
            </p>
          </div>

          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-3xl" />
        </div>

        {/* Contact Form */}
        <div id="contact-form" className="max-w-2xl mx-auto mt-20">
          <div className="bg-card border border-border/50 rounded-3xl p-10 md:p-12 shadow-2xl">
            <div className="text-center mb-10">
              <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
                Contact
              </p>
              <h3 className="text-3xl font-bold">無料相談フォーム</h3>
            </div>

            <form className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-3"
                >
                  お名前 <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-5 py-4 rounded-xl border border-border/50 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-3"
                >
                  メールアドレス <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-5 py-4 rounded-xl border border-border/50 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                  placeholder="example@email.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="contact-method"
                    className="block text-sm font-medium mb-3"
                  >
                    ご希望の連絡方法
                  </label>
                  <select
                    id="contact-method"
                    name="contact-method"
                    className="w-full px-5 py-4 rounded-xl border border-border/50 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
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
                    className="block text-sm font-medium mb-3"
                  >
                    運用予定資金
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full px-5 py-4 rounded-xl border border-border/50 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                  >
                    <option value="">選択してください</option>
                    <option value="50">50万円未満</option>
                    <option value="100">50万円〜100万円</option>
                    <option value="300">100万円〜300万円</option>
                    <option value="500">300万円〜500万円</option>
                    <option value="1000">500万円以上</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-3"
                >
                  現状・ご質問など
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-5 py-4 rounded-xl border border-border/50 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
                  placeholder="現在の状況やご質問があればご記入ください"
                />
              </div>

              <Button type="submit" size="lg" className="w-full text-lg py-6 rounded-xl glow">
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
