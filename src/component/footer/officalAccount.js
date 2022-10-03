import React from 'react'

const OfficalAccount = () => {
    return (
        <div>
            <h3>Official Pokémon Account </h3>
            <ul>
                <li>
                    <a href='https://www.facebook.com/Pokemon/' target='_blank' rel="noreferrer" >
                        <img className="h-10 w-10 mx-6 py-1.5 object-cover inline" src={process.env.PUBLIC_URL + "/faceBookimg.jpg"} alt="face book Logo" />
                    </a>

                    <a href='https://www.youtube.com/channel/UCFctpiB_Hnlk3ejWfHqSm6Q' target='_blank' rel="noreferrer">
                        <img className="h-10 w-10 mx-6 py-1.5 object-cover inline" src={process.env.PUBLIC_URL + "/youtubeLogo.png"} alt="youtube Logo" />
                    </a>

                    <a href='https://twitter.com/Pokemon?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor' target='_blank' rel="noreferrer">
                        <img className="h-10 w-10 mx-6 py-1.5 object-cover inline" src={process.env.PUBLIC_URL + "/twitter-logo.png"} alt="twitter Logo" />
                    </a>

                    <a href='https://www.pokemon.com/us/' target='_blank' rel="noreferrer">
                        <img className="h-10 w-10 mx-6 py-1.5 object-cover inline" src={process.env.PUBLIC_URL + "/pokeWebLogo.png"} alt="web Logo" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default OfficalAccount