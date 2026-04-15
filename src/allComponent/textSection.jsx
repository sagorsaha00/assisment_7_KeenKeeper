export default function HeroSection() {
  return (
    <section className="bg-[#f5f5f5] py-8 md:py-18">
      <div className="mx-auto w-[90%] ">
        <div className="mx-auto    text-center">
          <h1 className="text-3xl font-bold text-slate-800 sm:text-5xl md:text-6xl">
            Friends to keep close in your life
          </h1>

          <p className="mx-auto mt-6 text-slate-500 md:text-xl">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          <button className="cursor-pointer mt-10 rounded-md bg-[#235847] px-8 py-4 text-lg font-semibold text-white transition hover:bg-[#1d493b]">
            + Add a Friend
          </button>
        </div>

        <div className="mt-6 flex justify-center">
          <span className="h-1 w-6 rounded bg-pink-400"></span>
        </div>

        <div className=" cursor-pointer mt-6 grid grid-cols-2 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl bg-white px-6 py-12 text-center shadow-sm">
            <h3 className="text-4xl font-bold text-[#235847]">10</h3>
            <p className="mt-4 text-xl font-bold text-slate-500">Total Friends</p>
          </div>

          <div className=" cursor-pointer  rounded-2xl bg-white px-6 py-12 text-center shadow-sm">
            <h3 className="text-4xl font-bold text-[#235847]">3</h3>
            <p className="mt-4  text-xl font-bold text-slate-500">On Track</p>
          </div>

          <div className=" cursor-pointer rounded-2xl bg-white px-6 py-12 text-center shadow-sm">
            <h3 className="text-4xl font-bold text-[#235847]">6</h3>
            <p className="mt-4 font-bold text-xl text-slate-500">Need Attention</p>
          </div>

          <div className=" cursor-pointer rounded-2xl bg-white px-6 py-12 text-center shadow-sm">
            <h3 className="text-4xl font-bold text-[#235847]">12</h3>
            <p className="mt-4 font-bold text-xl text-slate-500">
              Interactions This Month
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
