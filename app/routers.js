// @material-ui/icons
import DashboardIco from "@material-ui/icons/Dashboard";
import DashboardPage from "containers/AdminTheme";
const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: DashboardIco,
    component: DashboardPage,
    layout: ""
  }
];

export default dashboardRoutes;
