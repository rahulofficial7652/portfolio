'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from '@/components/theme-toggle';
import { useIsMobile } from '@/hooks/use-mobile';
import { useScrollSpy } from '@/hooks/use-scroll-spy';

const NAV_LINKS = [
  { href: 'home', label: 'Home' },
  { href: 'about', label: 'About' },
  { href: 'skills', label: 'Skills' },
  { href: 'projects', label: 'Projects' },
  { href: 'experience', label: 'Experience' },
  { href: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const activeSection = useScrollSpy(NAV_LINKS.map(link => link.href));

  const NavItems = () => (
    <>
      {NAV_LINKS.map((link) => (
        <Button key={link.href} variant="ghost" asChild>
          <Link
            href={`#${link.href}`}
            className={`capitalize transition-colors ${
              activeSection === link.href
                ? 'text-primary font-semibold'
                : 'text-muted-foreground hover:text-foreground'
            }`}
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </Link>
        </Button>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Code2 className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
          <span className="text-lg sm:text-xl font-bold font-headline">Rahul</span>
        </Link>
        <div className="flex items-center gap-2">
          {!isMobile && (
            <nav className="hidden md:flex gap-1">
              <NavItems />
            </nav>
          )}
          <ThemeToggle />
          {isMobile && (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                 <Link href="/" className="flex items-center gap-2 mb-8">
                    <Code2 className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                    <span className="text-lg sm:text-xl font-bold font-headline">Rahul</span>
                </Link>
                <nav className="flex flex-col gap-4 text-lg">
                  <NavItems />
                </nav>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
}
