export const metadata = { title: "Hizmetler | Marble Co." };

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <div className="mt-8 px-4">
        <div
          className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-4"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDAMbysAvgKZEXRfOtdRkMo7VWrKjrXjZFbeir7c6gnTxdTOkCQOWxDJk0HfUy8jaupuKiS0G-6WsO8aovmkOmJ1tN94GB5F1XPADJStN5_kebqsrsrQE7uw7IV1GKWpY37dBTzn_4IFoyMH2hSwxOLyqNgRerpD4lhYap9ivPSWZS3GDCWNULN0dBgiIej8E9Jjj0okI-l2OeIQ1F4PgPgAtt_El3qoAZE4pPfobyPGjGuheMBdS_90vwfOgKXyWkrAu0t5uDBrzOv")',
          }}
        >
          <div className="flex flex-col gap-2 text-center max-w-2xl">
            <h1 className="text-white text-4xl md:text-5xl font-black tracking-[-0.033em]">
              Hizmetlerimiz
            </h1>
            <h2 className="text-white/95 text-base md:text-lg">
              En yüksek kalite mermer işçiliği ve her projede tam müşteri memnuniyeti.
            </h2>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 p-4 mt-12 max-w-6xl mx-auto">
        {[
          {
            title: "Mutfak Tezgâhı Montajı",
            desc: "Göz alıcı ve dayanıklı mutfak yüzeyleri için usta işçilik.",
            url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKwZnESJLXEMWalfOpS3kR6Hj2IUhhPH6v_4TUhXIs96k0-AewRytAxWRz4TQdVroLRrQV4sPkvp2DVj3X42cS06KpkG-if94hVz3HJYzUqXFKerV99ubu213UGevSXFHdG_lNGKhDidYgPcvP42xZtc9jShNdscMg9pi1mx6YjJubYb0Q0wrYXsxCMFinDy9WVctIFTo3oVCcvptFdE4AFTWgFxXPlmT3V9-gXFCLbgm76vIcEbByh3iKDa6wN53Je0zBhOGnWdlT"
          },
          {
            title: "Banyo Tezgâhları",
            desc: "Banyonuzu zarif ve zamansız tezgâhlarla dönüştürün.",
            url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQbwE0gOZVZzDzkx9psAJprrFaQ8oKllyHA8HQEVQzJG-CHYk2y7iGJOkrztzTCCHuJoDzoR7CFxFmTkeSEoRjHPbVMOZlk9F-mO6UNQalkluDcQamDGND9Z69A3Uqfb7XH9HsLvJklpqaoMxNyQ-iECB0Hq5Q7hEKN0_t69zTXbUsNWPw_kycZSx29eA1HzePzq9ovWh1kYaD-NlmzG2tAt5Y1kR9lwETkrAq8r7WlH51Oe2msYFowNVHcHIhDVxbnk2MiJNkq-ZS"
          },
          {
            title: "Şömine Çevreleri",
            desc: "Özel mermer şöminelerle etkileyici bir odak noktası oluşturun.",
            url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGzTLRWUCcNB-WdPwZUiM4234ZtRnzsPfqt4S_UB428f0ZkNPRO1xA_pSII4OYCdYaen2XT_JBFQ7HE1Z4EkVIhAfLDFTSeIjahGq0kdidfI0HOMSxis5nFPOt5cby_dzs95nlbUhppQzsa1Kb5nqiOqNtEyqQHJuLoGt5NIKGtCU60OQs7OU5uW3A7CxP4WwfYPyYkWWtUurIT1-7Iht8-5Pl6SOHLqUQvsABFR2IRnjdDMvyC2L-3aChC-exVxhJf_v_b4wjXt4A"
          },
          {
            title: "Özel Zemin ve Döşeme",
            desc: "Premium mermer zeminlerle ayaklarınızın altında lüksü hissedin.",
            url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCz1Azm0cf0Ie1TVPt_Bxol5Oeg8hWAVE12H5MpEMlPlSTDgTbsDcBUdysJOh8D6psobw5clY5aTuQMAXYAZXUaewKFfNmCmTQ4fXiUqdZHnCp4SIzusuBr5iOh-xdYkVMDpibWLeAN4rnJ-N2qM3lM7PrwyBmwtctdpE595vknv6xafnXlmwBZaIx92iMsi9Yrv2oeQ4FiOV9StGzB3r25jvKXFYsABf48UXW1Zeo6O5fKwQpwYJvAjbpg6hv46wFHzeR8NpQMuGUU"
          },
          {
            title: "Mermer Parlatma ve Restorasyon",
            desc: "Mermer yüzeylerinizin doğal güzellik ve parlaklığını geri kazandırın.",
            url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAG46g05irCF4pK-FaeoQCZTZnT7rg8KlbOcEWatqJG-T_nW7wFyYKQgHbytMbimmGdWusgAyQlcfNb2LK_RxzfjbXFD1SLYHRgkOtVNLSsabSwQY0kBAMfxCRmW4gLCDb18Tob040H1SMVbCmMZ83xALwma8x1xESbHCTsJews_ycs9-5dZcW2hvABcfgaJJgU5rHXaXQJzSRX2KJ58XECSfjziEIzsAkpKdTnoWsDFNuJQb9syrv6dJMNxs4BbDYfevRog8lh8myO"
          },
          {
            title: "Ticari Projeler",
            desc: "Büyük ölçekli kurumsal mekânlarınızı mermer uygulamalarla yükseltin.",
            url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAm7NkQGsa1Wu4oUWimdxAkYEV3a8_JZw8FSn2KzO5bYu482-M3wPRWprYLhqSEWvh_Hc7x1KseLDT7BI_au8OoRMAJtQw8rZMXOCT5LzxLMj2FeIPZf8G6zOVgpmmBeZ2to9pNiZHa5JygXEnPbsMFor9ab3_ofpL8M84pu0EbvIxEtm0UYbIA5IlZO6fuNFlNUd37JKd8hdVtvuPgx0_riAAd5srU0CIjfWvD1DJVIGaJ0Og9yzl9_VyeSwoVTY_s85JUPA-E5Fy9"
          }
        ].map((item) => (
          <div key={item.title} className="flex flex-col gap-3 pb-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-lg"
              style={{ backgroundImage: `url('${item.url}')` }}
            />
            <div>
              <p className="text-lg font-medium">{item.title}</p>
              <p className="text-[#4c669a] dark:text-white/60 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="@container mt-12 mb-8 px-4">
        <div className="flex flex-col justify-end gap-6 px-4 py-10 bg-background-light dark:bg-background-dark/50 rounded-xl items-center text-center">
          <h2 className="text-[32px] md:text-4xl font-black tracking-[-0.033em] max-w-[720px]">
            Mekânınızı Dönüştürmeye Hazır mısınız?
          </h2>
          <p className="text-[#4c669a] dark:text-white/70 max-w-[720px]">
            Kişiselleştirilmiş bir danışmanlık için bugün bizimle iletişime geçin; vizyonunuzu mermerin zamansız güzelliğiyle gerçeğe dönüştürelim.
          </p>
          <a href="/teklif-al" className="flex min-w-[84px] items-center justify-center rounded-lg h-12 px-5 bg-primary text-white font-bold">
            Danışmanlık Planla
          </a>
        </div>
      </div>
    </div>
  );
}

