import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

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
    <section id="pricing" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            シンプルな
            <span className="text-primary">料金体系</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            初期費用と月額費用のみ。追加料金はありません。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.popular
                  ? "border-primary shadow-lg scale-105"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                    <Star className="w-4 h-4" />
                    人気プラン
                  </span>
                </div>
              )}

              <CardHeader className="pb-4">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl md:text-5xl font-bold">
                    ¥{plan.price}
                  </span>
                  <span className="text-muted-foreground ml-2">{plan.unit}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  <a href="#contact">無料相談する</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            ※ 契約期間・お支払い方法については、お問い合わせ時にご案内いたします。
          </p>
        </div>
      </div>
    </section>
  );
}
