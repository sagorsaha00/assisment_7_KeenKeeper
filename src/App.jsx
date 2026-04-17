import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { ThemeContext } from "./apiContext.js";
import router from "./router/route.jsx";
import { ToastContainer } from "react-toastify";

export default function Root() {
  const [timeline, setTimeline] = useState([]);
  const [user, setUser] = useState([]);
  return (
    <ThemeContext.Provider value={{ timeline, setTimeline, user, setUser }}>
      <RouterProvider router={router} />
      <ToastContainer theme="dark" position="top-center" />
    </ThemeContext.Provider>
  );
}
