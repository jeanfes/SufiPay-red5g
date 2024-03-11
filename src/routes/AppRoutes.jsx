import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Layout from "../layout/Layout";
import Login from "../pages/public/login/Login";
import Dashboard from "../pages/private/dashboard/Dashboard";

const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/login" />,
    },
    {
        path: "/login",
        element: (
            <Login />
        ),
    },
    {
        element: <Layout />,
        children: [
            {
                path: "/dashboard",
                element: (
                    <Dashboard />
                ),
            },
        ],
    },
]);

export default AppRoutes;
