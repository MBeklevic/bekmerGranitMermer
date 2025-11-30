import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark px-6 md:px-10 lg:px-20 py-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <Link href="/" className="flex items-center gap-1 text-text-light dark:text-text-dark">
        <div className="size-8">
          <Image src="/assets/logo_2.svg" width={24} height={24} alt="Bekmer Granit Mermer" priority />
        </div>
        <span className="text-xl font-bold tracking-wide">Bekmer Granit Mermer</span>
      </Link>
      <nav className="hidden md:flex flex-1 justify-end items-center gap-8">
        <Link className="text-sm font-medium hover:text-primary transition-colors" href="/">Anasayfa</Link>
        <Link className="text-sm font-medium hover:text-primary transition-colors" href="/hakkimizda">Hakkımızda</Link>
        <Link className="text-sm font-medium hover:text-primary transition-colors" href="/hizmetler">Hizmetler</Link>
        <Link className="text-sm font-medium hover:text-primary transition-colors" href="/referanslar">Referanslar</Link>
        <Link className="text-sm font-medium hover:text-primary transition-colors" href="/iletisim">İletişim</Link>
        <Link className="flex min-w-[84px] items-center justify-center rounded-md h-10 px-4 bg-primary text-white text-sm font-bold tracking-wide hover:opacity-90 transition-opacity" href="/teklif-al">
          Teklif Al
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}

