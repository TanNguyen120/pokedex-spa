import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const ItemName = ({ itemNames }) => {
    const webLanguage = useSelector(state => state.webSettings.language)
    const [names, setNames] = useState(null)

    useEffect(() => {
        const setNamesEffect = async () => {
            let resultNames = {
                engName: "",
                japName: "",
                japHiName: "",
                koName: "",
                fraName: "",
                mainName: "",
            };
            await itemNames.forEach(element => {
                if (element.language.name === webLanguage) {
                    resultNames.mainName = element.name
                }
                switch (element.language.name) {
                    case "en":
                        resultNames.engName = element.name
                        break;
                    case "ja":
                        resultNames.japHiName = element.name
                        break;
                    case "ja-HrKt":
                        resultNames.japName = element.name
                        break;
                    case "fr":
                        resultNames.fraName = element.name
                        break;
                    case "ko":
                        resultNames.koName = element.name
                        break;
                    default:
                        break;
                }
            });
            setNames(resultNames);

        }
        setNamesEffect();
    }, [itemNames, webLanguage])


    return (
        <div className=' rounded-lg lg:col-span-5 md:col-span-4 col-span-2  border-4 border-slate-500 bg-slate-100 grid grid-cols-1 m-2 p-2'>
            {
                names && (<>
                    <div className=' font-semibold text-lg'>
                        {names.mainName}
                    </div>
                    <div className=' grid grid-cols-5 mt-8'>
                        <div>
                            {names.engName}
                        </div>
                        <div>
                            {names.japHiName}
                        </div>
                        <div>
                            {names.koName}
                        </div>
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

export default ItemName