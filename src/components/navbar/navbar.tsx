import { NavLink } from "react-router-dom";
// import { useState } from "react";
import logoSaya from "../../assets/Logo.webp";
import "../../App.css";
import { BtnBahasa } from "../button/btn-bahasa";
import { useState, useEffect } from "react";

const Navbar = () => {
    // const [open, isOpen] = useState(false);
    const [show, setShow] = useState(false)
    const [lastScroll, setLastScroll] = useState(0)

    const [open, setOpen] = useState(false)
    
    const toggleSidebar = () => {
        setOpen(!open)
    }
 
    useEffect(() => {
        const scrollNav = () => {
            const currentScroll = window.scrollY

            if (currentScroll > lastScroll && currentScroll > 50) {
                setShow(true)
                document.body.style.overflow = "hidden";
            } else {
                setShow(false)
            }

            setLastScroll(currentScroll)
            document.body.style.overflow = "unset";
        }

        window.addEventListener('scroll', scrollNav)

        return () => {
            window.removeEventListener('scroll', scrollNav)
            document.body.style.overflow = "unset";
        }
    }, [lastScroll, open])


  return (
    <header
      className={`z-30 fixed w-screen flex justify-between h-[67px] items-center px-5.5 bg-white ${show ? "translate-y-[-67px]" : ""}`}
    >
      <div>
        <img className="logo" src={logoSaya} alt="Logo" width="127" />
      </div>
      <nav className="hidden lg:flex">
        <div>
          <ul className="flex justify-center items-center gap-[24px]">
            <li>
              <NavLink
                className={({ isActive }) =>
                  `linkNav ${isActive ? "aktif" : ""}`
                }
                to="/beranda"
              >
                Beranda
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `linkNav ${isActive ? "aktif" : ""}`
                }
                to="/ekspor"
              >
                Ekspor
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `linkNav ${isActive ? "aktif" : ""}`
                }
                to="/perencanaan"
              >
                Perencaan
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `linkNav ${isActive ? "aktif" : ""}`
                }
                to="/transportasi"
              >
                Transportasi
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `linkNav ${isActive ? "aktif" : ""}`
                }
                to="/akomodasi"
              >
                Akomodasi
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `linkNav ${isActive ? "aktif" : ""}`
                }
                to="/umkm"
              >
                UMKM
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className="hidden lg:block">
        <div className="flex justify-center items-center gap-2 ">
          <BtnBahasa />
          <button className="px-5.5 py-1.5 bg-[#072F22] text-white text-[14px] font-medium rounded-full flex justify-center items-center hover:bg-[#0c4633] transition-colors">
            Masuk
          </button>
        </div>
      </div>
      <button
        onClick={toggleSidebar}
        className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] relative z-50 focus:outline-none"
        aria-label="Toggle Menu"
      >
        <span
          className={`w-5 h-[2px] bg-gray-800 rounded-full transition-all duration-300 ${
            open ? "rotate-45 translate-y-[7px]" : ""
          }`}
        />
        <span
          className={`w-5 h-[2px] bg-gray-800 rounded-full transition-all duration-300 ${
            open ? "opacity-0 scale-0" : ""
          }`}
        />
        <span
          className={`w-5 h-[2px] bg-gray-800 rounded-full transition-all duration-300 ${
            open ? "-rotate-45 -translate-y-[7px]" : ""
          }`}
        />
      </button>
      <div
        className={`fixed top-0 right-0 h-full w-[260px] bg-white shadow-xl z-10 pt-[80px] px-6 transition-transform duration-300 ease-in-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-5 text-base font-medium text-gray-700 font-['Poppins']">
          <li>
            <NavLink
              to="/beranda"
              end
              onClick={toggleSidebar}
              className={({ isActive }) => `linkNav ${isActive ? "aktif" : ""}`}
            >
              Beranda
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ekspor"
              onClick={toggleSidebar}
              className={({ isActive }) => `linkNav ${isActive ? "aktif" : ""}`}
            >
              Ekspor
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/perencanaan"
              onClick={toggleSidebar}
              className={({ isActive }) => `linkNav ${isActive ? "aktif" : ""}`}
            >
              Perencanaan
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/transportasi"
              onClick={toggleSidebar}
              className={({ isActive }) => `linkNav ${isActive ? "aktif" : ""}`}
            >
              Transportasi
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/akomodasi"
              onClick={toggleSidebar}
              className={({ isActive }) => `linkNav ${isActive ? "aktif" : ""}`}
            >
              Akomodasi
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/umkm"
              onClick={toggleSidebar}
              className={({ isActive }) => `linkNav ${isActive ? "aktif" : ""}`}
            >
              UMKM
            </NavLink>
          </li>
          <li>
            <button className="px-6.5 py-1.5 bg-[#072F22] text-white text-[14px] font-medium rounded-full flex justify-center items-center hover:bg-[#0c4633] transition-colors">
              Masuk
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
