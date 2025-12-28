import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plan = {
  name: "月額費用",
  price: "110,000",
  unit: "円（税込）/月",
  description: "運用に必要なすべての作業を代行します",
  features: [
    "購入商品と買取先リサーチ",
    "外注さんへの購入指示",
    "買取屋とのやり取り",
    "買取屋への請求管理",
    "月次の利益計算と報告",
  ],
};

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-40 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
            Pricing
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            シンプルな
            <span className="text-gradient">料金体系</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
            <span className="md:hidden">
              月額費用のみ。
              <br />
              追加料金はありません。
            </span>
            <span className="hidden md:inline">
              月額費用のみ。追加料金はありません。
            </span>
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="relative rounded-3xl p-10 card-premium bg-gradient-to-b from-primary/10 to-card border-2 border-primary shadow-lg">
            <div className="mb-8">
              <p className="text-sm text-muted-foreground mb-2 tracking-wide">
                {plan.name}
              </p>
              <div className="flex items-end gap-1">
                <span className="text-5xl md:text-6xl font-bold text-gradient">
                  ¥{plan.price}
                </span>
                <span className="text-sm text-muted-foreground pb-2">{plan.unit}</span>
              </div>
              <p className="text-muted-foreground mt-4 leading-relaxed text-sm">
                {plan.description}
              </p>
            </div>

            <div className="border-t border-border/50 pt-8 mb-8">
              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              asChild
              size="lg"
              className="w-full text-lg py-6 rounded-xl glow"
            >
              <a href="#contact">無料相談する</a>
            </Button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            <span className="md:hidden">
              ※ 契約期間・お支払い方法については、
              <br />
              お問い合わせ時にご案内いたします。
            </span>
            <span className="hidden md:inline">
              ※ 契約期間・お支払い方法については、お問い合わせ時にご案内いたします。
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
