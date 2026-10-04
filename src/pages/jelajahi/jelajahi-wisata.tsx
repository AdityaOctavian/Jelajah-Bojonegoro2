import { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import { ButtonAI } from "../../components/button/btn-ai";
import { Footer } from "../../components/footer/footer";

type Destination = {
  id: number;
  title: string;
  category: string;
  image: string;
  distance: string;
  rating: string;
  description: string;
};

const destinations: Destination[] = [
  {
    id: 1,
    title: "Kayangan Api",
    category: "ALAM",
    image: "/images/kayangan-api.jpg",
    distance: "25 km dari pusat kota",
    rating: "4.9",
    description:
      "Fenomena api abadi yang menjadi salah satu ikon wisata Bojonegoro.",
  },
  {
    id: 2,
    title: "Negeri di Atas Angin",
    category: "VIEWPOINT",
    image: "/images/negeri-atas-angin.jpg",
    distance: "50 km dari pusat kota",
    rating: "4.8",
    description:
      "Nikmati panorama perbukitan dan matahari terbenam dari ketinggian.",
  },
  {
    id: 3,
    title: "Waduk Pacal",
    category: "WATER & NATURE",
    image: "/images/waduk-pacal.jpg",
    distance: "35 km dari pusat kota",
    rating: "4.6",
    description: "Destinasi wisata alam dengan suasana waduk yang tenang.",
  },
  {
    id: 4,
    title: "Waduk Pacal",
    category: "WATER & NATURE",
    image: "/images/waduk-pacal.jpg",
    distance: "35 km dari pusat kota",
    rating: "4.6",
    description: "Destinasi wisata alam dengan suasana waduk yang tenang.",
  },
  {
    id: 5,
    title: "Kayangan Api",
    category: "ALAM",
    image: "/images/kayangan-api.jpg",
    distance: "25 km dari pusat kota",
    rating: "4.9",
    description:
      "Fenomena api abadi yang menjadi salah satu ikon wisata Bojonegoro.",
  },
  {
    id: 6,
    title: "Negeri di Atas Angin",
    category: "VIEWPOINT",
    image: "/images/negeri-atas-angin.jpg",
    distance: "50 km dari pusat kota",
    rating: "4.8",
    description:
      "Nikmati panorama perbukitan dan matahari terbenam dari ketinggian.",
  },
];

export default function JelajahiWisata() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");

  const categories = ["Semua", "Alam", "Budaya", "Kuliner", "Sejarah"];

  const filteredDestinations = destinations.filter((destination) => {
    const matchesSearch = destination.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      activeCategory === "Semua" ||
      destination.category.toLowerCase().includes(activeCategory.toLowerCase());

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />
      <ButtonAI />
      <div className="h-[67px] w-5 block"></div>
      <section className="min-h-screen w-full bg-[#f7f9f8] px-4 py-6 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1100px]">
          {/* =====================================================
            BACK
        ====================================================== */}
          <button
            type="button"
            className="
            group
            mb-5
            flex
            items-center
            gap-1.5
            text-[9px]
            font-medium
            text-[#075542]
            transition-all
            duration-300
            hover:-translate-x-1
            cursor-pointer
          "
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Kembali
          </button>

          {/* =====================================================
            HEADER
        ====================================================== */}
          <div className="mx-auto max-w-[520px] text-center">
            <h1
              className="
              text-[25px]
              font-extrabold
              leading-[1.05]
              tracking-[-0.8px]
              text-[#075542]
              sm:text-[31px]
            "
            >
              Temukan Keajaiban
              <br />
              Bojonegoro
            </h1>

            <p
              className="
              mx-auto
              mt-2
              max-w-[400px]
              text-[7px]
              leading-[1.6]
              text-[#7a8581]
              sm:text-[9px]
            "
            >
              Jelajahi keindahan alam, kekayaan budaya, dan panorama yang
              memukau di setiap sudut Bojonegoro.
            </p>
          </div>

          {/* =====================================================
            SEARCH
        ====================================================== */}
          <div className="mx-auto mt-5 max-w-[480px]">
            <div
              className="
              flex
              h-[30px]
              items-center
              gap-2
              rounded-full
              border
              border-[#dce4e1]
              bg-white
              px-3
              shadow-[0_4px_15px_rgba(0,50,40,0.05)]
              transition-all
              duration-300
              focus-within:border-[#075542]
              focus-within:shadow-[0_5px_20px_rgba(0,70,55,0.10)]
            "
            >
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="shrink-0 text-[#9ba5a1]"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
              </svg>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari destinasi..."
                className="
                min-w-0
                flex-1
                bg-transparent
                text-[8px]
                text-[#34433e]
                outline-none
                placeholder:text-[#a2aaa7]
              "
              />

              <button
                type="button"
                className="
                rounded-full
                bg-[#075542]
                px-3
                py-1
                text-[10px]
                font-medium
                text-white
                transition-all
                duration-300
                hover:bg-[#08634e]
                active:scale-95
              "
              >
                Cari
              </button>
            </div>
          </div>

          {/* =====================================================
            FILTER
        ====================================================== */}
          <div className="mt-4 flex justify-center gap-1.5 overflow-x-auto pb-1">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`
                shrink-0
                rounded-full
                px-3
                py-1
                text-[10px]
                font-medium
                transition-all
                duration-300

                ${
                  activeCategory === category
                    ? "bg-[#075542] text-white shadow-sm"
                    : "border border-[#dce4e1] bg-white text-[#68736f] hover:border-[#075542] hover:text-[#075542]"
                }
              `}
              >
                {category}
              </button>
            ))}
          </div>

          {/* =====================================================
            DESTINATION GRID
        ====================================================== */}
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>

          {/* EMPTY */}
          {filteredDestinations.length === 0 && (
            <div className="py-20 text-center">
              <div className="text-2xl">⌕</div>

              <p className="mt-2 text-[11px] font-semibold text-[#34433e]">
                Destinasi tidak ditemukan
              </p>

              <p className="mt-1 text-[8px] text-[#8a9490]">
                Coba gunakan kata kunci atau kategori lain.
              </p>
            </div>
          )}
        </div>

        {/* =====================================================
          ANIMATION
      ====================================================== */}
        <style>{`

        .destination-card {
          animation: destinationAppear .6s
            cubic-bezier(.16,1,.3,1) both;
        }

        @keyframes destinationAppear {
          from {
            opacity: 0;
            transform: translateY(15px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .destination-image {
          transition:
            transform .7s cubic-bezier(.16,1,.3,1),
            filter .5s ease;
        }

        .destination-card:hover .destination-image {
          transform: scale(1.07);
          filter: brightness(.92);
        }

      `}</style>
      </section>
      <Footer />
    </>
  );
}

/* =========================================================
   DESTINATION CARD
========================================================= */

function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <article
      className="
        destination-card
        group
        overflow-hidden
        rounded-[8px]
        border
        border-[#dce4e1]
        bg-white
        shadow-[0_4px_14px_rgba(0,50,40,0.06)]
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-[#b7d2c9]
        hover:shadow-[0_12px_28px_rgba(0,60,45,0.12)]
      "
    >
      {/* IMAGE */}
      <div className="relative h-[125px] overflow-hidden sm:h-[140px]">
        <img
          src={destination.image}
          alt={destination.title}
          className="
            destination-image
            h-full
            w-full
            object-cover
          "
        />

        {/* RATING */}
        <div
          className="
            absolute
            left-2
            top-2
            flex
            items-center
            gap-1
            rounded-full
            bg-white/90
            px-2
            py-1
            text-[6px]
            font-semibold
            text-[#34433e]
            shadow-sm
            backdrop-blur-sm
          "
        >
          <span className="text-[#ff9b48]">★</span>
          {destination.rating}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-3">
        {/* TITLE */}
        <div className="flex items-center justify-between gap-2">
          <h3
            className="
              truncate
              text-[11px]
              font-bold
              text-[#273530]
              sm:text-[12px]
            "
          >
            {destination.title}
          </h3>

          <span
            className="
              shrink-0
              rounded-full
              bg-[#eef5f2]
              px-2
              py-1
              text-[6px]
              font-medium
              text-[#075542]
            "
          >
            {destination.category}
          </span>
        </div>

        {/* DISTANCE */}
        <p
          className="
            mt-1
            text-[7px]
            text-[#89928f]
          "
        >
          {destination.distance}
        </p>

        {/* DESCRIPTION */}
        <p
          className="
            mt-1.5
            line-clamp-2
            text-[7px]
            leading-[1.5]
            text-[#7b8581]
          "
        >
          {destination.description}
        </p>

        {/* BOTTOM */}
        <div className="mt-3 flex items-center gap-2">
          {/* BUTTON */}
          <button
            type="button"
            className="
              flex
              h-[22px]
              flex-1
              items-center
              justify-center
              rounded-[4px]
              bg-[#075542]
              text-[7px]
              font-medium
              text-white
              transition-all
              duration-300
              hover:bg-[#08634e]
              hover:shadow-[0_5px_12px_rgba(0,70,55,0.16)]
              active:scale-[.98]
            "
          >
            Lihat Detail
          </button>

          {/* SAVE / DETAIL ICON */}
          <button
            type="button"
            aria-label={`Detail ${destination.title}`}
            className="
              flex
              h-[22px]
              w-[25px]
              shrink-0
              items-center
              justify-center
              rounded-[4px]
              border
              border-[#dce4e1]
              bg-white
              text-[#075542]
              transition-all
              duration-300
              hover:border-[#075542]
              hover:bg-[#f1f7f4]
            "
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M7 17 17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
