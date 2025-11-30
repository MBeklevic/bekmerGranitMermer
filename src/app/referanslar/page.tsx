export const metadata = { title: "Referanslar | Bekmer Granit Mermer" };

export default function ReferencesPage() {
  const items = [
    {
      title: "Nehir Kenarı Villa Banyosu",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDY3fMRdmzgW_cq8PAw65JjqnsSIoXQ6L_UipTu9OIn83xIrIP9jEJI7acypf371bdWHzMLdDgxmxltwkxZVNvna7Vvw4QPlKKMdnbWdfNmAi2nSM_2oMLz87B2tZK1h8xjPjACHRic7SAA7Oo84XgRjqBNcQOvkFD0gJga8Pfy1rLm3Uc35NtxWxASOz8QqquH-UOd-OTaUNt9uTdHgWn8LsIu8v3No7qM2d-wlFXYIlOoaUhr6KP9wORUfBhvxtmjVMDcbNVGM27-",
      span: "col-span-2 row-span-2"
    },
    {
      title: "Modernist Mutfak",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNIl1o2uYtKR9RGhmgaEN1l30nsb_EI8iLU95zg4lvaq6n-25dp_sdIigMPBdWW_GycH6FDqLtDuUl0Z2emk55FMMlZkBxVMtlC4IVXIXDXMWgh1ze81fx1lKCddUIuhIPLgDZkVOr5dfKjwODEXX1fWkwxg_mRagxjbYgzOQelH5JYyG1iUgln0uxTLjTf_EB2Solq_cyR7O_iNzOApUGqIYDUAJgO7hWaxjphUA2Yum3QoG5s0kAtCseGHXeShBb1xY5rmgpKcPN",
      span: ""
    },
    {
      title: "Kensington Rezidansı",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTp_Bk4D7ZgGnAZxrd4GgCqllKV6h0lGIdtSn3QUJvHTWgx-B-YkjIlUcV3yqk_Y4QATOsz5DwbxK8Udqu8rF6lCPOKPB8YgFTc12bIkhDZ1qx2vXDOBAJAcyKzn0fOp_alBQEQE1DxtZVxtVQ3JiTdDB10fN3c575TnNfyLW1PPGWAdexG8q6rIKg1AS8CExIgJscT3i9pkFubRb9_226usDIrqLlEhsr6txIn0Nhvj7Kp2_Y13D1MwoNub0CFEJltGhnyXUPRRIp",
      span: ""
    },
    {
      title: "Lüks Otel Spa",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1bVgc_Ygm6sTVeeF33OLxKlvlPldC1KnA7UlfjeCBXkLy-ZATu0M-Zg-8jZ2EedETtsAI0oJ3DLArO5Bzlb2JUMxpn-kRiYt-NgiD0TMmaY5_LCp1ksY_dcyOOIp5-MZpNpCHOX4h3c7yiCajQ7AW2vLFR5yu8bYr_Y8U9byX7ryIgG0rtICDJkxE82rjf0oqGiQykXiqpjOLTNqEdZD8pgS8QLFWtW-8zAQ4iurTp8h-N6lpg1eglW_ZMe-8KcuwCSxr-7OP4kR0",
      span: ""
    },
    {
      title: "Şehir Merkezi Kurumsal Lobi",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4_S6NQf9nmQQ7Ro9OOVoOUwihjyxODYxdL1KacdQR-U8dYag-BUzmOXxeMsDqPbz8bGMdy3Fve-nLZCW8FE8rZ4OKIvNQadXmYGDmu69iI1p4Ubp6rXMVz90c0DESqs-O_g_ejq_VrBBg32P2OQBsgMzXhb-xk7_vhDQaobA6L6o4A3wEwZMMLToDHpAfyYZyawZQku4707AQAXyT9l1vhYlIUw1-Fu9Cb_jZPzLqJjhxrH304RsSiRVTG5nuZIe9zT32EE1uOidZ",
      span: ""
    }
  ];

  return (
    <main className="flex flex-col gap-6 p-4 max-w-6xl mx-auto">
      <div className="flex flex-wrap justify-between gap-3 pt-6">
        <div className="flex min-w-72 flex-col gap-3">
          <p className="text-4xl font-black tracking-[-0.033em]">Referanslarımız</p>
          <p className="text-text-muted-light dark:text-text-muted-dark">
            Ticari ve konut projelerinden seçtiğimiz mermer uygulamalarını keşfedin.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((it, idx) => (
          <div key={idx} className={`${it.span} group relative overflow-hidden rounded-lg`}>
            <img src={it.src} alt={it.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4">
              <p className="text-white text-base font-bold leading-tight">{it.title}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

