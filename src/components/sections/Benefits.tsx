import Image from "next/image";

const benefits = [
  {
    icon: "/images/icon-wallet.png",
    title: "オーナーは資金投下のみ",
    description: ["作業は一切不要。", "資金を用意するだけで、", "運用はすべてお任せいただけます。"],
  },
  {
    icon: "/images/icon-task.png",
    title: "外注指示まで丸投げ",
    description: ["外注さんへの購入指示も当方が対応。", "購入フローとルールの伝授まで行います。"],
  },
  {
    icon: "/images/icon-shop.png",
    title: "買取屋とのやり取り",
    description: ["商品リサーチから買取屋とのやり取りまで、", "運用に必要な作業をすべて代行します。"],
  },
  {
    icon: "/images/icon-document.png",
    title: "請求管理",
    description: ["買取屋への請求管理も代行。", "煩雑な事務作業から解放されます。"],
  },
  {
    icon: "/images/icon-chart.png",
    title: "月次レポート",
    description: ["毎月の利益計算と詳細なレポートを提供。", "収支が一目でわかります。"],
  },
  {
    icon: "/images/icon-shield.png",
    title: "リスク管理（規約遵守）",
    description: ["ヤフショの規約に準拠した運用設計で、", "アカウントリスクを最小化します。"],
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="py-24 md:py-40 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            選ばれる
            <span className="text-gradient">6つの理由</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
            <span className="md:hidden">
              ヤフショ運用の面倒な作業をすべて代行。
              <br />
              オーナー様は投資するだけで利益を得られる仕組みを提供します。
            </span>
            <span className="hidden md:inline">
              ヤフショ運用の面倒な作業をすべて代行。
              <br />
              オーナー様は投資するだけで利益を得られる仕組みを提供します。
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card border border-border shadow-sm card-premium"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center mb-6 border border-border shadow-sm">
                  <Image
                    src={benefit.icon}
                    alt={benefit.title}
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {benefit.description.map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < benefit.description.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
