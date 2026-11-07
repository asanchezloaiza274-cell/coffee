import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import ScrollReveal from "./ScrollReveal";

export default function Layout() {
  return (
    <div>
      <ScrollToTop />
      <ScrollReveal />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
