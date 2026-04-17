import { createBrowserRouter } from "react-router-dom";
import Appcopy from "../allComponent/appcopy";
import UserData from "../allComponent/userDetails";
import Timeline from "../allComponent/timeline";
import PieCharts from "../allComponent/Pichart";
import NotFound from "../allComponent/notFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Appcopy />,
  },
  {
    path: "/user/:id",
    element: <UserData />,
  },
  {
    path: "/timeline",
    element: <Timeline />,
  },
  {
    path: "/paichart",
    element: <PieCharts />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
