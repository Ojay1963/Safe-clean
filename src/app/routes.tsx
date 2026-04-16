import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Industrial } from "./pages/Industrial";
import { Laundry } from "./pages/Laundry";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "industrial", Component: Industrial },
      { path: "laundry", Component: Laundry },
      { path: "contact", Component: Contact },
    ],
  },
]);