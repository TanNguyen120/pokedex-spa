import {
    createBrowserRouter,
} from "react-router-dom";
import Body from "../component/body";
import Layout from "../component/layout";
import BerryDetails, { loader as berryLoader } from "../subPages/berryDetails";
import Contest, { loader as contestLoader } from "../subPages/contest"
import BerriesList from "../subPages/berryList";
import ErrorPage from "../subPages/errorPage";
import BerryFlavorList, { loader as berryFlavorListLoader } from "../subPages/berryFlavorList";


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
                path: "/t-pokedex",
                element: <Body />
            },
            {
                path: "/berries/:berryName",
                element: <BerryDetails />,
                loader: berryLoader
            },
            {
                path: "/berries/flavor/:flavorName",
                element: <BerryFlavorList />,
                loader: berryFlavorListLoader
            },
            {
                path: "/contest",
                element: <Contest />,
                loader: contestLoader
            }
        ]
    },

])

export default router