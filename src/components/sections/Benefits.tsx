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
    <section id="benefits" className="py-24 md:py-40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            選ばれる
            <span className="text-gradient">6つの理由</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            ヤフショ運用の面倒な作業をすべて代行。
            <br className="hidden md:block" />
            オーナー様は投資するだけで利益を得られる仕組みを提供します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border/50 card-premium"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-gold/10 flex items-center justify-center mb-6 border border-primary/20">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
