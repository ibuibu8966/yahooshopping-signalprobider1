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
    <section id="stats" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            選ばれ続ける
            <span className="text-primary">実績</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            多くのオーナー様にご利用いただいています。
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-muted/50 border"
            >
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="font-medium mb-1">{stat.label}</p>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          ※ 数値は目標値・参考値を含みます。最新の実績はお問い合わせください。
        </p>
      </div>
    </section>
  );
}
