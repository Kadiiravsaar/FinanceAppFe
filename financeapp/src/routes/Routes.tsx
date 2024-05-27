import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/homePage/HomePage";
import SearchPage from "../pages/searchPage/SearchPage";
import CompanyPage from "../pages/companyPage/CompanyPage";
import CompanyProfile from "../components/companyProfile/CompanyProfile";
import IncomeStatement from "../components/incomeStatement/IncomeStatement";
import DesignGuide from "../pages/designGuide/DesignGuide";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "search", element: <SearchPage /> },
      { path: "design-guide", element: <DesignGuide /> },
      {
        path: "company/:ticker",
        element: <CompanyPage />,
        children: [
          { path: "company-profile", element: <CompanyProfile /> },
          { path: "income-statement", element: <IncomeStatement /> },
        ]
      },
    ],
  },
]);

export default router



