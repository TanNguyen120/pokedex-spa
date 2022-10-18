import {
    createBrowserRouter,
    Route,
} from "react-router-dom";
import Body from "../component/body";
import Layout from "../component/layout";
import BerriesList from "../subPages/berryList";
import ErrorPage from "../subPages/errorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/berries",
                element: <BerriesList />,
            },
            {
                path: "/",
                element: <Body />
            }
        ]
    },

])

export default router