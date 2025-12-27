import { Card, CardContent } from "@/components/ui/card";
import { Star, User } from "lucide-react";

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
    <section id="testimonials" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">お客様</span>
            の声
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            実際にご利用いただいているオーナー様からの声をご紹介します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                    <User className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} / {testimonial.age}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {testimonial.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          ※ 個人の感想であり、効果を保証するものではありません。
        </p>
      </div>
    </section>
  );
}
