export const metadata = { title: "Hakkımızda | Bekmer Granit Mermer" };

export default function AboutPage() {
  return (
    <main className="px-6 md:px-10 lg:px-20 py-16 lg:py-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-display text-4xl font-bold tracking-tight lg:text-5xl mb-6">Hakkımızda</h1>
        <div className="space-y-5 text-text-muted-light dark:text-text-muted-dark leading-relaxed mb-10">
          <p>
            Bekmer Mermer ve Granit olarak Pendik’te kurulduğumuz 1984 yılından beri çalışmalarını ve referanslarını genişleten firmamız, 1997 yılında kurumsallaşarak edinmiş olduğu tecrübe ile müşterilerimizin memnuniyet dolu olumlu eleştirileriyle hizmetlerimize devam ettirmekteyiz.
          </p>
          <p>
            İstanbul içinde ve diğer şehirlerde yüzlerce projede başarılı uygulamalarımızla mermer ve granit sektöründe fark yaratmaktayız. Kullandığımız malzemeler Türkiye’nin en kaliteli mermer ocaklarından çıkarılan birinci sınıf malzemelerdir.
          </p>
          <p>
            Kaliteli malzemeler ve kaliteli işçilik ile birlikte her ikisini de tek bir noktada bulabileceğiniz Bekmer Granit, siz değerli müşterilerimize %100 memnuniyet garantisi vermektedir. Mutfak tezgâhları, mezar işleri, merdiven ve yer döşemelerimiz ve çeşitlerimiz için hemen iletişime geçiniz. Kataloglarımız ve referans işlerimiz için Tuzla’da bulunan imalat ofisimizi dilediğiniz zaman ziyaret edebilirsiniz.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Uzmanlık", desc: "Ocaktan tezgâha tüm süreçlerde uzman kadro ve modern ekipman." },
            { title: "Kalite", desc: "Dünyanın seçkin mermerlerini titizlikle temin eder ve işleriz." },
            { title: "Güven", desc: "Zamanında teslim ve uzun ömürlü kullanım için standartlarla uyum." },
          ].map((c) => (
            <div key={c.title} className="bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">{c.title}</h3>
              <p className="text-text-muted-light dark:text-text-muted-dark">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

