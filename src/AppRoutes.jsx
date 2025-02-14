import { createBrowserRouter } from "react-router-dom";
import { MainSection } from "./components/MainSection";
import { BodySection } from "./components/BodySection";
import { ModelSection } from "./components/ModelSection";
import SupportSection from "./components/SupportSection";
import { MobileAdSection } from "./components/MobileAdSection";
import Layout from "./Layout";
import { FoundersMessage } from "./components/FoundersMessage";
import LicenseSection from "./components/LicenseSection";
import PrivacyPolicy from "./components/PrivacyPolicy";
import NotFound from "./components/NotFound";

const AppRoutes = createBrowserRouter([
  // Public routes
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <div>
            <MainSection />
            <BodySection />
            <ModelSection />
            <SupportSection />
            <MobileAdSection />
          </div>
        ),
      },
    ],
  },

  {
    path: "/about",
    element: <Layout />,
    children: [
      {
        path: "/about",
        element: (
          <div>
            <BodySection />
            <FoundersMessage />
          </div>
        ),
      },
    ],
  },
  {
    path: "/help",
    element: <Layout />,
    children: [
      {
        path: "/help",
        element: <SupportSection />,
      },
    ],
  },
  {
    path: "/license",
    element: <Layout />,
    children: [
      {
        path: "/license",
        element: <LicenseSection />,
      },
    ],
  },

  {
    path: "/privacy-policy",
    element: <Layout />,
    children: [
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
    ],
  },
  {
    path: "*",
    element: <Layout />,
    children: [
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default AppRoutes;
