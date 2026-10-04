import { ButtonAI } from "../../components/button/btn-ai";
import { Footer } from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";

type Activity = {
  time: string;
  title: string;
  description: string;
  image: string;
};

const activities: {
  day: string;
  title: string;
  items: Activity[];
}[] = [
  {
    day: "Hari 1",
    title: "Kedatangan & Eksplorasi",
    items: [
      {
        time: "08:00",
        title: "Tiba di Stasiun Bojonegoro",
        description:
          "Penjemputan dan perjalanan menuju destinasi pertama untuk memulai perjalanan.",
        image: "/images/stasiun.jpg",
      },
      {
        time: "10:30",
        title: "Malioboro / Alun-Alun",
        description:
          "Menikmati suasana kota dan mengenal berbagai aktivitas lokal masyarakat.",
        image: "/images/malioboro.jpg",
      },
      {
        time: "15:00",
        title: "Matahari Terbenam di Kayangan Api",
        description:
          "Mengunjungi kawasan wisata api abadi sambil menikmati pemandangan sore.",
        image: "/images/kayangan-api.jpg",
      },
    ],
  },
  {
    day: "Hari 2",
    title: "Alam & Kunjungan",
    items: [
      {
        time: "08:00",
        title: "Waduk Pacal",
        description:
          "Menikmati keindahan alam Waduk Pacal dengan suasana yang tenang dan sejuk.",
        image: "/images/waduk-pacal.jpg",
      },
      {
        time: "13:00",
        title: "Negeri di Atas Angin",
        description:
          "Perjalanan menuju destinasi dengan pemandangan alam Bojonegoro dari ketinggian.",
        image: "/images/negeri-atas-angin.jpg",
      },
    ],
  },
  {
    day: "Hari 3",
    title: "Budaya & Kepulangan",
    items: [
      {
        time: "09:00",
        title: "Cendera Mata Khas Bojonegoro",
        description:
          "Berbelanja oleh-oleh dan produk lokal sebelum mengakhiri perjalanan.",
        image: "/images/oleh-oleh.jpg",
      },
    ],
  },
];

