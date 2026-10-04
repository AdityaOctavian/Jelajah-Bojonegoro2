export default function WhyJelajah() {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41z" />
        </svg>
      ),
      title: "AI Travel Assistant",
      description:
        "Dapatkan rekomendasi destinasi dan itinerary cerdas yang disesuaikan dengan preferensi dan waktu Anda.",
      color: "bg-[#075542]",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
          <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
        </svg>
      ),
      title: "Budget Planner",
      description:
        "Rencanakan perjalanan tanpa khawatir. Sistem kami membantu mengatur estimasi biaya tiket, makan, dan transportasi.",
      color: "bg-[#ff8545]",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
        </svg>
      ),
      title: "Dukung UMKM Lokal",
      description:
        "Temukan dan dukung produk otentik serta kuliner khas Bojonegoro langsung dari pengrajin lokal.",
      color: "bg-[#075542]",
    },
  ];

  return (
    <section className="w-full bg-white px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1200px]">
        {/* HEADER */}
        <div className="text-center">
          <h2 className="text-[28px] font-extrabold tracking-[-0.8px] text-[#075542] sm:text-[32px]">
            Mengapa Jelajah Bojonegoro?
          </h2>

          <p className="mx-auto mt-3 max-w-[560px] text-[11px] leading-[1.7] text-[#7c8582] sm:text-[12px]">
            Dirancang khusus untuk memberikan pengalaman wisata yang tak
            terlupakan, terstruktur, dan memberdayakan lokal.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="
                group
                min-h-[175px]
                rounded-[10px]
                border
                border-[#dce3e0]
                bg-[#fafcfc]
                p-5
                transition-all
                duration-500
                ease-[cubic-bezier(.16,1,.3,1)]
                hover:-translate-y-2
                hover:border-[#b7d2c9]
                hover:bg-white
                hover:shadow-[0_18px_40px_rgba(0,70,55,0.11)]
              "
            >
              <div
                className={`
                  flex
                  h-[32px]
                  w-[32px]
                  items-center
                  justify-center
                  rounded-[7px]
                  ${feature.color}
                  text-[14px]
                  text-white
                  shadow-sm
                  transition-all
                  duration-500
                  group-hover:scale-110
                  group-hover:rotate-3
                `}
              >
                {feature.icon}
              </div>

              <h3 className="mt-4 text-[14px] font-bold text-[#273530] sm:text-[15px]">
                {feature.title}
              </h3>

              <p className="mt-2 max-w-[320px] text-[10px] leading-[1.7] text-[#78827f] sm:text-[11px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
