import Image from "next/image";
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
    <section id="how-it-works" className="py-24 md:py-40 relative">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/pexels-pixabay-268976.jpg"
          alt="Background"
          fill
          className="object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/98 to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
            How It Works
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">3ステップ</span>
            で運用開始
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            初期構築から運用開始、月次レポートまで。
            <br className="hidden md:block" />
            すべてをお任せいただけるシンプルな流れです。
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-[16.5%] right-[16.5%] h-px bg-gradient-to-r from-primary/50 via-gold/50 to-primary/50 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative"
              >
                {/* Step number badge */}
                <div className="flex justify-center mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground flex items-center justify-center font-bold text-2xl shadow-lg glow relative z-10">
                    {step.number}
                  </div>
                </div>

                <div className="bg-card rounded-2xl p-8 border border-border shadow-sm card-premium h-full">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>

                  <p className="text-muted-foreground mb-8 text-center leading-relaxed">
                    {step.description}
                  </p>

                  <ul className="space-y-3">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-gold mr-3 shrink-0" />
                        <span className="text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
