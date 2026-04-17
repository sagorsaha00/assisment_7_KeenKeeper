import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <section className="bg-[#215c4a] text-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
          KeenKeeper
        </h1>

        <p className="mt-4 text-sm sm:text-base text-white/80 max-w-xl mx-auto leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <div className="mt-8">
          <p className="text-sm text-white mb-3">Social Links</p>

          <div className="flex justify-center gap-4">
            <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:scale-105 transition cursor-pointer">
              <FaInstagram size={16} />
            </a>

            <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:scale-105 transition cursor-pointer">
              <FaFacebookF size={16} />
            </a>

            <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:scale-105 transition cursor-pointer">
              <FaXTwitter size={16} />
            </a>
          </div>
        </div>

        <div className="border-t  mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:text-sm text-white/70">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-4">
            <a>Privacy Policy</a>
            <a>Terms of Service</a>
            <a>Cookies</a>
          </div>
        </div>
      </div>
    </section>
  );
}
