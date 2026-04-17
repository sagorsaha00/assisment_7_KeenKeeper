import Header from "./header";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";
export default function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <Header></Header>
      <section className="flex   items-center justify-center bg-slate-50 px-4">
        <div className="w-full max-w-xl   p-8 text-center   sm:p-12">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#235847]/10 text-3xl font-bold text-[#235847]">
            !
          </div>

          <h1 className="mt-6 text-6xl font-bold tracking-tight text-[#235847] sm:text-7xl">
            404
          </h1>

          <h2 className="mt-3 text-2xl font-semibold text-slate-800">
            Oops! Page not found
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
            The page you are trying to open is unavailable. Please check the URL
            or return to the homepage.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              onClick={() => navigate("/")}
              className="rounded-lg bg-[#235847] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#1b4638]"
            >
              Back to Home
            </a>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
