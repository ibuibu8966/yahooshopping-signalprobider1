import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">SENRITSU</h3>
            <address className="not-italic text-sm text-muted-foreground space-y-1">
              <p>株式会社SENRITSU</p>
              <p>代表取締役 加藤 大成</p>
              <p>〒579-8036</p>
              <p>大阪府東大阪市鷹殿町11-2</p>
              <p>カワショウビル2・3階</p>
            </address>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">リンク</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  利用規約
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link
                  href="/law"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  特定商取引法に基づく表記
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">お問い合わせ</h3>
            <p className="text-sm text-muted-foreground mb-4">
              サービスに関するご質問・ご相談はお気軽にお問い合わせください。
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center text-sm text-primary hover:underline"
            >
              無料相談はこちら →
            </Link>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} 株式会社SENRITSU. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
