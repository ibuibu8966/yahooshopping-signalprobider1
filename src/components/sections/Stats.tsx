const stats = [
  {
    value: "50+",
    label: "累計運用件数",
    description: "これまでの運用実績",
  },
  {
    value: "98%",
    label: "継続率",
    description: "ご満足いただける運用",
  },
  {
    value: "24h",
    label: "サポート対応",
    description: "迅速なサポート体制",
  },
  {
    value: "100%",
    label: "月次レポート",
    description: "毎月の詳細報告",
  },
];

export function Stats() {
  return (
    <section id="stats" className="py-24 md:py-40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
            Track Record
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            選ばれ続ける
            <span className="text-gradient">実績</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            多くのオーナー様にご利用いただいています。
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative text-center p-8 md:p-10 rounded-2xl bg-card border border-border shadow-sm card-premium group"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <p className="text-5xl md:text-6xl font-bold text-gradient mb-3">
                  {stat.value}
                </p>
                <p className="font-medium text-lg mb-2">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-12">
          ※ 数値は目標値・参考値を含みます。最新の実績はお問い合わせください。
        </p>
      </div>
    </section>
  );
}
