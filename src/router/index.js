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
import PokeDexDetails, { loader as pokedexDetailsLoader } from "../subPages/pokedexDetails";
import VersionGroupList, { loader as versionGroupLoader } from "../subPages/versionGroup.js/list";
import VersionGroupDetails, { loader as versionGroupDetailsLoader } from "../subPages/versionGroup.js/versionGroupDetails";
import ItemList, { loader as itemsListLoader } from "../subPages/items/itemsList";
import ItemsDetails, { loader as itemDetailsLoader } from "../subPages/items/itemDetails";
import ItemCategory, { loader as itemCategoryLoader } from "../subPages/itemCategory";
import ItemAttribute, { loader as itemAttributeLoader } from "../subPages/itemAttribute";
import AttributeDetails, { loader as attributeLoader } from "../subPages/itemAttribute/attributeDetails";
import ItemCategoryDetails, { loader as categoryDetailsLoader } from "../subPages/itemCategory/itemCategoryDetails";
import ItemWithFlingMove, { loader as itemWithFlingLoader } from "../subPages/itemWithFlingMove";
import ItemPocket, { loader as itemPocketLoader } from "../subPages/itemPocket";
import LocationIndex, { loader as locationLoader } from "../subPages/location";
import Regions, { loader as RegionsLoader } from "../subPages/regions";
import LocationDetails, { loader as locationDetailsLoader } from "../subPages/locationDetails";
import AreaDetails, { loader as areaLoader } from "../subPages/areaDetails";
import PalparkArea from "../subPages/palparkArea";
import MachineList from "../subPages/machineList";
import MoveList from "../subPages/move";

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
                errorElement: <ErrorPage />,

            },
            {
                path: "/t-pokedex/pokedexs",
                element: <PokeDexList />,
                errorElement: <ErrorPage />,
                loader: pokedexListLoader
            },
            {
                path: "/t-pokedex/pokedexs/:pokedex",
                element: <PokeDexDetails />,
                errorElement: <ErrorPage />,
                loader: pokedexDetailsLoader
            },
            {
                path: "/t-pokedex/version-group/",
                element: <VersionGroupList />,
                errorElement: <ErrorPage />,
                loader: versionGroupLoader
            },
            {
                path: "/t-pokedex/version-group/:versionName",
                element: <VersionGroupDetails />,
                errorElement: <ErrorPage />,
                loader: versionGroupDetailsLoader
            },
            {
                path: "/t-pokedex/items-list",
                element: <ItemList />,
                errorElement: <ErrorPage />,
                loader: itemsListLoader
            },
            {
                path: "/t-pokedex/item/:itemName",
                element: <ItemsDetails />,
                errorElement: <ErrorPage />,
                loader: itemDetailsLoader
            },
            {
                path: "/t-pokedex/item-category",
                element: <ItemCategory />,
                errorElement: <ErrorPage />,
                loader: itemCategoryLoader

            },
            {
                path: "/t-pokedex/item-attribute",
                element: <ItemAttribute />,
                errorElement: <ErrorPage />,
                loader: itemAttributeLoader
            },
            {
                path: "/t-pokedex/item-attribute/:attributeName",
                element: <AttributeDetails />,
                errorElement: <ErrorPage />,
                loader: attributeLoader
            },
            {
                path: "/t-pokedex/item-category/:categoryName",
                element: <ItemCategoryDetails />,
                errorElement: <ErrorPage />,
                loader: categoryDetailsLoader
            },
            {
                path: "/t-pokedex/item-fling/",
                element: <ItemWithFlingMove />,
                errorElement: <ErrorPage />,
                loader: itemWithFlingLoader
            },
            {
                path: "/t-pokedex/item-pocket/",
                element: <ItemPocket />,
                errorElement: <ErrorPage />,
                loader: itemPocketLoader
            },
            {
                path: "/t-pokedex/location/",
                element: <LocationIndex />,
                errorElement: <ErrorPage />,
                loader: locationLoader
            },
            {
                path: "/t-pokedex/regions/:regionName",
                element: <Regions />,
                errorElement: <ErrorPage />,
                loader: RegionsLoader
            },
            {
                path: "/t-pokedex/location/:locationName",
                element: <LocationDetails />,
                errorElement: <ErrorPage />,
                loader: locationDetailsLoader
            },
            {
                path: "/t-pokedex/area/:areaName",
                element: <AreaDetails />,
                errorElement: <ErrorPage />,
                loader: areaLoader
            },
            {
                path: "/t-pokedex/palpark_area/",
                element: <PalparkArea />,
                errorElement: <ErrorPage />,
            },
            {
                path: "/t-pokedex/machine/",
                element: <MachineList />,
                errorElement: <ErrorPage />,
            },
            {
                path: "/t-pokedex/move/",
                element: <MoveList />,
                errorElement: <ErrorPage />,
            },

        ]
    },

])

export default router