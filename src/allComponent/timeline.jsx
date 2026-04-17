import { useContext, useState } from "react";
import { CiVideoOn } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import { MdAddCall } from "react-icons/md";
import { ThemeContext } from "../apiContext";
import Header from "./header";
import Footer from "./footer";
export default function Timeline() {
  const { timeline } = useContext(ThemeContext);
  const [active, setActive] = useState(false);

  const [type, setType] = useState(timeline);
  const getEmoji = (type) => {
    if (type === "call") return <MdAddCall />;
    if (type === "message") return <FaRegMessage />;
    if (type === "video") return <CiVideoOn />;
  };
  const getTypeLabel = (type) => {
    if (type === "call") return "Call";
    if (type === "message") return "Text";
    if (type === "video") return "Video";
  };

  const timlineactive = () => {
    setActive(!active);
    const grid = document.getElementById("datashow");
    if (grid) {
      grid.classList.add("mt-5");
    }
  };
  return (
    <>
      <Header></Header>
      <section className=" bg-[#f5f7fb] px-4 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">
            Timeline
          </h1>

          <div className="relative mt-8 w-full sm:max-w-sm">
            <button
              onClick={timlineactive}
              className="flex cursor-pointer h-14 w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 text-slate-500 shadow-sm"
            >
              Filter timeline
            </button>
            {active && (
              <>
                <div
                  className={`absolute top-full mt-2 w-full rounded-xl  gap-1.5 border border-slate-200 bg-white p-4 shadow-sm space-y-3 z-10`}
                >
                  <p
                    onClick={() =>
                      setType(
                        timeline.filter((item) => item.type === "message"),
                      )
                    }
                    className="cursor-pointer text-sm text-slate-500 hover:text-[#235847] hover:font-bold hover:w-full transition-all "
                  >
                    Text
                  </p>
                  <p
                    onClick={() =>
                      setType(timeline.filter((item) => item.type === "call"))
                    }
                    className="cursor-pointer text-sm text-slate-500 hover:text-[#235847] hover:font-bold hover:w-full transition-all"
                  >
                    Call
                  </p>
                  <p
                    onClick={() =>
                      setType(timeline.filter((item) => item.type === "video"))
                    }
                    className="cursor-pointer text-sm text-slate-500 hover:rounded  hover:text-[#235847] hover:font-bold hover:w-full transition-all"
                  >
                    Video
                  </p>
                </div>
              </>
            )}
          </div>

          <div className={`${active ? "mt-36" : "mt-7"} space-y-5`}>
            {timeline.length === 0 ? (
              <p className="text-center text-slate-500">
                Here no found any user data to show in timeline, please click on
                call or text or video button to show the data in timeline.
              </p>
            ) : (
              type.map((user, i) => {
                return (
                  <div
                    id="datashow"
                    key={i}
                    className="rounded-2xl border mt-6 border-slate-200 bg-white px-4 py-5 shadow-sm hover:shadow-md transition sm:px-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 text-2xl">
                        {getEmoji(user.type)}
                      </div>

                      <div>
                        <p className="text-lg sm:text-xl text-slate-600">
                          <span className="font-semibold text-[#235847]">
                            {getTypeLabel(user.type)}
                          </span>{" "}
                          with {user.user.name}
                        </p>
                        <p className="mt-1 text-sm text-slate-500">
                          {user.user.next_due_date} days ago
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
