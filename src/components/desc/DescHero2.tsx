import Wayang from '../../assets/Wayang-1.webp'

export default function WarisanBudaya() {
  return (
    <section className="w-full bg-white px-5 py-16 sm:px-8 lg:px-14">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">

        <div className="group relative">
          <div
            className="
              relative
              h-[300px]
              w-full
              overflow-hidden
              rounded-[14px]
              bg-[#e9efec]
              shadow-[0_8px_25px_rgba(0,50,40,0.12)]
              sm:h-[360px]
              lg:h-[410px]
            "
          >
            <img
              src={Wayang}
              alt="Warisan budaya Bojonegoro"
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                ease-[cubic-bezier(.16,1,.3,1)]
                group-hover:scale-[1.04]
              "
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>

        <div className="max-w-[550px]">
          <span
            className="
              text-[8px]
              font-bold
              tracking-[0.18em]
              text-[#c56d35]
              sm:text-[9px]
            "
          >
            RASA & KARYA LOKAL
          </span>

          <h2
            className="
              mt-3
              max-w-[530px]
              text-[29px]
              font-extrabold
              leading-[1.08]
              tracking-[-1px]
              text-[#075542]
              sm:text-[34px]
              lg:text-[38px]
            "
          >
            Warisan Budaya dalam
            <br />
            Setiap Sentuhan
          </h2>

          <p
            className="
              mt-4
              max-w-[510px]
              text-[10px]
              leading-[1.75]
              text-[#737d79]
              sm:text-[11px]
              lg:text-[12px]
            "
          >
            Dukung pengrajin lokal dan rasakan kehangatan budaya Bojonegoro.
            Dari ukiran kayu jati yang presisi hingga canting Batik Bojonegoro
            yang sarat makna, setiap karya bercerita tentang tradisi yang terus
            hidup.
          </p>

          <div
            className="
              mt-5
              flex
              gap-3
              rounded-[7px]
              border-l-[3px]
              border-[#d9773d]
              bg-[#f8faf9]
              px-3
              py-3
              shadow-[0_4px_15px_rgba(0,50,40,0.03)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:shadow-[0_8px_22px_rgba(0,50,40,0.07)]
            "
          >
            <div className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-white text-[#d9773d]">
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 3 5 6v5c0 4.5 2.9 8.5 7 10 4.1-1.5 7-5.5 7-10V6l-7-3Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>

            <div>
              <h3 className="text-[9px] font-bold text-[#34433e] sm:text-[10px]">
                Authentic Sourcing
              </h3>

              <p className="mt-1 max-w-[430px] text-[8px] leading-[1.6] text-[#7b8581] sm:text-[9px]">
                Pembelian Anda langsung memberdayakan komunitas UMKM dan
                pengrajin lokal Bojonegoro.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="
              group
              mt-5
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-[#075542]
              px-4
              py-2
              text-[8px]
              font-medium
              text-white
              shadow-[0_6px_16px_rgba(0,70,55,0.16)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#08634e]
              hover:px-5
              hover:shadow-[0_10px_22px_rgba(0,70,55,0.20)]
              active:scale-95
            "
          >
            Jelajahi Karya Lokal
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
