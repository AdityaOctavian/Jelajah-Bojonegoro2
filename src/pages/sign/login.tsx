import React, { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Login berhasil");
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#075542]">
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}
      <div className="absolute inset-0">
        <img
          src="/images/login-bg.jpg"
          alt="Pemandangan Bojonegoro"
          className="
            h-full
            w-full
            object-cover
          "
        />

        {/* DARK / GREEN OVERLAY */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#003d30]/65
            via-[#075542]/35
            to-[#075542]/75
          "
        />

        {/* SOFT BLUR */}
        <div
          className="
            absolute
            inset-0
            bg-black/5
            backdrop-blur-[0.5px]
          "
        />
      </div>

      {/* =====================================================
          BACK BUTTON
      ====================================================== */}
      <button
        type="button"
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
          sm:left-8
          sm:top-5
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

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <div
        className="
          relative
          z-10
          flex
          min-h-screen
          w-full
          items-center
          justify-center
          px-5
          py-14
          sm:px-8
        "
      >
        <div
          className="
            flex
            w-full
            max-w-[1000px]
            flex-col
            items-center
            justify-between
            gap-10
            lg:flex-row
            lg:gap-16
          "
        >
          {/* =================================================
              LEFT SIDE
          ================================================== */}
          <div
            className="
              flex
              w-full
              max-w-[510px]
              flex-col
              items-center
              text-center
              lg:items-start
              lg:text-left
            "
          >
            {/* LOGO */}
            <div className="mb-5">
              <h1
                className="
                  font-[Arial,sans-serif]
                  text-[43px]
                  font-black
                  leading-[0.82]
                  tracking-[-2.5px]
                  text-white
                  drop-shadow-[0_3px_8px_rgba(0,0,0,0.18)]
                  sm:text-[55px]
                  lg:text-[60px]
                "
              >
                Jelajah
                <br />
                Bojonegoro
              </h1>
            </div>

            {/* DESCRIPTION */}
            <p
              className="
                max-w-[330px]
                text-[7px]
                leading-[1.7]
                text-white/85
                sm:text-[9px]
                lg:max-w-[360px]
                lg:text-[9px]
              "
            >
              Temukan keajaiban alam dan kearifan lokal Jawa Timur. Mulai
              perjalanan autentik Anda bersama kami.
            </p>
          </div>

          {/* =================================================
              LOGIN CARD
          ================================================== */}
          <div
            className="
              w-full
              max-w-[350px]
              rounded-[7px]
              bg-white
              p-5
              shadow-[0_20px_60px_rgba(0,30,20,0.25)]
              sm:p-6
              lg:max-w-[350px]
            "
          >
            {/* LOGO CARD */}
            <div className="text-center">
              <div
                className="
                  mx-auto
                  flex
                  justify-center
                  text-[#18231f]
                "
              >
                <div
                  className="
                    font-[Arial,sans-serif]
                    text-[20px]
                    font-black
                    leading-[0.78]
                    tracking-[-1px]
                  "
                >
                  Jelajah
                  <br />
                  Bojonegoro
                </div>
              </div>

              {/* GREETING */}
              <p
                className="
                  mx-auto
                  mt-4
                  max-w-[250px]
                  text-[7px]
                  leading-[1.6]
                  text-[#7d8783]
                "
              >
                Selamat datang kembali! Silakan masuk untuk melanjutkan
                perjalanan.
              </p>
            </div>

            {/* =================================================
                FORM
            ================================================== */}
            <form onSubmit={handleSubmit} className="mt-5">
              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="
                    mb-1
                    block
                    text-[7px]
                    font-semibold
                    text-[#4d5854]
                  "
                >
                  EMAIL
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
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="email@contoh.com"
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

              {/* PASSWORD */}
              <div className="mt-3">
                <label
                  htmlFor="password"
                  className="
                    mb-1
                    block
                    text-[7px]
                    font-semibold
                    text-[#4d5854]
                  "
                >
                  PASSWORD
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
                    placeholder="••••••••"
                    required
                    className="
                      h-full
                      min-w-0
                      flex-1
                      bg-transparent
                      text-[8px]
                      text-[#34433e]
                      outline-none
                    "
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="
                      flex
                      h-5
                      w-5
                      items-center
                      justify-center
                      text-[#89938f]
                      transition-colors
                      hover:text-[#075542]
                    "
                  >
                    {showPassword ? (
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M3 3l18 18" />
                        <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
                        <path d="M9.9 4.2A10.7 10.7 0 0 1 12 4c5 0 9 4 10 8a10.7 10.7 0 0 1-2.1 4.1" />
                        <path d="M6.6 6.6C4.8 7.8 3.5 9.5 2 12c1 4 5 8 10 8 1.4 0 2.7-.3 3.9-.8" />
                      </svg>
                    ) : (
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* OPTIONS */}
              <div
                className="
                  mt-3
                  flex
                  items-center
                  justify-between
                "
              >
                <label
                  className="
                    flex
                    cursor-pointer
                    items-center
                    gap-1.5
                    text-[7px]
                    text-[#727c78]
                  "
                >
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="
                      h-[9px]
                      w-[9px]
                      accent-[#075542]
                    "
                  />
                  Ingat saya
                </label>

                <button
                  type="button"
                  className="
                    text-[7px]
                    font-medium
                    text-[#075542]
                    transition-colors
                    hover:text-[#c66f38]
                  "
                >
                  Lupa Password?
                </button>
              </div>

              {/* LOGIN BUTTON */}
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
                  hover:shadow-[0_8px_18px_rgba(0,70,55,0.2)]
                  active:scale-[.98]
                "
              >
                Masuk
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                  "
                >
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </button>

              {/* DIVIDER */}
              <div className="my-4 flex items-center gap-2">
                <div className="h-px flex-1 bg-[#e5e9e7]" />

                <span className="text-[6px] text-[#9ca5a2]">
                  ATAU MASUK DENGAN
                </span>

                <div className="h-px flex-1 bg-[#e5e9e7]" />
              </div>

              {/* SOCIAL LOGIN */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  className="
                    flex
                    h-[28px]
                    items-center
                    justify-center
                    gap-2
                    rounded-[4px]
                    border
                    border-[#e0e5e3]
                    bg-white
                    text-[7px]
                    font-medium
                    text-[#4d5854]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-[#cbd6d1]
                    hover:bg-[#fafcfb]
                  "
                >
                  <span className="font-bold text-[#4285f4]">G</span>
                  Google
                </button>

                <button
                  type="button"
                  className="
                    flex
                    h-[28px]
                    items-center
                    justify-center
                    gap-2
                    rounded-[4px]
                    border
                    border-[#e0e5e3]
                    bg-white
                    text-[7px]
                    font-medium
                    text-[#4d5854]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-[#cbd6d1]
                    hover:bg-[#fafcfb]
                  "
                >
                  <span className="font-bold text-[#1877f2]">f</span>
                  Facebook
                </button>
              </div>

              {/* REGISTER */}
              <p
                className="
                  mt-4
                  text-center
                  text-[7px]
                  text-[#8a9490]
                "
              >
                Belum punya akun?
                <button
                  type="button"
                  className="
                    ml-1
                    font-semibold
                    text-[#c66f38]
                    transition-colors
                    hover:text-[#075542]
                  "
                >
                  Daftar Sekarang
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* =====================================================
          RESPONSIVE STYLE
      ====================================================== */}
      <style>{`

        @keyframes loginFade {

          from {
            opacity: 0;
            transform: translateY(15px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }

        .login-card {
          animation: loginFade .7s cubic-bezier(.16,1,.3,1);
        }

      `}</style>
    </main>
  );
}
