// @material-ui/icons
import DashboardIco from "@material-ui/icons/Dashboard";
import DashboardPage from "containers/AdminTheme";
import ContactIco from "@material-ui/icons/AccountBox";
import ContactList from "containers/ContactList";
const ClientRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: DashboardIco,
    component: DashboardPage,
    layout: ""
  }, {
    path: "/contact-list",
    name: "Contact List",
    icon: ContactIco,
    component: ContactList,
    layout: ""
  }
];

export default ClientRoutes;