export default function Perencanaan() {
  return (
    <>
      <Navbar />
      <ButtonAI />
      <div className="h-[67px] w-5 block"></div>
      <main className="min-h-screen bg-[#f7f9f8] px-4 py-5 text-[#263630] sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1100px]">
          {/* =====================================================
            HEADER
        ====================================================== */}
          <section
            className="
            rounded-[8px]
            border
            border-[#e1e7e4]
            bg-white
            px-4
            py-3
            shadow-[0_3px_15px_rgba(0,50,40,0.04)]
            sm:px-5
          "
          >
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <h1 className="text-[14px] font-extrabold tracking-[-0.3px] text-[#263630] sm:text-[17px]">
                  3 Hari di Bojonegoro
                </h1>

                <div className="mt-1 flex flex-wrap items-center gap-3 text-[6px] text-[#8a9490] sm:text-[7px]">
                  <span className="flex items-center gap-1">
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    2 Orang
                  </span>

                  <span className="flex items-center gap-1">
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M3 6h18" />
                      <path d="M6 3v3" />
                      <path d="M18 3v3" />
                      <rect x="3" y="6" width="18" height="15" rx="2" />
                    </svg>
                    3 September 2026
                  </span>

                  <span className="flex items-center gap-1">
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                    07:12 - 04:14
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="
                flex
                h-[24px]
                items-center
                justify-center
                gap-1.5
                rounded-full
                border
                border-[#075542]
                px-3
                text-[7px]
                font-semibold
                text-[#075542]
                transition-all
                duration-300
                hover:bg-[#075542]
                hover:text-white
              "
              >
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 12h16" />
                  <path d="m14 6 6 6-6 6" />
                </svg>
                Full Itinerary
              </button>
            </div>
          </section>

          {/* =====================================================
            CONTENT
        ====================================================== */}
          <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-[1fr_300px]">
            {/* =================================================
              LEFT - DETAIL PERJALANAN
          ================================================== */}
            <section>
              <h2 className="mb-3 text-[10px] font-bold text-[#263630] sm:text-[11px]">
                Detail Perjalanan
              </h2>

              <div className="space-y-5">
                {activities.map((day, dayIndex) => (
                  <div key={day.day}>
                    {/* DAY TITLE */}
                    <div className="mb-2 flex items-center gap-2">
                      <div className="flex h-[17px] w-[17px] items-center justify-center rounded-full bg-[#075542] text-[7px] font-bold text-white">
                        {dayIndex + 1}
                      </div>

                      <h3 className="text-[8px] font-bold text-[#075542] sm:text-[9px]">
                        {day.day}: {day.title}
                      </h3>
                    </div>

                    {/* TIMELINE */}
                    <div className="relative ml-[8px] border-l border-[#dce5e1] pl-4">
                      <div className="space-y-2.5">
                        {day.items.map((activity, index) => (
                          <ActivityCard
                            key={`${day.day}-${index}`}
                            activity={activity}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* =================================================
              RIGHT - RINGKASAN PEMESANAN
          ================================================== */}
            <aside>
              <div
                className="
                sticky
                top-5
                rounded-[7px]
                border
                border-[#dfe6e3]
                bg-white
                p-3
                shadow-[0_4px_16px_rgba(0,50,40,0.07)]
              "
              >
                <h2 className="text-[9px] font-bold text-[#263630]">
                  Ringkasan Pemesanan
                </h2>

                {/* DESTINATION */}
                <div className="mt-3 flex gap-2">
                  <div className="h-[36px] w-[45px] shrink-0 overflow-hidden rounded-[3px] bg-[#edf1ef]">
                    <img
                      src="/images/kayangan-api.jpg"
                      alt="Kayangan Api"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[7px] font-semibold text-[#34433e]">
                      3 Hari di Bojonegoro
                    </p>

                    <p className="mt-1 text-[6px] text-[#8b9591]">
                      6 Destinasi • 3 Hari
                    </p>
                  </div>
                </div>

                {/* DIVIDER */}
                <div className="my-3 h-px bg-[#edf1ef]" />

                {/* PRICE */}
                <div className="space-y-2">
                  <PriceRow label="Transportasi" value="Rp 450.000" />

                  <PriceRow label="Akomodasi" value="Rp 700.000" />

                  <PriceRow label="Tiket Wisata" value="Rp 150.000" />

                  <PriceRow label="Makan" value="Rp 300.000" />
                </div>

                {/* TOTAL */}
                <div className="my-3 h-px bg-[#edf1ef]" />

                <div className="flex items-center justify-between">
                  <span className="text-[7px] font-semibold text-[#66716d]">
                    Total Perkiraan
                  </span>

                  <span className="text-[10px] font-extrabold text-[#075542]">
                    Rp 1.600.000
                  </span>
                </div>

                {/* BUTTON */}
                <button
                  type="button"
                  className="
                  mt-4
                  flex
                  h-[29px]
                  w-full
                  items-center
                  justify-center
                  gap-1.5
                  rounded-[4px]
                  bg-[#a95b14]
                  text-[7px]
                  font-semibold
                  text-white
                  shadow-[0_5px_12px_rgba(169,91,20,0.16)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#914b0d]
                  hover:shadow-[0_8px_16px_rgba(169,91,20,0.22)]
                  active:scale-[.98]
                "
                >
                  <svg
                    width="9"
                    height="9"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m5 12 14-7-4 14-3-5-7-2Z" />
                  </svg>
                  Lanjut ke Pembayaran
                </button>

                <p className="mt-2 text-center text-[5px] text-[#a0aaa6]">
                  Harga dapat berubah sesuai pilihan perjalanan.
                </p>
              </div>
            </aside>
          </div>
        </div>

        {/* =====================================================
          ANIMATION
      ====================================================== */}
        <style>{`
        @keyframes itineraryFade {
          from {
            opacity: 0;
            transform: translateY(10px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .itinerary-card {
          animation: itineraryFade .5s cubic-bezier(.16,1,.3,1) both;
        }
      `}</style>
      </main>
      <Footer />
    </>
  );
}

/* =========================================================
   ACTIVITY CARD
========================================================= */

function ActivityCard({ activity }: { activity: Activity }) {
  return (
    <div
      className="
        itinerary-card
        group
        flex
        gap-2.5
        rounded-[5px]
        border
        border-[#e3e9e6]
        bg-white
        p-2
        transition-all
        duration-300
        hover:-translate-y-[2px]
        hover:border-[#c8d9d3]
        hover:shadow-[0_7px_18px_rgba(0,60,45,0.07)]
      "
    >
      {/* IMAGE */}
      <div
        className="
          h-[48px]
          w-[65px]
          shrink-0
          overflow-hidden
          rounded-[3px]
          bg-[#edf1ef]
          sm:h-[55px]
          sm:w-[78px]
        "
      >
        <img
          src={activity.image}
          alt={activity.title}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* CONTENT */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="text-[6px] font-semibold text-[#a26735]">
            {activity.time}
          </span>
        </div>

        <h4 className="mt-0.5 text-[7px] font-bold text-[#34433e] sm:text-[8px]">
          {activity.title}
        </h4>

        <p className="mt-1 line-clamp-2 text-[5.5px] leading-[1.5] text-[#8a9490] sm:text-[6px]">
          {activity.description}
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   PRICE ROW
========================================================= */

function PriceRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[6px] text-[#7d8783]">{label}</span>

      <span className="text-[6px] font-medium text-[#4d5854]">{value}</span>
    </div>
  );
}
