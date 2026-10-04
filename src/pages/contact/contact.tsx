import React, { useState } from "react";

type ContactCard = {
  icon: React.ReactNode;
  title: string;
  description: string;
  value: string;
  action?: string;
};

const contactCards: ContactCard[] = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
      </svg>
    ),
    title: "Email",
    description: "Kirimkan pertanyaan atau saran Anda.",
    value: "hello@jelajahbojonegoro.id",
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
        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
      </svg>
    ),
    title: "WhatsApp",
    description: "Layanan cepat untuk bantuan dan informasi.",
    value: "+62 812-3456-7890",
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
        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
      </svg>
    ),
    title: "Lokasi",
    description: "Kunjungi kami secara langsung.",
    value: "Bojonegoro, Jawa Timur",
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
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
      </svg>
    ),
    title: "Sosial Media",
    description: "Ikuti perjalanan kami.",
    value: "@jelajahbojonegoro",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    tipe: "Informasi Destinasi",
    pesan: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Data form:", form);
  };

  return (
    <section className="min-h-screen w-full bg-[#f7f9f8] px-5 py-7 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1100px]">
        {/* =====================================================
            BACK
        ====================================================== */}
        <button
          type="button"
          className="
            group
            flex
            items-center
            gap-1.5
            text-[9px]
            font-medium
            text-[#075542]
            transition-all
            duration-300
            hover:-translate-x-1
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
        <div className="mx-auto mt-4 max-w-[520px] text-center">
          <span
            className="
              inline-flex
              rounded-full
              bg-[#e9f3ef]
              px-3
              py-1
              text-[6px]
              font-bold
              tracking-[0.12em]
              text-[#075542]
            "
          >
            HUBUNGI KAMI
          </span>

          <h1
            className="
              mt-3
              text-[24px]
              font-extrabold
              leading-[1.08]
              tracking-[-0.7px]
              text-[#075542]
              sm:text-[30px]
            "
          >
            Ada yang Ingin Kamu Tanyakan?
          </h1>

          <p
            className="
              mx-auto
              mt-2
              max-w-[460px]
              text-[7px]
              leading-[1.7]
              text-[#7a8581]
              sm:text-[9px]
            "
          >
            Kami siap membantu kamu menemukan informasi dan pengalaman terbaik
            selama menjelajah Bojonegoro.
          </p>

          <h2
            className="
              mt-2
              text-[13px]
              font-bold
              text-[#34433e]
              sm:text-[15px]
            "
          >
            Mari Terhubung
          </h2>
        </div>

        {/* =====================================================
            CONTACT CARDS
        ====================================================== */}
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card, index) => (
            <ContactCard key={index} card={card} />
          ))}
        </div>

        {/* =====================================================
            BOTTOM CONTENT
        ====================================================== */}
        <div className="mt-7 grid grid-cols-1 gap-5 lg:grid-cols-[1fr_1.05fr]">
          {/* =================================================
              LEFT
          ================================================== */}
          <div>
            <h2
              className="
                text-[14px]
                font-extrabold
                text-[#273530]
                sm:text-[17px]
              "
            >
              Punya Pertanyaan atau Saran?
            </h2>

            <p
              className="
                mt-1
                max-w-[480px]
                text-[7px]
                leading-[1.7]
                text-[#7a8581]
                sm:text-[9px]
              "
            >
              Silakan isi formulir di samping untuk menghubungi tim kami. Kami
              berusaha merespons secepat mungkin dalam jam kerja.
            </p>

            {/* BENEFITS */}
            <div className="mt-5 space-y-3">
              <InfoItem
                icon="✓"
                title="Informasi Destinasi"
                description="Dapatkan informasi terkait destinasi wisata."
              />

              <InfoItem
                icon="✓"
                title="Bantuan & Asistensi"
                description="Konsultasikan perjalanan dan pertanyaan lainnya."
              />

              <InfoItem
                icon="✓"
                title="Kemitraan UMKM"
                description="Berkolaborasi dan dukung produk lokal Bojonegoro."
              />
            </div>
          </div>

          {/* =================================================
              FORM
          ================================================== */}
          <div
            className="
              rounded-[8px]
              border
              border-[#dce4e1]
              bg-white
              p-4
              shadow-[0_6px_20px_rgba(0,50,40,0.08)]
              sm:p-5
            "
          >
            <form onSubmit={handleSubmit}>
              {/* NAME + EMAIL */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <FormInput
                  label="Nama Lengkap"
                  name="nama"
                  value={form.nama}
                  onChange={handleChange}
                  placeholder="Masukkan nama Anda"
                />

                <FormInput
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="nama@email.com"
                />
              </div>

              {/* TIPE */}
              <div className="mt-3">
                <label
                  htmlFor="tipe"
                  className="mb-1 block text-[7px] font-semibold text-[#596560]"
                >
                  Pilih Tipe
                </label>

                <select
                  id="tipe"
                  name="tipe"
                  value={form.tipe}
                  onChange={handleChange}
                  className="
                    h-[29px]
                    w-full
                    rounded-[4px]
                    border
                    border-[#dce4e1]
                    bg-[#fafcfb]
                    px-2
                    text-[8px]
                    text-[#34433e]
                    outline-none
                    transition-all
                    duration-200
                    focus:border-[#075542]
                    focus:bg-white
                  "
                >
                  <option>Informasi Destinasi</option>
                  <option>Saran</option>
                  <option>Kerja Sama</option>
                  <option>Bantuan</option>
                  <option>UMKM</option>
                </select>
              </div>

              {/* MESSAGE */}
              <div className="mt-3">
                <label
                  htmlFor="pesan"
                  className="mb-1 block text-[7px] font-semibold text-[#596560]"
                >
                  Pesan Anda
                </label>

                <textarea
                  id="pesan"
                  name="pesan"
                  value={form.pesan}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tuliskan pertanyaan atau saran Anda..."
                  className="
                    w-full
                    resize-none
                    rounded-[4px]
                    border
                    border-[#dce4e1]
                    bg-[#fafcfb]
                    px-2
                    py-2
                    text-[8px]
                    leading-[1.5]
                    text-[#34433e]
                    outline-none
                    transition-all
                    duration-200
                    placeholder:text-[#a0aaa6]
                    focus:border-[#075542]
                    focus:bg-white
                  "
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="
                  group
                  mt-3
                  flex
                  h-[30px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-[5px]
                  bg-[#075542]
                  text-[8px]
                  font-medium
                  text-white
                  shadow-[0_5px_14px_rgba(0,70,55,0.15)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#08634e]
                  hover:shadow-[0_8px_18px_rgba(0,70,55,0.20)]
                  active:scale-[.98]
                "
              >
                Kirim Pesan
                <svg
                  width="10"
                  height="10"
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
                  <path d="m5 12 14-7-4 14-3-5-7-2Z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* =====================================================
          CUSTOM ANIMATION
      ====================================================== */}
      <style>{`

        .contact-card {
          animation: contactAppear .6s
            cubic-bezier(.16,1,.3,1) both;
        }

        @keyframes contactAppear {

          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }

      `}</style>
    </section>
  );
}

/* =========================================================
   CONTACT CARD
========================================================= */

function ContactCard({ card }: { card: ContactCard }) {
  return (
    <div
      className="
        contact-card
        group
        rounded-[7px]
        border
        border-[#dce4e1]
        bg-white
        p-3
        shadow-[0_3px_12px_rgba(0,50,40,0.04)]
        transition-all
        duration-400
        hover:-translate-y-1
        hover:border-[#b7d2c9]
        hover:shadow-[0_10px_25px_rgba(0,60,45,0.09)]
      "
    >
      {/* ICON */}
      <div
        className="
          flex
          h-[20px]
          w-[20px]
          items-center
          justify-center
          p-1
          rounded-[4px]
          bg-[#eaf3ef]
          text-[9px]
          text-[#075542]
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:bg-[#075542]
          group-hover:text-white
        "
      >
        {card.icon}
      </div>

      {/* TITLE */}
      <h3
        className="
          mt-3
          text-[9px]
          font-bold
          text-[#34433e]
          sm:text-[10px]
        "
      >
        {card.title}
      </h3>

      {/* DESCRIPTION */}
      <p
        className="
          mt-1
          text-[6px]
          leading-[1.5]
          text-[#8a9490]
          sm:text-[7px]
        "
      >
        {card.description}
      </p>

      {/* VALUE */}
      <p
        className="
          mt-2
          truncate
          text-[7px]
          font-medium
          text-[#075542]
        "
      >
        {card.value}
      </p>
    </div>
  );
}

/* =========================================================
   INFO ITEM
========================================================= */

function InfoItem({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-2">
      <div
        className="
          mt-0.5
          flex
          h-[16px]
          w-[16px]
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#e8f2ee]
          text-[8px]
          font-bold
          text-[#075542]
        "
      >
        {icon}
      </div>

      <div>
        <h3 className="text-[8px] font-bold text-[#34433e]">{title}</h3>

        <p className="mt-0.5 text-[7px] text-[#8a9490]">{description}</p>
      </div>
    </div>
  );
}

/* =========================================================
   FORM INPUT
========================================================= */

function FormInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1 block text-[7px] font-semibold text-[#596560]"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          h-[29px]
          w-full
          rounded-[4px]
          border
          border-[#dce4e1]
          bg-[#fafcfb]
          px-2
          text-[8px]
          text-[#34433e]
          outline-none
          transition-all
          duration-200
          placeholder:text-[#a0aaa6]
          focus:border-[#075542]
          focus:bg-white
        "
      />
    </div>
  );
}
