import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import LaptopServices from "./pages/laptop/LaptopServices";
import LaptopSpares from "./pages/laptop/LaptopSpares";
import LaptopSales from "./pages/laptop/LaptopSales";
import Counter from "./components/Counter";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                index: true,
                element: <LandingPage />
            },
            {
                path: "laptop-services",
                element: <LaptopServices />
            },
            {
                path: "laptop-spares",
                element: <LaptopSpares />
            },
            {
                path: "laptop-sales",
                element: <LaptopSales />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "counter",
                element: <Counter />
            },
            {
                path: "*",
                element: <NotFound />
            },
        ]
    }
]);

export default router;