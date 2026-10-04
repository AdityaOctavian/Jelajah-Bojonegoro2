import { useState } from "react";
import AiLogo from "../../assets/ai-logo.svg";

export default function TravelPlanner() {
  const [hasDestination, setHasDestination] = useState(true);

  return (
    <section className="w-full bg-[#f7f9f8] px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-[1100px] rounded-xl border border-[#dfe6e3] bg-white p-3 shadow-[0_5px_18px_rgba(0,50,40,0.10)] sm:p-4">
        <div className="flex items-center gap-5 border-b border-[#edf1ef] pb-3">
          <label className="flex cursor-pointer items-center gap-1.5 text-[9px] text-[#384440]">
            <input
              type="radio"
              checked={hasDestination}
              onChange={() => setHasDestination(true)}
              className="accent-[#075542]"
            />
            Sudah punya tujuan
          </label>

          <label className="flex cursor-pointer items-center gap-1.5 text-[9px] text-[#384440]">
            <input
              type="radio"
              checked={!hasDestination}
              onChange={() => setHasDestination(false)}
              className="accent-[#075542]"
            />
            Belum punya tujuan
          </label>
        </div>

        {hasDestination ? (
          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
            <FormField label="Asal Berangkat">
              <input placeholder="Kota atau Bandara" className="field-input" />
            </FormField>

            <FormField label="Jumlah Orang">
              <select className="field-input">
                <option>2 Dewasa</option>
                <option>1 Dewasa</option>
                <option>3 Dewasa</option>
                <option>4 Dewasa</option>
              </select>
            </FormField>

            <FormField label="Berapa Hari">
              <select className="field-input">
                <option>3 Hari</option>
                <option>1 Hari</option>
                <option>2 Hari</option>
                <option>4 Hari</option>
                <option>5 Hari</option>
                <option>7 Hari</option>
              </select>
            </FormField>

            <FormField label="Anggaran / Orang">
              <input placeholder="Rp 500rb - 1,5jt" className="field-input" />
            </FormField>
          </div>
        ) : (
          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5">
            <FormField label="Destinasi / Asal">
              <select className="field-input">
                <option value="">Pilih Destinasi</option>
                <option>Kabupaten Bojonegoro</option>
                <option>Kota Bojonegoro</option>
                <option>Balen</option>
                <option>Dander</option>
                <option>Padangan</option>
                <option>Temayang</option>
              </select>
            </FormField>

            <FormField label="Jumlah Orang">
              <select className="field-input">
                <option>2 Dewasa</option>
                <option>1 Dewasa</option>
                <option>3 Dewasa</option>
                <option>4 Dewasa</option>
                <option>5 Dewasa</option>
              </select>
            </FormField>

            <FormField label="Berapa Hari">
              <select className="field-input">
                <option>3 Hari</option>
                <option>1 Hari</option>
                <option>2 Hari</option>
                <option>4 Hari</option>
                <option>5 Hari</option>
                <option>7 Hari</option>
              </select>
            </FormField>

            <FormField label="Minat Wisata">
              <select className="field-input">
                <option>Alam</option>
                <option>Budaya</option>
                <option>Kuliner</option>
                <option>Sejarah</option>
                <option>Petualangan</option>
                <option>Religi</option>
              </select>
            </FormField>

            <FormField label="Anggaran (Rp)">
              <input
                type="number"
                placeholder="Contoh: 500.000"
                className="field-input"
              />
            </FormField>
          </div>
        )}

        <div className="mt-3 flex justify-end">
          <button
            onClick={() => {
              console.log(
                hasDestination
                  ? "Merencanakan perjalanan dengan tujuan"
                  : "Mencari rekomendasi destinasi",
              );
            }}
            className="flex items-center gap-1.5 rounded-md bg-[#072F22] px-4 py-2 text-[9px] font-medium text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#08634e] hover:shadow-lg active:scale-95"
          >
            <img src={AiLogo} alt="ai" width={16} height={16} />
            {hasDestination
              ? "Rencanakan & Pesan Sekarang"
              : "Rencanakan & Pesan Sekarang"}
          </button>
        </div>
      </div>

      <style>{`
        .field-input {
          width: 100%;
          height: 23px;
          background: transparent;
          outline: none;
          border: none;
          color: #36423e;
          font-size: 9px;
          cursor: pointer;
        }

        .field-input::placeholder {
          color: #919b98;
        }

        .field-input option {
          color: #36423e;
          background: white;
        }
      `}</style>
    </section>
  );
}

interface FormFieldProps {
  label: string;
  children: React.ReactNode;
}

function FormField({ label, children }: FormFieldProps) {
  return (
    <div className="min-w-0 rounded-md border border-[#dce4e1] bg-[#f9fbfa] px-2 py-1.5 transition-all duration-200 hover:border-[#a8c9bd] focus-within:border-[#075542]">
      <p className="text-[7px] font-medium text-[#7d8985]">{label}</p>

      {children}
    </div>
  );
}
