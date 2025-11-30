export default function HomePage() {
  return (
    <>
      <section className="w-full">
        <div
          className="flex h-[calc(100vh-80px)] min-h-[600px] flex-col items-center justify-center gap-6 bg-cover bg-center bg-no-repeat p-4 text-center"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAGc7FV3TpaUODjnX2sKQ_UXPs7N0Le2BKz0yteU3xUKAf0dZgDnQfHpYcr0L_wspS08fKzSQ3CQu2cGdg-Owl8IFud6PYLjRqhgU9WGH3s1ZIZfVvbtkSx4lbKQmSUtipQc006ne5-6UWpBUV0cBhxo3b23qjRAD8qFkbSWDKD7nyvO1gcZAv9PQrmnI-kZQC38gqWjTV6qFcuyV3CQaJIM3JrRCW9KVtufz7rMzN3Et0N7X2yMqgJkPH9YiuZnFxecsNgja6YTeOr")',
          }}
        >
          <div className="flex flex-col gap-4 max-w-3xl">
            <h1 className="font-display text-white text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Doğal Taşın Sanatı
            </h1>
            <p className="text-white/90 text-base md:text-lg">
              Dünyanın en seçkin mermer koleksiyonuyla zamansız zarafet ve benzersiz kaliteyi keşfedin.
            </p>
          </div>
          <a
            href="/hizmetler"
            className="flex min-w-[84px] items-center justify-center rounded-md h-12 px-6 bg-[#c0a172] text-white text-base font-bold tracking-wide hover:opacity-90 transition-opacity"
          >
            Koleksiyonumuzu Keşfedin
          </a>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-20 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="flex flex-col gap-4">
              <h2 className="font-display text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
                Taşta Bir Miras
              </h2>
              <p className="text-text-muted-light dark:text-text-muted-dark text-base leading-relaxed">
                Onlarca yıllık deneyimimizle, en güzel doğal taşları temin etmeye ve işlemeye adadık.
                Kalite ve işçilik anlayışımız, her plakada hayat bulur; mekânlara zarafeti ve nesiller
                boyu sürecek dayanıklılığı taşır.
              </p>
            </div>
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCDmFdEbuLW58dviJR8RD-lKmXIPAyNI3s0OjYsmIEIfsopcGtk_0cc5FcGi1IzxXjYRulrX_Xj5Kfhuid6vLDFJREHbraBi1U4UhhnobJNpuV5_jgOEqXYy-eFJt3bPseBYJ0NfhiIi1f6eKVk5x7oy0VC7p52WopxmM6ehu1T2uurPL8rAxvhyL5fmhYQd7CGHwsPMIU4nP9z5zoGmil2BckhiUPAvHKVPIPsGOAKzplHG6ri4iHXxyKBCinDsh_CBF4e76rSoU8U")',
              }}
            />
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-20 py-16 lg:py-24 bg-surface-light dark:bg-surface-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold tracking-tight lg:text-5xl">
              İmza Mermerlerimiz
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Calacatta Gold",
                url: "https://lh3.googleusercontent.com/aida-public/AB6AXuCb8IJCQ_au8j481ZjTJ38N07K4gksD1c_ndAf-cudRiGYyoqDp2pb470GV1q1RqXVuFjX88J_n6tqwF9fu8VTwEcMz-AKbnjqFL4fxtl9j9C0QbMqvz3SILyrkT8_gVT92bdDlFlshKRXFNm3H74tG1EF7KjGUn2v1W5mk3ZtqSCd3Vx4JJFivzQI1IyLSnkKBzuZhIVovUPrjNNk3yj2MV95pQv3DTSisUIRl4vWskO4XBSfdSNj9Pl0_feg29ElA8CQM-0M1Lyy-"
              },
              {
                name: "Carrara White",
                url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsLv9iHng1QL_2y5zDwID3fkZbXU-9xhokuTlPEy5sOoo2pIrR8x6RXB6fFS5D0vLl8PrmhPZ9otzHhQcIOke-lYwrKqcm5m9iQExhFP2ZKT3ZqqhBDMUakbRdJAc5WeC-RphFajHuknzOFGRFNnvMZnCSGerzitC5afidurv3C2-Xs8EdUFlVrKqE7mxtxmvW9p8p-Xcb5WxszN8kmKQJMe5eLKQM6MIGmqwlVc1nRDhcDs6SWO0KT6P-bIkqO9_JVlksJzNNhnB4"
              },
              {
                name: "Nero Marquina",
                url: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_yDJBQAnv6cPf6pX5ip3jLEO3b_xXpWxAB4Co__4b_YPd_LIuETn1LVDM9yt9ztTzqxFGKqViY97U8NDU9oBlpajC5XR3olPZKf564bKIwn9ayMuPk5uxCEyoiKZUkdjZV01WJTItX8Gu3pkhabmd-IuzW01QLv2ZP-M1Bp4ueVk_gCGO0mJWCLZQSsJUI53KaXV5ejAYf443QBONw5eDh9TDystLrk7iyUAgoOvlhtXh_w9HoI3iiuWBRWxR_AaSWYoJhgYoFeRu"
              },
              {
                name: "Emperador Dark",
                url: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4Agble5PS4xWaKe0xNUo6uaXZREzvnLY9ZdtI5ivZbY15m_BYELgzs4Y_Tni7F-IRs2XHRcO0haZOqZuGxukg6IdN1L-iVlOv4_ANezMKO9otTZHvJV8iDkRuAHM7ylrH9AB85E6_yL13A4cjSf3PYXZ3E-zCaywSCRa6xeM6IM5l6DW742Yg-AzLgENcw0td3j_QblrXYz9mnT_uv9uw5-iUzbSJozu6BzRE4SXSIKWEhYXemjK2CMDqHVtyuZEpyvmZmQ7w1ptn"
              }
            ].map((m) => (
              <div
                key={m.name}
                className="bg-cover bg-center flex flex-col gap-3 rounded-lg justify-end p-4 aspect-[3/4] group overflow-hidden"
                style={{
                  backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%), url('${m.url}')`
                }}
              >
                <p className="text-white text-lg font-bold leading-tight transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {m.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-20 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-bold tracking-tight lg:text-5xl">
              Ocaktan Tezgaha
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {[
              {
                icon: "support_agent",
                title: "Danışmanlık",
                desc: "Uzmanlarımız, projenizin estetik ve işlevsel ihtiyaçlarına uygun taşı seçmenize rehberlik eder."
              },
              {
                icon: "construction",
                title: "İmalat",
                desc: "Seçtiğiniz mermer plakaları, hassas teknoloji ile tam ölçülerinize göre kesip işleriz."
              },
              {
                icon: "home_work",
                title: "Montaj",
                desc: "Profesyonel ekiplerimiz kusursuz montajla mermerin zamansız güzelliğini mekânınıza taşır."
              }
            ].map((s) => (
              <div key={s.title} className="flex flex-col items-center gap-4">
                <div className="flex items-center justify-center size-16 bg-primary/10 rounded-full text-primary">
                  <span className="material-symbols-outlined" style={{ fontSize: 32 }}>{s.icon}</span>
                </div>
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="text-text-muted-light dark:text-text-muted-dark text-base leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

