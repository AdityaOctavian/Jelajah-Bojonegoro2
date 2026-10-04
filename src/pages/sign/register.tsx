import React, { useState } from "react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);

  const [form, setForm] = useState({
    nama: "",
    whatsapp: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!agree) {
      alert("Silakan setujui Syarat dan Ketentuan terlebih dahulu.");
      return;
    }

    console.log("Data register:", form);
  };

  return (
    <main className="min-h-screen w-full bg-white">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[65%_35%]">
        {/* =====================================================
            LEFT IMAGE
        ====================================================== */}
        <div className="relative hidden min-h-screen overflow-hidden lg:block">
          <img
            src="/images/login-bg.jpg"
            alt="Pemandangan Bojonegoro"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#003d30]/75 via-[#075542]/20 to-transparent" />

          {/* =================================================
              TOMBOL KEMBALI
          ================================================== */}
          <button
            type="button"
            onClick={() => window.history.back()}
            className="
              group
              absolute
              left-5
              top-4
              z-20
              flex
              items-center
              gap-1.5
              text-[9px]
              font-medium
              text-white
              transition-all
              duration-300
              hover:-translate-x-1
            "
          >
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Kembali
          </button>

          {/* =================================================
              BRAND
          ================================================== */}
          <div
            className="
              absolute
              bottom-[12%]
              left-[9%]
              z-10
              text-white
            "
          >
            <h1
              className="
                text-[45px]
                font-black
                leading-[0.8]
                tracking-[-2.5px]
                drop-shadow-[0_4px_10px_rgba(0,0,0,0.2)]
                sm:text-[55px]
              "
            >
              Jelajah
              <br />
              Bojonegoro
            </h1>

            <p
              className="
                mt-4
                max-w-[320px]
                text-[7px]
                leading-[1.7]
                text-white/85
              "
            >
              Temukan keajaiban alam dan kearifan lokal Jawa Timur. Mulai
              perjalanan autentik Anda bersama kami.
            </p>
          </div>
        </div>

        {/* =====================================================
            REGISTER
        ====================================================== */}
        <div className="relative flex min-h-screen items-center justify-center bg-white px-6 py-10 sm:px-10">
          <div
            className="
              w-full
              max-w-[360px]
              animate-[registerFade_.7s_cubic-bezier(.16,1,.3,1)]
            "
          >
            {/* =================================================
                HEADER
            ================================================== */}
            <div>
              <h2
                className="
                  text-[25px]
                  font-extrabold
                  tracking-[-0.7px]
                  text-[#273530]
                  sm:text-[28px]
                "
              >
                Buat Akun Baru
              </h2>

              <p className="mt-1 text-[8px] leading-[1.6] text-[#858e8b]">
                Lengkapi data diri Anda untuk bergabung.
              </p>
            </div>

            {/* =================================================
                FORM
            ================================================== */}
            <form onSubmit={handleSubmit} className="mt-6">
              {/* NAMA */}
              <RegisterInput
                label="Nama Lengkap"
                name="nama"
                placeholder="Masukkan nama lengkap"
                value={form.nama}
                onChange={handleChange}
              />

              {/* WHATSAPP */}
              <RegisterInput
                label="Nomor WhatsApp"
                name="whatsapp"
                placeholder="Contoh: 081234567890"
                value={form.whatsapp}
                onChange={handleChange}
                type="tel"
              />

              {/* EMAIL */}
              <RegisterInput
                label="Email"
                name="email"
                placeholder="alamat@email.com"
                value={form.email}
                onChange={handleChange}
                type="email"
              />

              {/* PASSWORD */}
              <div className="mt-3">
                <label
                  htmlFor="password"
                  className="mb-1 block text-[7px] font-semibold text-[#4d5854]"
                >
                  Password
                </label>

                <div
                  className="
                    flex
                    h-[30px]
                    items-center
                    gap-2
                    rounded-[4px]
                    border
                    border-[#d9e0dd]
                    bg-white
                    px-2
                    transition-all
                    duration-200
                    focus-within:border-[#075542]
                    focus-within:shadow-[0_0_0_2px_rgba(7,85,66,0.06)]
                  "
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-[#8d9894]"
                  >
                    <rect x="5" y="10" width="14" height="10" rx="2" />
                    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                  </svg>

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Minimal 8 karakter"
                    value={form.password}
                    onChange={handleChange}
                    required
                    minLength={8}
                    className="
                      h-full
                      min-w-0
                      flex-1
                      bg-transparent
                      text-[8px]
                      text-[#34433e]
                      outline-none
                      placeholder:text-[#a2aaa6]
                    "
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="
                      text-[9px]
                      text-[#89938f]
                      transition-colors
                      hover:text-[#075542]
                    "
                  >
                    {showPassword ? "◉" : "◌"}
                  </button>
                </div>
              </div>

              {/* =================================================
                  TERMS
              ================================================== */}
              <label
                className="
                  mt-4
                  flex
                  cursor-pointer
                  items-start
                  gap-2
                  text-[7px]
                  leading-[1.6]
                  text-[#7b8581]
                "
              >
                <input
                  type="checkbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  className="mt-[2px] h-[9px] w-[9px] shrink-0 accent-[#075542]"
                />

                <span>
                  Saya menyetujui{" "}
                  <button
                    type="button"
                    className="font-semibold text-[#075542] hover:underline"
                  >
                    Syarat dan Ketentuan
                  </button>{" "}
                  serta{" "}
                  <button
                    type="button"
                    className="font-semibold text-[#075542] hover:underline"
                  >
                    Kebijakan Privasi
                  </button>
                  .
                </span>
              </label>

              {/* =================================================
                  BUTTON DAFTAR
              ================================================== */}
              <button
                type="submit"
                className="
                  mt-4
                  h-[30px]
                  w-full
                  rounded-[4px]
                  bg-[#075542]
                  text-[8px]
                  font-semibold
                  text-white
                  shadow-[0_5px_12px_rgba(0,70,55,0.15)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#08634e]
                  hover:shadow-[0_8px_18px_rgba(0,70,55,0.20)]
                  active:scale-[.98]
                "
              >
                Daftar Sekarang
              </button>

              {/* =================================================
                  SUDAH PUNYA AKUN
              ================================================== */}
              <p
                className="
                  mt-5
                  text-center
                  text-[7px]
                  text-[#8a9490]
                "
              >
                Sudah punya akun?
                <button
                  type="button"
                  className="
                    ml-1
                    font-semibold
                    text-[#075542]
                    transition-colors
                    hover:text-[#c66f38]
                  "
                >
                  Masuk
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* =====================================================
          ANIMATION
      ====================================================== */}
      <style>{`
        @keyframes registerFade {
          from {
            opacity: 0;
            transform: translateY(15px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}

/* =========================================================
   INPUT COMPONENT
========================================================= */

function RegisterInput({
  label,
  name,
  placeholder,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}) {
  return (
    <div className="mt-3 first:mt-0">
      <label
        htmlFor={name}
        className="
          mb-1
          block
          text-[7px]
          font-semibold
          text-[#4d5854]
        "
      >
        {label}
      </label>

      <div
        className="
          flex
          h-[30px]
          items-center
          gap-2
          rounded-[4px]
          border
          border-[#d9e0dd]
          bg-white
          px-2
          transition-all
          duration-200
          focus-within:border-[#075542]
          focus-within:shadow-[0_0_0_2px_rgba(7,85,66,0.06)]
        "
      >
        {name === "nama" && (
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#8d9894]"
          >
            <circle cx="12" cy="8" r="3" />
            <path d="M5 21c0-4 3-7 7-7s7 3 7 7" />
          </svg>
        )}

        {name === "whatsapp" && (
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#8d9894]"
          >
            <path d="M21 15.5v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.5 4.2 2 2 0 0 1 5.5 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L9.4 10.9a16 16 0 0 0 3.7 3.7l2.2-1.3a2 2 0 0 1 2.1-.2c.9.4 1.9.6 2.9.7a2 2 0 0 1 1.7 1.7Z" />
          </svg>
        )}

        {name === "email" && (
          <svg
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#8d9894]"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
          </svg>
        )}

        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
          className="
            h-full
            min-w-0
            flex-1
            bg-transparent
            text-[8px]
            text-[#34433e]
            outline-none
            placeholder:text-[#a2aaa6]
          "
        />
      </div>
    </div>
  );
}
