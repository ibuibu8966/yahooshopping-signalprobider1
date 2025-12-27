import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold tracking-wider mb-6">
              <span className="text-gradient">SENRITSU</span>
            </h3>
            <address className="not-italic text-sm text-muted-foreground space-y-2 leading-relaxed">
              <p>株式会社SENRITSU</p>
              <p>代表取締役 加藤 大成</p>
              <p className="pt-2">〒579-8036</p>
              <p>大阪府東大阪市鷹殿町11-2</p>
              <p>カワショウビル2・3階</p>
            </address>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6">
              Legal
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  href="/terms"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  利用規約
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link
                  href="/law"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  特定商取引法に基づく表記
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6">
              Contact
            </h3>
            <p className="text-sm text-foreground/70 mb-6 leading-relaxed">
              サービスに関するご質問・ご相談は
              <br />
              お気軽にお問い合わせください。
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors font-medium"
            >
              無料相談はこちら →
            </Link>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} 株式会社SENRITSU. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
