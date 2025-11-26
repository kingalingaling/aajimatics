import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import BespokeSolutions from "./pages/BespokeSolutions";
import CyberInsurance from "./pages/CyberInsurance";
import GovTech from "./pages/GovTech";
import Cybersecurity from "./pages/CyberSecurity";
import DigitalTransformation from "./pages/DigitalTransformation";
import DataAndAI from "./pages/DataAndAI";
import ContactUs from "./pages/Contact";
import OurPartners from "./pages/OurPartners";
import Clients from "./pages/Clients";
import Brands from "./pages/Brands";
import DistributedLedger from "./pages/DistributedLedger";
import Insurance from "./pages/Insurance";
import Microfinance from "./pages/Microfinance";
import Pension from "./pages/Pension";
import FinancialServices from "./pages/FinancialServices";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/bespoke-solutions",
    element: <BespokeSolutions />, 
  },
  {
    path: "/cyber-insurance",
    element: <CyberInsurance />, 
  },
  {
    path: "/gov-tech",
    element: <GovTech />, 
  },
  {
    path: "/cybersecurity",
    element: <Cybersecurity />, 
  },
  {
    path: "/digital-transformation",
    element: <DigitalTransformation />, 
  },
  {
    path: "/data-and-ai",
    element: <DataAndAI />, 
  },
  {
    path: "/contact",
    element: <ContactUs />, 
  },
  {
    path: "/our-partners",
    element: <OurPartners />, 
  },
  {
    path: "/clientele",
    element: <Clients />, 
  },
  {
    path: "/sbus-and-brands",
    element: <Brands />, 
  },
  {
    path: "/distributed-ledger-technology",
    element: <DistributedLedger />, 
  },
  {
    path: "/insurance",
    element: <Insurance />, 
  },
  {
    path: "/micro-finance-banks",
    element: <Microfinance />, 
  },
  {
    path: "/pension",
    element: <Pension />, 
  },
  {
    path: "/tech-for-financial-services",
    element: <FinancialServices />, 
  },
]);
