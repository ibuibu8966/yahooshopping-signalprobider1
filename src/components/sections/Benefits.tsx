import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Wallet,
  PackageCheck,
  BarChart3,
  Users,
  Shield,
  Rocket,
} from "lucide-react";

const benefits = [
  {
    icon: Wallet,
    title: "オーナーは資金投下のみ",
    description:
      "作業は一切不要。資金を用意するだけで、運用はすべてお任せいただけます。",
  },
  {
    icon: PackageCheck,
    title: "仕入れ〜買取まで丸投げ",
    description:
      "商品リサーチから買取屋とのやり取りまで、運用に必要な作業をすべて代行します。",
  },
  {
    icon: BarChart3,
    title: "月次で利益レポート",
    description:
      "毎月の利益計算と詳細なレポートを提供。収支が一目でわかります。",
  },
  {
    icon: Users,
    title: "外注運用を標準化",
    description:
      "外注さんへの購入フローとルールの伝授を行い、安定した運用体制を構築します。",
  },
  {
    icon: Shield,
    title: "リスク管理をサポート",
    description:
      "ヤフショの規約に準拠した運用設計で、アカウントリスクを最小化します。",
  },
  {
    icon: Rocket,
    title: "立ち上げを最短化",
    description:
      "アカウント作成から管理画面構築まで、初期セットアップを迅速に完了させます。",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            選ばれる
            <span className="text-primary">6つの理由</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ヤフショ運用の面倒な作業をすべて代行。
            オーナー様は投資するだけで利益を得られる仕組みを提供します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
