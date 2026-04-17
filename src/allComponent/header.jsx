import { useState, useEffect } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaChartLine } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const DisplayWidth = window.innerWidth < 768;
  const [MobileScreen, setMobileScreen] = useState(DisplayWidth);
  const [mobilemenu, setMobilemenu] = useState(false);
  const navigate = useNavigate();

  function handleShow() {
    setMobilemenu(!mobilemenu);
  }

  useEffect(() => {
    const handleResize = () => {
      setMobileScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [DisplayWidth]);

  return (
    <header className="w-full bg-white shadow">
      <div className="w-[95%] md:w-[90%] mx-auto h-20 flex items-center justify-between">
        <img
          onClick={() => navigate("/")}
          src="/logo.png"
          alt="logo"
          className="h-10 md:h-12 object-contain cursor-pointer"
        />

        {!MobileScreen && (
          <nav className="flex items-center gap-8 text-lg">
            <button
              onClick={() => navigate("/")}
              className="cursor-pointer flex items-center gap-2 bg-[#064E3B] text-white px-5 py-2 rounded-md hover:bg-green-800 transition"
            >
              <IoHomeOutline />
              <span className="font-medium">Home</span>
            </button>

            <button
              onClick={() => navigate("/timeline")}
              className="cursor-pointer flex items-center gap-2 text-gray-500 hover:text-gray-800 transition"
            >
              <MdOutlineWatchLater />
              <span>Timeline</span>
            </button>

            <button onClick={() => navigate('/paichart')} className="cursor-pointer flex items-center gap-2 text-gray-500 hover:text-gray-800 transition">
              <FaChartLine />
              <span>Stats</span>
            </button>
          </nav>
        )}

        {MobileScreen && (
          <button
            onClick={handleShow}
            className="px-4 py-2 rounded-md bg-gray-100 text-gray-700 border cursor-pointer"
          >
            {mobilemenu ? "Close" : "Menu"}
          </button>
        )}
      </div>

      {MobileScreen && mobilemenu && (
        <div className="w-[95%] mx-auto mb-4 rounded-lg bg-gray-50 p-4 flex flex-col gap-3 shadow-sm">
          <button className="cursor-pointer flex items-center justify-center gap-2 bg-[#064E3B] text-white px-5 py-3 rounded-md hover:bg-green-800 transition">
            <IoHomeOutline />
            <span className="font-medium">Home</span>
          </button>

          <button className="cursor-pointer flex items-center justify-center gap-2 text-gray-700 bg-white border px-5 py-3 rounded-md hover:bg-gray-100 transition">
            <MdOutlineWatchLater />
            <span>Timeline</span>
          </button>

          <button className="cursor-pointer flex items-center justify-center gap-2 text-gray-700 bg-white border px-5 py-3 rounded-md hover:bg-gray-100 transition">
            <FaChartLine />
            <span>Stats</span>
          </button>
        </div>
      )}
    </header>
  );
}
