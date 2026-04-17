import { Pie, PieChart, Tooltip, ResponsiveContainer } from "recharts";
import { useContext } from "react";
import { ThemeContext } from "../apiContext";
import Header from "./header";
import Footer from "./footer";

export default function PieCharts({ isAnimationActive = true }) {
  const { timeline } = useContext(ThemeContext);

  const data = [
    {
      name: "Text",
      uv: timeline.filter((item) => item.type === "message").length,
    },
    {
      name: "Call",
      uv: timeline.filter((item) => item.type === "call").length,
    },
    {
      name: "Video",
      uv: timeline.filter((item) => item.type === "video").length,
    },
  ];

  if (timeline.length === 0) {
    return (
      <>
        <Header />
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] flex justify-center items-center mx-auto flex-col">
          <h1 className="text-2xl font-bold text-slate-900">No Data Found </h1>
          <h3 className="text-slate-600 text-center mt-2 ">
            please go to timeline and add some data to see the stats in pie
            chart{" "}
          </h3>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] flex justify-center items-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="uv"
              isAnimationActive={isAnimationActive}
              fill="#235847"
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <Footer />
    </>
  );
}
