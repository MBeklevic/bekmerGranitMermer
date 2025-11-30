export const metadata = { title: "İletişim | Bekmer Granit Mermer" };

export default function ContactPage() {
  return (
    <main className="px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl md:text-5xl font-black tracking-[-0.033em]">Bize Ulaşın</h1>
            <p className="text-text-muted-light dark:text-text-muted-dark text-lg max-w-2xl mx-auto">
              Sorularınız için veya projeniz için teklif almak üzere bizimle iletişime geçin.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="flex flex-col space-y-10">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">İletişim Bilgileri</h3>
              <div className="flex flex-col divide-y divide-border-light dark:divide-border-dark">
                {[
                  { label: "Adres", value: "123 Mermer Caddesi, No:100, Taşkent, ST 98765", icon: "location_on" },
                  { label: "Telefon", value: "+1 (555) 123-4567", icon: "call" },
                  { label: "E-posta", value: "contact@marbleco.com", icon: "mail" },
                  { label: "Çalışma Saatleri", value: "Pzt - Cum: 9:00 - 17:00", icon: "schedule" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4 py-4 justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center rounded-lg bg-gray-200/60 dark:bg-gray-700/50 size-12">
                        <span className="material-symbols-outlined">{item.icon}</span>
                      </div>
                      <div className="flex flex-col justify-center">
                        <p className="text-base font-medium">{item.value}</p>
                        <p className="text-text-muted-light dark:text-text-muted-dark text-sm">{item.label}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Bize Mesaj Gönderin</h3>
              <form className="space-y-6" action="#" method="post">
                <div>
                  <label className="block text-sm font-medium">Ad Soyad</label>
                  <input className="mt-1 block w-full rounded-lg border border-border-light dark:border-border-dark shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-white dark:bg-surface-dark" />
                </div>
                <div>
                  <label className="block text-sm font-medium">E-posta</label>
                  <input type="email" className="mt-1 block w-full rounded-lg border border-border-light dark:border-border-dark shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-white dark:bg-surface-dark" />
                </div>
                <div>
                  <label className="block text-sm font-medium">Telefon (Opsiyonel)</label>
                  <input className="mt-1 block w-full rounded-lg border border-border-light dark:border-border-dark shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-white dark:bg-surface-dark" />
                </div>
                <div>
                  <label className="block text-sm font-medium">Mesajınız</label>
                  <textarea rows={4} className="mt-1 block w-full rounded-lg border border-border-light dark:border-border-dark shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-white dark:bg-surface-dark" />
                </div>
                <div>
                  <button className="flex w-full items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-base font-bold hover:bg-primary/90">
                    Gönder
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="w-full h-96 lg:h-full rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.250875381881!2d-122.4194156846816!3d37.7882519797576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c1f930a0d%3A0x8c7c9c2b9a7b9c6a!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1str!2s!4v1620000000000!5m2!1str!2s"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

