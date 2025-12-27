"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navItems = [
  { href: "#benefits", label: "ベネフィット" },
  { href: "#how-it-works", label: "使い方" },
  { href: "#pricing", label: "料金" },
  { href: "#testimonials", label: "お客様の声" },
  { href: "#stats", label: "実績" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-wider">
            <span className="text-gradient">SENRITSU</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button asChild className="hidden md:inline-flex rounded-lg px-6">
            <a href="#contact">無料相談する</a>
          </Button>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="hover:bg-card">
                <Menu className="h-6 w-6" />
                <span className="sr-only">メニューを開く</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background border-border/50">
              <div className="mt-8">
                <span className="text-xl font-bold tracking-wider text-gradient">SENRITSU</span>
              </div>
              <nav className="flex flex-col space-y-6 mt-12">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary tracking-wide"
                  >
                    {item.label}
                  </a>
                ))}
                <Button asChild className="mt-6 rounded-lg">
                  <a href="#contact" onClick={() => setIsOpen(false)}>
                    無料相談する
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
