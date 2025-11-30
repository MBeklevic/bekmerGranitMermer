export const metadata = { title: "Teklif Al | Bekmer Granit Mermer" };

export default function QuotePage() {
  return (
    <>
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex min-h-[360px] md:min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 text-center"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCckCg8mwEGbgUifLNFss8VFr_d1KOBNl5Ij6ssPyMHKVeKnVZTO7m_kZa_shMB2bla5oOTisLR7hVKCSRYy6RFbk9p2k6JoywZVD2st4Q25oKrK4bkV8lm4sq_MzAeiEhYmIafdMHA0E7XfL1RBitDAjGSZg0n7mIS9EsPU7cGlGi-zWyo23b9IlBFyKdsTwDGxCIHI1QYbgUDv2V-9QRLcHwWz9t6pEKK475GtSV6SU2wxRDgMuueyMDYi7Vr9Z92HuIZaotvuF9X")',
            }}
          >
            <div className="flex flex-col gap-4">
              <h1 className="text-white text-4xl md:text-6xl font-black tracking-tighter">
                Projenizi Başlatalım
              </h1>
              <p className="text-white/90 max-w-xl mx-auto md:text-lg">
                Aşağıdaki formu doldurun; mermer uzmanlarımız 24 saat içinde vizyonunuzu konuşmak için sizinle iletişime geçecektir.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <div className="bg-white dark:bg-background-dark/50 p-8 rounded-xl border border-gray-200/80 dark:border-gray-800/80 shadow-sm">
              <form className="grid grid-cols-1 sm:grid-cols-2 gap-6" action="#" method="post">
                <div className="sm:col-span-2">
                  <label className="flex flex-col">
                    <p className="text-base font-medium pb-2">Ad Soyad</p>
                    <input className="form-input rounded-lg border border-[#cfd7e7] dark:border-gray-700 bg-background-light dark:bg-gray-900/50 h-14 p-[15px] focus:outline-0 focus:ring-2 focus:ring-primary/50" placeholder="Adınızı ve soyadınızı girin" />
                  </label>
                </div>
                <div>
                  <label className="flex flex-col">
                    <p className="text-base font-medium pb-2">E-posta</p>
                    <input type="email" className="form-input rounded-lg border border-[#cfd7e7] dark:border-gray-700 bg-background-light dark:bg-gray-900/50 h-14 p-[15px] focus:outline-0 focus:ring-2 focus:ring-primary/50" placeholder="E-posta adresiniz" />
                  </label>
                </div>
                <div>
                  <label className="flex flex-col">
                    <p className="text-base font-medium pb-2">Telefon</p>
                    <input type="tel" className="form-input rounded-lg border border-[#cfd7e7] dark:border-gray-700 bg-background-light dark:bg-gray-900/50 h-14 p-[15px] focus:outline-0 focus:ring-2 focus:ring-primary/50" placeholder="Telefon numaranız" />
                  </label>
                </div>
                <div className="sm:col-span-2">
                  <label className="flex flex-col">
                    <p className="text-base font-medium pb-2">Proje Türü</p>
                    <select className="form-select rounded-lg border border-[#cfd7e7] dark:border-gray-700 bg-background-light dark:bg-gray-900/50 h-14 p-[15px] text-gray-600">
                      <option>Seçiniz</option>
                      <option>Mutfak Tezgâhı</option>
                      <option>Banyo Tezgâhı</option>
                      <option>Zemin Döşeme</option>
                      <option>Şömine Çevresi</option>
                      <option>Diğer</option>
                    </select>
                  </label>
                </div>
                <div className="sm:col-span-2">
                  <label className="flex flex-col">
                    <p className="text-base font-medium pb-2">Proje Detayları</p>
                    <textarea className="form-textarea rounded-lg border border-[#cfd7e7] dark:border-gray-700 bg-background-light dark:bg-gray-900/50 min-h-32 p-[15px] focus:outline-0 focus:ring-2 focus:ring-primary/50" placeholder="Projenizi ölçüler ve tercih ettiğiniz mermer türüyle birlikte tarif edin." />
                  </label>
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" className="flex w-full items-center justify-center rounded-lg h-12 px-5 bg-primary text-white text-base font-bold hover:bg-primary/90">
                    Talebi Gönder
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Bize Doğrudan Ulaşın</h3>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">phone</span>
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">mail</span>
                  <span>contact@marbleco.com</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl mt-0.5">location_on</span>
                  <span>123 Mermer Cad.,<br/>Taş Şehri, ST 12345</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Showroom’u Ziyaret Edin</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Mermer seçimimizi yerinde deneyimleyin. Uzmanlarımız size rehberlik etmek için hazır.</p>
              <p className="text-sm font-semibold">Çalışma Saatleri: Pzt - Cum, 9:00 - 17:00</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

