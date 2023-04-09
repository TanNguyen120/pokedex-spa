import React, { useEffect, useState } from 'react'

const GameGenName = ({ gameGenName }) => {
    const [names, setNames] = useState(null)

    useEffect(() => {
        const setNamesEffect = async (gameGenName) => {
            let resultNames = {
                engName: "",
                japName: "",
                fraName: "",
                esName: "",
                jaHrName: "",
            };
            await gameGenName.forEach(element => {
                switch (element.language.name) {
                    case "en":
                        resultNames.engName = element.name
                        break;
                    case "ja":
                        resultNames.japName = element.name
                        break;
                    case "fr":
                        resultNames.fraName = element.name
                        break;
                    case "es":
                        resultNames.esName = element.name
                        break;
                    case "ja-Hrkt":
                        resultNames.jaHrName = element.name
                        break;
                    default:
                        break;
                }
            });
            setNames(resultNames)
        }
        setNamesEffect(gameGenName)
    }, [gameGenName])


    return (
        <div className=' rounded-lg md:col-span-3 col-span-2  border-4 border-slate-500 bg-slate-200 grid grid-cols-1 m-2 p-2'>
            {
                names && (<>
                    <div className=' font-semibold text-lg text-slate-800'>
                        {names.engName}
                    </div>
                    <div className=' grid grid-cols-4 text-slate-500 my-4'>
                        <div>
                            {names.japName}
                        </div>
                        <div>
                            {names.jaHrName}
                        </div>
                        <div>
                            {names.fraName}
                        </div>
                        <div>
                            {names.esName}
                        </div>
                    </div>
                </>)
            }

        </div>
    )
}

export default GameGenName