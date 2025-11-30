export const metadata = { title: "Hakkımızda | Marble Co." };

export default function AboutPage() {
  return (
    <main className="px-6 md:px-10 lg:px-20 py-16 lg:py-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-display text-4xl font-bold tracking-tight lg:text-5xl mb-6">Hakkımızda</h1>
        <p className="text-text-muted-light dark:text-text-muted-dark leading-relaxed mb-10">
          Marble Co., 1982’den bu yana doğal taşın zarafetini yaşam alanlarına taşıyan bir atölyedir.
          Kalite, işçilik ve güvenilirlik ilkeleriyle; konut ve ticari projelerde mermer seçimi, imalatı ve
          montajına kadar sürecin her adımında yanınızdayız.
        </p>
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

