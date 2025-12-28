import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-40">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/pexels-nickcollins-1293120.jpg"
          alt="Background"
          fill
          className="object-cover opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
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

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/pexels-sound-on-3756877.jpg"
                alt="スマートフォンでの運用管理"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-gold/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
