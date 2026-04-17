import { MdDelete } from "react-icons/md";
import { IoArchiveOutline } from "react-icons/io5";
import { FaClockRotateLeft } from "react-icons/fa6";
import { CiVideoOn } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import { MdAddCall } from "react-icons/md";
import { useEffect, useContext } from "react";
import { toast } from "react-toastify";
import { ThemeContext } from "../apiContext";
export default function Call({ user }) {
  const getStatusClass = (status) => {
    if (status === "overdue") {
      return "bg-red-400 text-white";
    }

    if (status === "almost due") {
      return "bg-amber-400 text-white";
    }

    return "bg-[#235847] text-white";
  };
  const { timeline, setTimeline } = useContext(ThemeContext);

  useEffect(() => {
    console.log("Updated timeline:", timeline);
  }, [timeline]);

  const handleCallButton = () => {
    console.log("Call button clicked for user:", user);
    setTimeline((prev) => [...prev, { type: "call", user }]);
    toast("Call scheduled!");
  };

  const handleTextButton = () => {
    console.log("Text button clicked for user:", user);
    setTimeline((prev) => [...prev, { type: "message", user }]);
    toast("Text message scheduled!");
  };

  const handleVideoButton = () => {
    console.log("Video button clicked for user:", user);
    setTimeline((prev) => [...prev, { type: "video", user }]);
    toast("Video call scheduled!");
  };

  return (
    <section className=" bg-[#f4f4f4] px-4 py-8 md:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="rounded-md border border-gray-200 bg-white p-6 text-center shadow-sm">
            <img
              src={user.picture}
              className="mx-auto h-20 w-20 rounded-full object-cover"
            />

            <h2 className="mt-4 text-xl font-semibold text-slate-800">
              {user.name}
            </h2>

            <div className="mt-2 flex items-center justify-center gap-2">
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium text-white ${getStatusClass(user.status)}`}
              >
                {user.status}
              </span>
            </div>

            <div className="mt-2 flex items-center justify-center gap-2">
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                {user.tags.join(", ")}
              </span>
            </div>

            <p className="mt-4 text-sm italic text-slate-500">{user.bio}</p>

            <p className="mt-1 text-xs text-slate-400">Preferred: email </p>
          </div>

          <div className="mt-4 space-y-2">
            <button className=" cursor-pointer flex w-full items-center justify-center gap-2 rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm transition hover:bg-gray-50">
              <FaClockRotateLeft size={18} />
              <span>Snooze 2 Weeks</span>
            </button>

            <button className=" cursor-pointer flex w-full items-center justify-center gap-2 rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm transition hover:bg-gray-50">
              <IoArchiveOutline size={18} />
              <span>Archive</span>
            </button>

            <button className=" cursor-pointer flex w-full items-center justify-center gap-2 rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-red-500 shadow-sm transition hover:bg-red-50">
              <MdDelete size={18} />
              <span>Delete</span>
            </button>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-md border border-gray-200 bg-white p-6 text-center shadow-sm">
              <h3 className="text-4xl font-bold text-[#235847]">
                {user.days_since_contact}
              </h3>
              <p className="mt-2 text-sm text-slate-500">Days Since Contact</p>
            </div>

            <div className="rounded-md border border-gray-200 bg-white p-6 text-center shadow-sm">
              <h3 className="text-4xl font-bold text-[#235847]">{user.goal}</h3>
              <p className="mt-2 font-bold text-sm text-slate-500">
                Goal (Days)
              </p>
            </div>

            <div className="rounded-md border border-gray-200 bg-white p-6 text-center shadow-sm">
              <h3 className="text-3xl font-bold text-[#235847]">
                {user.next_due_date}
              </h3>
              <p className="mt-2 font-bold text-sm text-slate-500">Next Due</p>
            </div>
          </div>

          <div className="mt-4 rounded-md border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-base font-medium text-slate-800">
                  Relationship Goal
                </h3>
                <p className="mt-3 text-sm text-slate-500">
                  Connect every{" "}
                  <span className="font-bold text-slate-700">
                    {user.goal} days
                  </span>
                </p>
              </div>

              <button className="cursor-pointer rounded border border-gray-200 px-3 py-1 text-sm text-slate-600 hover:bg-gray-50">
                Edit
              </button>
            </div>
          </div>

          <div className="mt-4 rounded-md border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-medium text-slate-800">
              Quick Check-In
            </h3>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <button
                onClick={handleCallButton}
                className="cursor-pointer flex flex-col items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-4 py-6 text-center transition hover:bg-gray-100 hover:shadow-sm"
              >
                <MdAddCall size={24} className="text-[#235847]" />
                <p className="mt-2 text-sm text-slate-700">Call</p>
              </button>

              <button
                onClick={handleTextButton}
                className="cursor-pointer flex flex-col items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-4 py-6 text-center transition hover:bg-gray-100 hover:shadow-sm"
              >
                <FaRegMessage size={24} className="text-[#235847]" />
                <p className="mt-2 text-sm text-slate-700">Text</p>
              </button>

              <button
                onClick={handleVideoButton}
                className="cursor-pointer flex flex-col items-center justify-center rounded-md border border-gray-200 bg-gray-50 px-4 py-6 text-center transition hover:bg-gray-100 hover:shadow-sm"
              >
                <CiVideoOn size={24} className="text-[#235847]" />
                <p className="mt-2 text-sm text-slate-700">Video</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
