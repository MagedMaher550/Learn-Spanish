"use client";

import { useLocalization } from "@/contexts/localization-context";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import { BookOpen, Home, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"; // shadcn/ui sheet component

export function Navigation() {
  const { t, language } = useLocalization();
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: t("home"), icon: Home },
    { href: "/lessons", label: t("lessons"), icon: BookOpen },
    { href: "/vocabulary", label: t("vocabulary"), icon: BookOpen },
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold hidden [@media(min-width:375px)]:inline">
              Spanish A1.1
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Button
                  key={item.href}
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  asChild
                  className="gap-2"
                >
                  <Link href={item.href}>
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                </Button>
              );
            })}
          </nav>

          {/* Right Controls (Theme + Language + Mobile Menu) */}
          <div className="flex items-center gap-2">
            <ThemeSwitcher />
            <LanguageSwitcher />

            {/* Mobile Hamburger Menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side={language === "ar" ? "right" : "left"}
                  className="w-64"
                >
                  {language === "ar" && <div style={{ margin: "4px 0px" }} />}
                  <SheetHeader>
                    <SheetTitle>{t("Menu")}</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6 flex flex-col gap-2">
                    {navItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = pathname === item.href;
                      return (
                        <Button
                          key={item.href}
                          variant={isActive ? "default" : "ghost"}
                          size="sm"
                          asChild
                          className="justify-start gap-2"
                        >
                          <Link href={item.href}>
                            <Icon className="h-4 w-4" />
                            {item.label}
                          </Link>
                        </Button>
                      );
                    })}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
