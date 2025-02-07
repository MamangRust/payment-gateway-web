import CompanyProfile from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <CompanyProfile />,
    },
]);

export default router;