import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ完了 | センリツヤフショシグナルプロパイダー",
  description: "お問い合わせありがとうございます。",
  robots: "noindex",
};

export default function ThanksPage() {
  return (
    <>
      <Header />
      <main className="py-20 min-h-[60vh] flex items-center">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <div className="mb-8">
            <CheckCircle className="w-20 h-20 text-primary mx-auto" />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            お問い合わせありがとうございます
          </h1>

          <p className="text-lg text-muted-foreground mb-8">
            お問い合わせを受け付けました。
            <br />
            内容を確認の上、担当者より折り返しご連絡いたします。
            <br />
            通常、2営業日以内にご連絡いたします。
          </p>

          <div className="bg-muted/50 rounded-lg p-6 mb-8">
            <h2 className="font-medium mb-2">ご確認ください</h2>
            <p className="text-sm text-muted-foreground">
              ご入力いただいたメールアドレス宛に、自動返信メールをお送りしております。
              <br />
              メールが届かない場合は、迷惑メールフォルダをご確認いただくか、
              <br />
              お手数ですが再度お問い合わせください。
            </p>
          </div>

          <Button asChild variant="outline" size="lg">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              トップページへ戻る
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
}
