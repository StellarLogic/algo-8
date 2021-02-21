import Home from "./containers/Home/Home";
import Chart from "./containers/Chart/Chart";

const routes = [
  {
    path: "/dashboard",
    exact: true,
    name: "Dashboard",
    component: Home,
  },
  {
    path: "/dashboard/chart/:id",
    exact: true,
    name: "Chart",
    component: Chart,
  },
];

export default routes;
