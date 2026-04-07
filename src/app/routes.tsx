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
import { Contact } from "./pages/Contact";
import { OurStory } from "./pages/OurStory";
import { CleftBottleSupportGeorgia } from "./pages/CleftBottleSupportGeorgia";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "our-story", Component: OurStory },
      { path: "programs", Component: Programs },
      { path: "programs/cleft-bottle-feeding", Component: CleftBottleFeeding },
      { path: "programs/family-support", Component: FamilySupport },
      { path: "programs/ambassador", Component: AmbassadorProgram },
      { path: "cleft-bottle-support-georgia", Component: CleftBottleSupportGeorgia },
      { path: "get-support", Component: GetSupport },
      { path: "get-involved", Component: GetInvolved },
      { path: "corporate-partnerships", Component: CorporatePartnerships },
      { path: "contact", Component: Contact },
    ],
  },
]);
