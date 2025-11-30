import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-border-light dark:border-border-dark px-6 md:px-10 lg:px-20 py-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="flex items-center gap-4 text-text-light dark:text-text-dark">
        <div className="size-6 text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none">
            <g clipPath="url(#a)">
              <path d="M42.174 20.174 27.826 5.826c1.31 1.31.572 4.361-1.627 7.939-1.346 2.191-3.24 4.58-5.548 6.887-2.307 2.307-4.696 4.201-6.887 5.548-3.578 2.198-6.629 2.936-7.94 1.626L20.174 42.174c1.31 1.31 4.361.572 7.939-1.626 2.191-1.346 4.58-3.24 6.887-5.548 2.307-2.307 4.201-4.696 5.548-6.887 2.198-3.578 2.936-6.629 1.626-7.94Z" fill="currentColor"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M7.242 26.407c.071.034.4.157 1.283-.033 1.07-.23 2.51-.842 4.194-1.877 2.04-1.253 4.307-3.046 6.52-5.258 2.212-2.213 4.004-4.48 5.258-6.52 1.034-1.685 1.646-3.124 1.877-4.195.19-.882.067-1.211.033-1.282-.062-.03-.264-.097-.74-.05-.692.067-1.671.358-2.896.95-2.433 1.177-5.433 3.349-8.356 6.271S9.32 20.337 8.143 22.77c-.593 1.226-.884 2.205-.95 2.897-.046.476.02.678.05.74Zm22.658-15.678c-.448 1.304-1.139 2.689-1.996 4.085-1.439 2.342-3.435 4.851-5.838 7.254-2.402 2.403-4.912 4.4-7.254 5.838-1.396.858-2.781 1.548-4.085 1.997l10.847 10.847c.025.013.324.183 1.298-.027 1.069-.23 2.509-.842 4.193-1.877 2.04-1.253 4.307-3.046 6.52-5.258s4.004-4.48 5.258-6.52c1.034-1.685 1.646-3.125 1.877-4.194.21-.974.04-1.274.027-1.298L29.9 10.728ZM29.24 4.412 43.588 18.76c1.388 1.387 1.387 3.364 1.045 4.954-.36 1.678-1.216 3.553-2.38 5.447-1.439 2.342-3.435 4.851-5.838 7.254-2.403 2.403-4.912 4.4-7.254 5.838-1.396.858-2.781 1.549-4.085 1.997-1.59.342-3.566.343-4.954-1.044L4.412 29.24C3.29 28.119 3.082 26.597 3.21 25.278c.13-1.337.626-2.793 1.331-4.25 1.419-2.932 3.891-6.288 7.044-9.44 3.152-3.153 6.509-5.625 9.441-7.044 1.458-.705 2.913-1.2 4.25-1.331 1.319-.128 2.84.08 3.961 1.202Z" fill="currentColor"/>
            </g>
            <defs>
              <clipPath id="a"><path fill="#fff" d="M0 0h48v48H0z"/></clipPath>
            </defs>
          </svg>
        </div>
        <h2 className="text-xl font-bold tracking-wide">Bekmer Granit Mermer</h2>
      </div>
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

