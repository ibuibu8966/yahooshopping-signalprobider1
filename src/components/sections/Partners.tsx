export function Partners() {
  return (
    <section className="py-12 border-y bg-muted/30">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground mb-8">
          導入パートナー
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="w-32 h-12 rounded bg-muted flex items-center justify-center"
            >
              <span className="text-xs text-muted-foreground">準備中</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
