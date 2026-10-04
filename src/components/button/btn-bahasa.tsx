import { useState } from "react";

export const BtnBahasa= () => {
  const [currentLang, setCurrentLang] = useState("ID");

  return (
    // Ukuran container dikunci pada w-[70px] dan h-[36px]
    <div className="relative flex items-center p-[2px] border border-gray-300 rounded-full w-[70px] h-[36px] bg-white overflow-hidden select-none">
      {/* Slider Bulatan Abu-abu dengan ukuran mikro yang responsif */}
      <div
        className={`absolute top-[2px] bottom-[2px] w-[30px] bg-gray-200 rounded-full transition-all duration-300 ease-in-out ${
          currentLang === "ID" ? "left-[2px]" : "left-[36px]"
        }`}
      />

      {/* Tombol ID */}
      <button
        onClick={() => setCurrentLang("ID")}
        className={`relative z-10 flex-1 text-center font-semibold text-[11px] h-full rounded-full transition-colors duration-200 ${
          currentLang === "ID"
            ? "text-gray-800"
            : "text-gray-400 hover:text-gray-600"
        }`}
      >
        ID
      </button>

      {/* Tombol EN */}
      <button
        onClick={() => setCurrentLang("EN")}
        className={`relative z-10 flex-1 text-center font-semibold text-[11px] h-full rounded-full transition-colors duration-200 ${
          currentLang === "EN"
            ? "text-gray-800"
            : "text-gray-400 hover:text-gray-600"
        }`}
      >
        EN
      </button>
    </div>
  );
};

