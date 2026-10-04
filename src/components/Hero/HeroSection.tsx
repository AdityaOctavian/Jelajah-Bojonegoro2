import heroImg1 from '../../assets/tari_jonegoroan.webp'
import heroImg2 from '../../assets/atasangin-1.webp'

export default function HeroSec() {
    return (
      <>
        <div className="h-[67px] w-5 block sm:hidden"></div>
        <main className="min-h-screen w-full overflow-hidden bg-[#f7f9f8] text-[#064d3f] overflow-y-hidden">
          <section className="overflow-y-hidden relative mx-auto flex min-h-screen max-w-[1400px] items-center px-6 py-12 md:px-16 lg:px-20 overflow-x-hidden">
            {/* Decorative blur */}
            <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-emerald-200/20 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-emerald-100/30 blur-3xl" />

            <div className="grid w-full grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
              {/* LEFT CONTENT */}
              <div className="relative z-10 max-w-[560px]">
                <div className="mb-5 inline-flex  items-center rounded-full bg-[#075542] px-3.5 py-1.5 text-[9px] font-semibold tracking-wide text-white shadow-sm">
                  SMART TRAVEL GUIDE
                </div>

                <h1 className="max-w-[540px] text-[32px] font-extrabold leading-[1.08] tracking-[-1.8px] text-[#064d3f] sm:text-[36px] lg:text-[38px]">
                  Teman Perjalanan
                  <br />
                  Digitalmu di Bojonegoro
                </h1>

                <p className="mt-5 max-w-[470px] text-[14px] leading-6 text-[#65716d]">
                  Temukan keindahan tersembunyi Bojonegoro dengan rencana
                  perjalanan berbasis AI, perencanaan anggaran yang praktis, dan
                  pengalaman lokal yang autentik.
                </p>
                <div className="mt-7 flex h-[46px] w-full max-w-[420px] items-center rounded-full border border-[#e2e8e5] bg-white/80 px-4 shadow-[0_5px_20px_rgba(0,0,0,0.03)] backdrop-blur-md transition-all duration-300 hover:border-[#a8c8be] hover:bg-white hover:shadow-[0_8px_30px_rgba(0,70,55,0.08)]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="mr-3 text-[#98a5a1]"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-4-4" />
                  </svg>

                  <input
                    type="text"
                    placeholder="Ke mana kamu ingin pergi?"
                    className="w-full bg-transparent text-[12px] text-[#34443f] outline-none placeholder:text-[#a1aaa7]"
                  />
                </div>
              </div>

              <div className="relative flex min-h-[470px] items-center justify-center lg:justify-end">
                <div className="relative h-[430px] w-[470px]">
                  <div
                    className="
                  glass-card
                  absolute left-[35px] top-[28px]
                  h-[375px] w-[300px]
                  rounded-[18px]
                  border border-white/70
                  bg-white/20
                  shadow-[0_25px_60px_rgba(0,60,45,0.10)]
                  backdrop-blur-[14px]
                  transition-all duration-[900ms]
                  ease-[cubic-bezier(.16,1,.3,1)]
                  hover:-translate-x-[115px]
                  hover:-translate-y-[10px]
                  hover:rotate-[-7deg]
                  hover:scale-[1.02]
                "
                  >
                    <div className="absolute inset-0 rounded-[18px] bg-gradient-to-br from-white/35 via-white/10 to-emerald-100/10" />
                    <img
                      src={heroImg2}
                      alt="Wisata Bojonegoro"
                      className=" h-full
                      w-full
                      object-cover
                      p-0.5
                      transition-transform
                      duration-700
                      ease-out
                     rounded-[15px]
                      "
                    />
                    <div className="relative h-full w-full rounded-[18px]" />
                  </div>

                  <div
                    className="
                  glass-card
                  absolute right-[0px] top-[72px]
                  h-[375px] w-[300px]
                  rounded-[18px]
                  border border-white/80
                  bg-white/25
                  shadow-[0_30px_70px_rgba(0,55,40,0.16)]
                  backdrop-blur-[18px]
                  transition-all duration-[900ms]
                  ease-[cubic-bezier(.16,1,.3,1)]
                  hover:translate-x-[115px]
                  p-0.5
                  hover:translate-y-[10px]
                  hover:rotate-[7deg]
                  hover:scale-[1.02]
                "
                  >
                    <div className="absolute inset-0 rounded-[18px] bg-gradient-to-br from-white/40 via-white/10 to-emerald-100/10" />
                    <img
                      src={heroImg1}
                      alt="Wisata Bojonegoro"
                      className=" h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                     rounded-[15px]
                      "
                    />
                    <div className="relative h-full w-full rounded-[18px]" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
}