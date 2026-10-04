import kayanganApi from '../../assets/kayangan api.webp'
import wadukPacal from '../../assets/wadukpacal2 2.webp'
import atasangin from '../../assets/negri atas angin2.webp'


type Destination = {
  title: string;
  category: string;
  image: string;
  description: string;
  distance: string;
  price: string;
  large: boolean;
};

const destinations: Destination[] = [
  {
    title: "Kayangan Api",
    category: "DESTINASI ALAM",
    image: kayanganApi,
    description:
      "Fenomena geologi api abadi yang tak pernah padam. Tempat magis yang dikelilingi hamparan hutan jati, saksi bisu peradaban Majapahit.",
    distance: "15 km",
    price: "Rp 10.000",
    large: true,
  },
  {
    title: "Waduk Pacal",
    category: "WATER & NATURE",
    image: wadukPacal,
    description:
      "Nikmati suasana alam dan panorama Waduk Pacal yang menenangkan.",
    distance: "35 km",
    price: "Rp 4.000",
    large: false,
  },
  {
    title: "Negeri di Atas Angin",
    category: "VIEWPOINT",
    image: atasangin,
    description: "Nikmati panorama matahari terbenam dari ketinggian.",
    distance: "50 km",
    price: "Rp 5.000",
    large: false,
  },
];

export default function DestinasiPilihan() {
  return (
    <section className="w-full bg-[#f7f9f8] px-5 py-16 sm:px-8 lg:px-14">
      <div className="mx-auto max-w-[1200px]">
        {/* ================= HEADER ================= */}
        <div className="mb-7 flex items-end justify-between gap-5">
          <div>
            <h2 className="text-[25px] font-extrabold tracking-[-0.8px] text-[#075542] sm:text-[29px]">
              Destinasi Pilihan
            </h2>

            <p className="mt-2 max-w-[500px] text-[10px] leading-[1.7] text-[#78827f] sm:text-[11px]">
              Jelajahi keindahan alam dan budaya otentik Bojonegoro melalui
              kurasi terbaik kami.
            </p>
          </div>

          {/* DESKTOP BUTTON */}
          <button
            type="button"
            className="
              hidden shrink-0 items-center gap-2
              rounded-full
              border border-[#dce4e1]
              bg-white
              px-4 py-2
              text-[9px] font-medium text-[#34433e]
              shadow-sm
              transition-all duration-300
              hover:-translate-y-0.5
              hover:border-[#075542]
              hover:text-[#075542]
              hover:shadow-md
              sm:flex
            "
          >
            Lihat Semua
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
          <DestinationCard destination={destinations[0]} />

          <div className="grid grid-cols-1 gap-4">
            <DestinationCard destination={destinations[1]} />

            <DestinationCard destination={destinations[2]} />
          </div>
        </div>

        <button
          type="button"
          className="
            mx-auto mt-6 flex items-center gap-2
            rounded-full
            border border-[#dce4e1]
            bg-white
            px-5 py-2.5
            text-[9px] font-medium text-[#34433e]
            shadow-sm
            transition-all duration-300
            hover:border-[#075542]
            hover:text-[#075542]
            sm:hidden
          "
        >
          Lihat Semua
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </button>
      </div>

      <style>{`
        .destination-card {
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }

        .destination-card::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;

          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.78) 0%,
            rgba(0, 0, 0, 0.40) 35%,
            rgba(0, 0, 0, 0.05) 75%,
            transparent 100%
          );
        }

        .destination-image {
          transition:
            transform 700ms cubic-bezier(.16,1,.3,1),
            filter 700ms ease;
        }

        .destination-card:hover .destination-image {
          transform: scale(1.07);
          filter: brightness(0.9);
        }
      `}</style>
    </section>
  );
}

/* =========================================================
   DESTINATION CARD
========================================================= */

function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <article
      className={`
        destination-card
        group
        relative
        overflow-hidden
        rounded-[12px]
        bg-[#dfe8e4]
        shadow-[0_8px_25px_rgba(0,50,40,0.08)]
        transition-all
        duration-500
        hover:-translate-y-1
        hover:shadow-[0_15px_35px_rgba(0,50,40,0.14)]

        ${
          destination.large
            ? "h-[300px] sm:h-[340px] lg:h-[375px]"
            : "h-[220px] sm:h-[240px] lg:h-[181px]"
        }
      `}
    >
      <img
        src={destination.image}
        alt={destination.title}
        className="
          destination-image
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
      />

      <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5">
        <div className="mb-2 inline-flex rounded-full bg-white/20 px-2 py-1 text-[6px] font-medium tracking-wide text-white backdrop-blur-md sm:text-[7px]">
          {destination.category}
        </div>

        <h3
          className={`
            font-bold
            leading-tight
            text-white

            ${
              destination.large
                ? "text-[20px] sm:text-[23px]"
                : "text-[15px] sm:text-[16px]"
            }
          `}
        >
          {destination.title}
        </h3>

        <p
          className={`
            mt-1
            max-w-[500px]
            leading-[1.5]
            text-white/80

            ${destination.large ? "text-[8px] sm:text-[9px]" : "hidden"}
          `}
        >
          {destination.description}
        </p>

        <div className="mt-2 flex items-center gap-3 text-[7px] text-white/90 sm:text-[8px]">
          <span className="flex items-center gap-1">
            <svg
              width="9"
              height="9"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
              <circle cx="12" cy="9" r="2" />
            </svg>

            {destination.distance}
          </span>

          <span className="flex items-center gap-1">{destination.price}</span>
        </div>

        <button
          type="button"
          className="
            absolute
            bottom-4
            right-4
            rounded-full
            bg-[#075542]/90
            px-3
            py-1.5
            text-[7px]
            font-medium
            text-white
            backdrop-blur-md
            transition-all
            duration-300
            hover:bg-[#08634e]
            hover:px-4
          "
        >
          Lihat Selengkapnya
        </button>
      </div>
    </article>
  );
}
