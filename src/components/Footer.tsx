export default function Footer() {
  return (
    <footer className="bg-surface-light dark:bg-surface-dark border-t border-border-light dark:border-border-dark px-6 md:px-10 lg:px-20 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold mb-4">Bekmer Granit Mermer</h3>
            <p className="text-text-muted-light dark:text-text-muted-dark text-sm leading-relaxed">
              Bekmer Mermer ve Granit, 1984’ten beri Pendik’te başlayan yolculuğunu 1997’de kurumsallaştırarak sürdürmekte; İstanbul ve diğer şehirlerde yüzlerce projeyle birinci sınıf malzeme ve işçilik sunmaktadır. %100 memnuniyet garantimizle hizmetinizdeyiz.
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
              <li>Adres: Orhanlı Mescit Mah. Fettah Başaran Cad. Arda Sk. No: 2/B Tuzla İstanbul</li>
              <li>Tel: ( 0 216 ) 394 55 44 — Gsm: ( 0 532 ) 716  31 77</li>
              <li>Mail: info@tuzlagranitmermer.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border-light dark:border-border-dark text-center text-text-muted-light dark:text-text-muted-dark text-sm">
          <p>© 2025 Bekmer Granit Mermer. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}

