export default function Footer() {
  return (
    <footer className="bg-surface-light dark:bg-surface-dark border-t border-border-light dark:border-border-dark px-6 md:px-10 lg:px-20 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold mb-4">Marble Co.</h3>
            <p className="text-text-muted-light dark:text-text-muted-dark text-sm leading-relaxed">
              1982’den beri doğal taşta zarafet. Dünya çapında seçkin müşterilerimiz için en yüksek kaliteyi sunuyoruz.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li><a className="text-text-muted-light dark:text-text-muted-dark text-sm hover:text-primary transition-colors" href="/hakkimizda">Hakkımızda</a></li>
              <li><a className="text-text-muted-light dark:text-text-muted-dark text-sm hover:text-primary transition-colors" href="/hizmetler">Hizmetler</a></li>
              <li><a className="text-text-muted-light dark:text-text-muted-dark text-sm hover:text-primary transition-colors" href="/referanslar">Referanslar</a></li>
              <li><a className="text-text-muted-light dark:text-text-muted-dark text-sm hover:text-primary transition-colors" href="/iletisim">İletişim</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">İletişim</h3>
            <ul className="space-y-2 text-text-muted-light dark:text-text-muted-dark text-sm">
              <li>123 Mermer Yolu, Taş Şehri, 10101</li>
              <li>(123) 456-7890</li>
              <li>contact@marbleco.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border-light dark:border-border-dark text-center text-text-muted-light dark:text-text-muted-dark text-sm">
          <p>© 2024 Marble Co. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}

