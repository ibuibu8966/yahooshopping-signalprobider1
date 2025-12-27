import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "田中 様",
    role: "会社経営者",
    age: "40代",
    content:
      "自分で運用していた頃は時間がかかって大変でしたが、完全に任せられるようになって本業に集中できています。月次レポートもわかりやすく、安心して運用を続けられます。",
    rating: 5,
  },
  {
    name: "佐藤 様",
    role: "投資家",
    age: "30代",
    content:
      "外注さんの管理が面倒で止まっていましたが、すべてお任せできるので助かっています。リサーチから買取屋とのやり取りまで、本当に何もしなくて良いのが魅力です。",
    rating: 5,
  },
  {
    name: "鈴木 様",
    role: "副業オーナー",
    age: "50代",
    content:
      "初期構築から運用まですべて丸投げできるのが決め手でした。月に一度のレポートで状況がわかるので、投資感覚で運用できています。",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-40 relative">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">お客様</span>
            の声
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            実際にご利用いただいているオーナー様からの声をご紹介します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-card rounded-2xl p-8 border border-border shadow-sm card-premium"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -left-2 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary" />
              </div>

              <div className="pt-4">
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-gold text-gold"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground/80 leading-relaxed mb-8">
                  「{testimonial.content}」
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-gold/20 flex items-center justify-center border border-primary/20">
                    <span className="text-lg font-bold text-primary">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} / {testimonial.age}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-12">
          ※ 個人の感想であり、効果を保証するものではありません。
        </p>
      </div>
    </section>
  );
}
