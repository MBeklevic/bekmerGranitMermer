export const metadata = { title: "İletişim | Bekmer Granit Mermer" };

export default function ContactPage() {
  return (
    <main className="px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl md:text-5xl font-black tracking-[-0.033em]">
              Bize Ulaşın
            </h1>
            <p className="text-text-muted-light dark:text-text-muted-dark text-lg max-w-2xl mx-auto">
              Sorularınız için veya projeniz için teklif almak üzere bizimle
              iletişime geçin.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="flex flex-col space-y-10">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">İletişim Bilgileri</h3>
              <div className="flex flex-col divide-y divide-border-light dark:divide-border-dark">
                {[
                  {
                    label: "Adres",
                    value:
                      "Orhanlı Mescit Mah. Fettah Başaran Cad. Arda Sk. No: 2/B Tuzla İstanbul",
                    icon: "location_on",
                  },
                  {
                    label: "Telefon",
                    value:
                      "Tel: ( 0 216 ) 394 55 44 — Gsm: ( 0 532 ) 716  31 77",
                    icon: "call",
                  },
                  {
                    label: "E-posta",
                    value: "info@tuzlagranitmermer.com",
                    icon: "mail",
                  },
                  {
                    label: "Çalışma Saatleri",
                    value: "Pzt - Cmts: 9:00 - 18:00",
                    icon: "schedule",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 py-4 justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center rounded-lg bg-gray-200/60 dark:bg-gray-700/50 size-12">
                        <span className="material-symbols-outlined">
                          {item.icon}
                        </span>
                      </div>
                      <div className="flex flex-col justify-center">
                        <p className="text-base font-medium">{item.value}</p>
                        <p className="text-text-muted-light dark:text-text-muted-dark text-sm">
                          {item.label}
                        </p>
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
                  <input
                    type="email"
                    className="mt-1 block w-full rounded-lg border border-border-light dark:border-border-dark shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-white dark:bg-surface-dark"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">
                    Telefon (Opsiyonel)
                  </label>
                  <input className="mt-1 block w-full rounded-lg border border-border-light dark:border-border-dark shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-white dark:bg-surface-dark" />
                </div>
                <div>
                  <label className="block text-sm font-medium">Mesajınız</label>
                  <textarea
                    rows={4}
                    className="mt-1 block w-full rounded-lg border border-border-light dark:border-border-dark shadow-sm focus:border-primary focus:ring-primary sm:text-sm bg-white dark:bg-surface-dark"
                  />
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.7527937380614!2d29.349095376720292!3d40.89923727136598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caddc6f9906b6b%3A0xc0c5ecbd79414a39!2sTUZLA%20GRAN%C4%B0T%20MERMER%20%2FBEKMER%20%C2%AE%2F%20mutfak%20ve%20banyo%20tezgah%C4%B1!5e0!3m2!1str!2str!4v1764510243264!5m2!1str!2str"
            />
          </div>
        </div>
      </div>
    </main>
  );
}

