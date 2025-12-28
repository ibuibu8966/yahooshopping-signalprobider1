import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "どれくらいの資金が必要ですか？",
    answer:
      "運用資金は最低50万円程度から開始可能です。資金量に応じた運用プランをご提案いたしますので、まずは無料相談でご状況をお聞かせください。",
  },
  {
    question: "赤字になることはありますか？",
    answer:
      "市況や商品の在庫状況、ヤフショの規約変更等により、利益が変動する可能性があります。リスクを最小化するための運用設計を行っていますが、投資である以上、損失の可能性がゼロではないことをご理解ください。",
  },
  {
    question: "契約期間はありますか？",
    answer:
      "最低契約期間等の詳細は、お問い合わせ時にご案内いたします。ご状況に合わせて柔軟に対応可能ですので、まずはご相談ください。",
  },
  {
    question: "途中解約はできますか？",
    answer:
      "解約条件については契約時にご説明いたします。詳細はお問い合わせ時にご確認ください。",
  },
  {
    question: "どんな報告が来ますか？",
    answer:
      "毎月、利益計算と運用状況をまとめたレポートをお送りします。収支の詳細、運用した商品、今後の改善提案などを含む詳細な報告書です。",
  },
  {
    question: "アカウント停止などのリスクはありますか？",
    answer:
      "ヤフショの規約に準拠した運用を行っていますが、規約変更等によりリスクが発生する可能性はあります。リスク管理についても運用設計に含めて対応しています。",
  },
  {
    question: "外注さんはどうすればいいですか？",
    answer:
      "外注さんの採用や教育については、初期構築の段階でフローとルールをお伝えします。購入指示は当方から外注さんへ直接行いますので、オーナー様の作業は不要です。",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-40 relative">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/pexels-pixabay-268976.jpg"
          alt="Background"
          fill
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 bg-white/90 backdrop-blur-sm rounded-2xl py-10 px-6 max-w-3xl mx-auto shadow-lg">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
            FAQ
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            よくある
            <span className="text-gradient">ご質問</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            お問い合わせ前にご確認ください。
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 shadow-sm data-[state=open]:border-primary"
              >
                <AccordionTrigger className="text-left text-lg hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
