import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beranda from "./pages/beranda/beranda";
import JelajahiWisata from "./pages/jelajahi/jelajahi-wisata";
import Perencanaan from "./pages/perencanaan/perencanaan";
import LoginPage from "./pages/sign/login";
import RegisterPage from "./pages/sign/register";
import Contact from "./pages/contact/contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/perencanaan" element={<Perencanaan />} />
        <Route path="/Jelajahi-Wisata" element={<JelajahiWisata />} />
        {/* <Route path="/eksplor" element={ } /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
