import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Root() {
  return (
    <div className="bg-divergent-blue bg-constellation min-h-full flex flex-col">
      <Navbar />
      <div className="text-white text-base tracking-wide grow pt-20">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
