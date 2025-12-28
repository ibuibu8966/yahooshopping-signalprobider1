const stats = [
  {
    value: "4,500万円+",
    label: "累計運用額",
    description: "半年間の運用実績",
  },
  {
    value: "140万円+",
    label: "累計利益",
    description: "運用で生み出した利益",
  },
  {
    value: "3.5%",
    label: "平均利益率",
    description: "安定した収益性",
  },
  {
    value: "1,400+",
    label: "累計取扱数",
    description: "商品の取扱実績",
  },
];

export function Stats() {
  return (
    <section id="stats" className="py-24 md:py-40 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
            Track Record
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            選ばれ続ける
            <span className="text-gradient">実績</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
            多くのオーナー様にご利用いただいています。
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative text-center p-4 md:p-10 rounded-2xl bg-card border border-border shadow-sm card-premium group"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-gradient mb-2 md:mb-3">
                  {stat.value}
                </p>
                <p className="font-medium text-sm md:text-lg mb-1 md:mb-2">{stat.label}</p>
                <p className="text-xs md:text-sm text-muted-foreground">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-12">
          ※ 2024年4月〜10月の運用実績です。利益を保証するものではありません。
        </p>
      </div>
    </section>
  );
}
