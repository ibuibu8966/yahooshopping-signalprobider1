import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users } from "lucide-react";

// スプレッドシート風のダミーデータ
const sheetData = [
  { month: "4月", purchase: "6,427,700", profit: "240,447", rate: "3.7%" },
  { month: "5月", purchase: "3,131,200", profit: "99,015", rate: "3.2%" },
  { month: "6月", purchase: "11,197,871", profit: "399,194", rate: "3.6%" },
  { month: "7月", purchase: "8,378,835", profit: "270,695", rate: "3.2%" },
  { month: "8月", purchase: "4,874,090", profit: "183,561", rate: "3.8%" },
  { month: "9月", purchase: "6,831,400", profit: "263,035", rate: "3.9%" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-40">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/pexels-pixabay-268976.jpg"
          alt="Background"
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            {/* Yahoo!ショッピング logo badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-primary/30 bg-white shadow-sm">
              <Image
                src="/images/shopping_r_34_2x.png"
                alt="Yahoo!ショッピング"
                width={140}
                height={24}
                className="h-6 w-auto"
              />
              <span className="text-primary text-sm font-medium">運用代行</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              オーナーは
              <br />
              <span className="text-gradient">資金を投下</span>
              <br />
              するだけ
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              外注さんへの指示は全部こちら。仕入れから買取まで丸投げで、
              月次で利益計算・報告まで実施します。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" asChild className="text-lg px-10 py-6 rounded-lg glow">
                <a href="#contact">
                  無料相談する
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-10 py-6 rounded-lg border-border/50 hover:bg-secondary">
                <a href="#pricing">料金を見る</a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-10 pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">運用実績多数</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-gold" />
                </div>
                <span className="text-sm text-muted-foreground">月次レポート提供</span>
              </div>
            </div>
          </div>

          {/* スプレッドシート風UI */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border bg-white">
              {/* シートヘッダー */}
              <div className="bg-gradient-to-r from-primary to-primary/80 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-white/30" />
                  <div className="w-3 h-3 rounded-full bg-white/30" />
                  <div className="w-3 h-3 rounded-full bg-white/30" />
                </div>
                <span className="text-white text-sm font-medium ml-2">利益計算シート.xlsx</span>
              </div>

              {/* シート内容 */}
              <div className="overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-100 border-b border-gray-200">
                      <th className="px-3 py-2 text-left font-medium text-gray-600 border-r border-gray-200">月度</th>
                      <th className="px-3 py-2 text-right font-medium text-gray-600 border-r border-gray-200">仕入れ高</th>
                      <th className="px-3 py-2 text-right font-medium text-gray-600 border-r border-gray-200">荒利益</th>
                      <th className="px-3 py-2 text-right font-medium text-gray-600">利益率</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sheetData.map((row, index) => (
                      <tr key={index} className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                        <td className="px-3 py-2.5 font-medium text-gray-800 border-r border-gray-100">{row.month}</td>
                        <td className="px-3 py-2.5 text-right text-gray-700 border-r border-gray-100 font-mono">¥{row.purchase}</td>
                        <td className="px-3 py-2.5 text-right text-green-600 border-r border-gray-100 font-mono font-medium">¥{row.profit}</td>
                        <td className="px-3 py-2.5 text-right font-mono">
                          <span className="inline-flex items-center px-2 py-0.5 rounded bg-primary/10 text-primary font-medium">
                            {row.rate}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-primary/5 border-t-2 border-primary/20">
                      <td className="px-3 py-3 font-bold text-gray-800 border-r border-gray-200">合計</td>
                      <td className="px-3 py-3 text-right font-bold text-gray-800 border-r border-gray-200 font-mono">¥40,841,096</td>
                      <td className="px-3 py-3 text-right font-bold text-green-600 border-r border-gray-200 font-mono">¥1,455,947</td>
                      <td className="px-3 py-3 text-right">
                        <span className="inline-flex items-center px-2 py-0.5 rounded bg-primary text-white font-bold">
                          3.6%
                        </span>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              {/* シートフッター */}
              <div className="bg-gray-50 px-4 py-2 border-t border-gray-200 flex justify-between items-center">
                <span className="text-xs text-gray-500">2024年度 運用実績</span>
                <span className="text-xs text-gray-400">毎月更新</span>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-gold/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
