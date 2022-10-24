import React, { useEffect, useState } from 'react'

const BerryName = ({ berryName }) => {
    const [names, setNames] = useState(null)

    useEffect(() => {
        const setNamesEffect = async (berryNames) => {
            let resultNames = {
                engName: "",
                japName: "",
                fraName: "",
            };
            await berryName.forEach(element => {
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
                    default:
                        break;
                }
            });
            setNames(resultNames)
        }
        setNamesEffect(berryName)
    }, [berryName])


    return (
        <div className=' rounded-lg md:col-span-3 col-span-2  border-4 border-slate-500 bg-slate-200 grid grid-cols-1 m-2 p-2'>
            {
                names && (<>
                    <div className=' font-semibold text-lg'>
                        {names.engName}
                    </div>
                    <div className=' grid grid-cols-2'>
                        <div>
                            {names.japName}
                        </div>
                        <div>
                            {names.fraName}
                        </div>
                    </div>
                </>)
            }

        </div>
    )
}

export default BerryName