import { Button } from "@/components/ui/button";
import { Check, Crown } from "lucide-react";

const plans = [
  {
    name: "初期費用",
    price: "330,000",
    unit: "円（税込）",
    description: "運用開始に必要な初期セットアップを行います",
    popular: false,
    features: [
      "ヤフショアカウントの作成",
      "配送先住所の登録",
      "クレジットカード登録",
      "アカウントの管理画面作成",
      "利益計算シートの作成",
      "外注さんへの購入フローとヤフショルールの伝授",
    ],
  },
  {
    name: "月額費用",
    price: "110,000",
    unit: "円（税込）/月",
    description: "運用に必要なすべての作業を代行します",
    popular: true,
    features: [
      "購入商品と買取先リサーチ",
      "外注さんへの購入指示",
      "買取屋とのやり取り",
      "買取屋への請求管理",
      "月次の利益計算と報告",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
            Pricing
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            シンプルな
            <span className="text-gradient">料金体系</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            初期費用と月額費用のみ。追加料金はありません。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-10 card-premium ${
                plan.popular
                  ? "bg-gradient-to-b from-primary/10 to-card border-2 border-primary/50"
                  : "bg-card border border-border/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-sm font-medium shadow-lg">
                    <Crown className="w-4 h-4" />
                    人気プラン
                  </span>
                </div>
              )}

              <div className="mb-8">
                <p className="text-sm text-muted-foreground mb-2 tracking-wide">
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl md:text-6xl font-bold text-gradient">
                    ¥{plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.unit}</span>
                </div>
                <p className="text-muted-foreground mt-4 leading-relaxed">
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
                className={`w-full text-lg py-6 rounded-xl ${
                  plan.popular ? "glow" : ""
                }`}
                variant={plan.popular ? "default" : "outline"}
              >
                <a href="#contact">無料相談する</a>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            ※ 契約期間・お支払い方法については、お問い合わせ時にご案内いたします。
          </p>
        </div>
      </div>
    </section>
  );
}
