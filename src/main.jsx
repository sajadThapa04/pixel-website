import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import AboutUs from "./components/Headers/About/About.jsx";
import ContactForm from "./components/Contact/Contact.jsx";
import Homepage from "./Hompage.jsx";
import Services from "./components/Headers/Services/Services.jsx";
import PixelHero from "./components/Headers/PixelHero/PixelHero.jsx";
import Portfolio from "./components/Headers/Portfolio/Portfolio.jsx";
import ThankYouPage from "./components/Thankyou-page/Thankyou.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <PixelHero /> },
      {
        path: "home",
        element: <Homepage />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <ContactForm />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path:"thank-you",
        element:<ThankYouPage/>
      }
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
