import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../apiContext";
export default function UserSection() {
  const { user, setUser } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("/user.json");
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500">
         
        </div>
      </div>
    );
  }

  const getStatusClass = (status) => {
    if (status === "overdue") {
      return "bg-red-400 text-white";
    }
    if (status === "almost due") {
      return "bg-amber-400 text-white";
    }
    return "bg-[#235847] text-white";
  };
  const handleRedirectDataUser = (user) => {
    console.log("user", user);
    navigate(`/user/${user.id}`, { state: { user } });
  };

  return (
    <>
      <section className=" bg-[#f5f5f5] px-6 py-8 md:px-10">
        <div className="cursor-pointer mx-auto max-w-7xl">
          <h2 className="mb-6 text-2xl font-bold text-slate-800">
            Your Friends
          </h2>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {user.map((userData) => (
              <div
                onClick={() => handleRedirectDataUser(userData)}
                key={userData.id}
                className="rounded-xl bg-white p-6 text-center shadow-sm"
              >
                <img
                  src={userData.picture}
                  alt={userData.name}
                  className="mx-auto h-20 w-20 rounded-full object-cover"
                />

                <h3 className="mt-4 text-lg font-semibold text-slate-800">
                  {userData.name}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {userData.days_since_contact}d ago
                </p>

                <div className="mt-3 flex flex-wrap justify-center gap-2">
                  {userData.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-3">
                  <span
                    className={`cursor-pointer inline-block rounded-full px-3 py-1 text-sm font-medium ${getStatusClass(
                      userData.status,
                    )}`}
                  >
                    {userData.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
