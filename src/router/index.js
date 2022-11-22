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
import GameGenerations, { loader as gameGenerationLoader } from "../subPages/gameGeneration";
import GameGenDetails, { loader as gameGenLoader } from "../subPages/gameGenDetails";
import PokemonDetails from "../subPages/pokemonDetails";
import PokeDexList, { loader as pokedexListLoader } from "../subPages/pokedex";


const router = createBrowserRouter([
    {
        path: "/t-pokedex",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/t-pokedex/berries",
                element: <BerriesList />,
                errorElement: <ErrorPage />,
            },
            {
                path: "/t-pokedex/",
                element: <Body />,
                errorElement: <ErrorPage />,
            },
            {
                path: "/t-pokedex/berries/:berryName",
                element: <BerryDetails />,
                loader: berryLoader,
                errorElement: <ErrorPage />,
            },
            {
                path: "/t-pokedex/berries/flavor/:flavorName",
                element: <BerryFlavorList />,
                loader: berryFlavorListLoader,
                errorElement: <ErrorPage />,
            },
            {
                path: "/t-pokedex/berries/firmness/:firmnessType",
                element: <BerryFirmnessLis />,
                loader: berryFirmnessListLoader,
                errorElement: <ErrorPage />,
            },
            {
                path: "/t-pokedex/contest",
                element: <Contest />,
                loader: contestLoader,
                errorElement: <ErrorPage />,
            },
            {

                path: "/t-pokedex/super-contest",
                element: <SuperContest />,
                loader: superContesLoader,
                errorElement: <ErrorPage />,
            },
            {
                path: "/t-pokedex/encounter",
                element: <Encounter />,
                errorElement: <ErrorPage />,
            },
            {
                path: "/t-pokedex/generations",
                element: <GameGenerations />,
                loader: gameGenerationLoader,
                errorElement: <ErrorPage />,
            },
            {
                path: "/t-pokedex/generations/:gameGen",
                element: <GameGenDetails />,
                loader: gameGenLoader,
                errorElement: <ErrorPage />
            },
            {

                path: "/t-pokedex/generations/:gameGen",
                element: <GameGenDetails />,
                // loader: gameGenLoader,
                errorElement: <ErrorPage />
            },
            {
                path: "/t-pokedex/pokemon/:pokemonName",
                element: <PokemonDetails />,
                errorElement: <ErrorPage />
            },
            {
                path: "/t-pokedex/pokedex",
                element: <PokeDexList />,
                errorElement: <ErrorPage />,
                loader: pokedexListLoader
            },
        ]
    },

])

export default router