import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Programs } from "./pages/Programs";
import { CleftBottleFeeding } from "./pages/CleftBottleFeeding";
import { FamilySupport } from "./pages/FamilySupport";
import { AmbassadorProgram } from "./pages/AmbassadorProgram";
import { GetSupport } from "./pages/GetSupport";
import { GetInvolved } from "./pages/GetInvolved";
import { CorporatePartnerships } from "./pages/CorporatePartnerships";
import { Donate } from "./pages/Donate";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "programs", Component: Programs },
      { path: "programs/cleft-bottle-feeding", Component: CleftBottleFeeding },
      { path: "programs/family-support", Component: FamilySupport },
      { path: "programs/ambassador", Component: AmbassadorProgram },
      { path: "get-support", Component: GetSupport },
      { path: "get-involved", Component: GetInvolved },
      { path: "corporate-partnerships", Component: CorporatePartnerships },
      { path: "donate", Component: Donate },
      { path: "contact", Component: Contact },
    ],
  },
]);
