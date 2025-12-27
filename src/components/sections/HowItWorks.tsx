import { Settings, Play, FileText } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Settings,
    title: "初期構築",
    description:
      "ヤフショアカウントの作成、配送先住所・クレカ登録、管理画面・利益計算シートの作成、外注さんへのルール伝授を行います。",
    items: [
      "ヤフショアカウント作成",
      "配送先住所・クレカ登録",
      "管理画面作成",
      "利益計算シート作成",
      "外注さんへのフロー伝授",
    ],
  },
  {
    number: "02",
    icon: Play,
    title: "運用開始",
    description:
      "購入商品と買取先のリサーチを行い、外注さんへ購入指示を出し、買取屋との連携を開始します。",
    items: [
      "商品・買取先リサーチ",
      "外注さんへの購入指示",
      "買取屋とのやり取り",
      "請求管理",
    ],
  },
  {
    number: "03",
    icon: FileText,
    title: "月次レポート",
    description:
      "毎月の利益計算と詳細なレポートを作成し、運用状況をご報告。改善提案も行います。",
    items: ["利益計算", "運用レポート作成", "改善提案"],
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">3ステップ</span>
            で運用開始
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            初期構築から運用開始、月次レポートまで。
            すべてをお任せいただけるシンプルな流れです。
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-background rounded-2xl p-8 border shadow-sm z-10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                    {step.number}
                  </div>
                  <div>
                    <step.icon className="w-6 h-6 text-primary mb-1" />
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">{step.description}</p>

                <ul className="space-y-2">
                  {step.items.map((item, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
