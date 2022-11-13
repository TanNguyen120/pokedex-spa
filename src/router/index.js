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
import BerryFirmnessLis, { loader as berryFirmnessListLoader } from "../subPages/berryFirmnessList";
import SuperContest, { loader as superContesLoader } from "../subPages/superContest";
import Encounter from "../subPages/encounter";
import GameGenerations from "../subPages/gameGeneration";


const router = createBrowserRouter([
    {
        path: "/t-pokedex",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/t-pokedex/berries",
                element: <BerriesList />,
            },
            {
                path: "/t-pokedex/",
                element: <Body />
            },
            {
                path: "/t-pokedex/berries/:berryName",
                element: <BerryDetails />,
                loader: berryLoader
            },
            {
                path: "/t-pokedex/berries/flavor/:flavorName",
                element: <BerryFlavorList />,
                loader: berryFlavorListLoader
            },
            {
                path: "/t-pokedex/berries/firmness/:firmnessType",
                element: <BerryFirmnessLis />,
                loader: berryFirmnessListLoader
            },
            {
                path: "/t-pokedex/contest",
                element: <Contest />,
                loader: contestLoader
            },
            {

                path: "/t-pokedex/super-contest",
                element: <SuperContest />,
                loader: superContesLoader
            },
            {
                path: "/t-pokedex/encounter",
                element: <Encounter />,
            },
            {
                path: "/t-pokedex/generations",
                element: <GameGenerations />
            }
        ]
    },

])

export default router