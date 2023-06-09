import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import NavBar from './navBar'
import Footer from './footer'
import PokemonNav from './navBar/pokemonNav'

const Layout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
            <ScrollRestoration />

        </>
    )
}

export default Layout