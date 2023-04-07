import axios from 'axios'
import React, { useEffect, useState } from 'react'
import damageCategoryIcon from '../../../../tool/damageCategoryIcon'
import typeToColor from '../../../../tool/typeColor'



// this function is for show some icon base on move learn requirement
const requireRefactor = (versionDetails) => {
    switch (versionDetails.move_learn_method.name) {
        case "level-up":
            return (
                <div>
                    <img src={process.env.PUBLIC_URL + "/rareCandy.png"} alt='moveRequirementIcon' className=' inline w-8 h-8' /> lv {versionDetails.level_learned_at}
                </div>)
        case "machine":
            return (
                <>
                    <img src={"https://archives.bulbagarden.net/media/upload/d/d7/Bag_TM_Normal_SwSh_Sprite.png"} className='inline w-8 h-8' alt='moveRequirementIcon' /> corresponding tm
                </>
            )
        case "tutor":
            return (
                <>
                    <img src={"https://forums.pokemmo.com/uploads/monthly_2020_07/POWERPNT_i3luCKJSAl.png.a91413b40333c5b2dbe0233ec9a65514.png"} className='inline w-8 h-8' alt='moveRequirementIcon' />
                    learn from move tutor
                </>
            )
        case "egg":
            return (
                <>
                    <img src={process.env.PUBLIC_URL + "/eggMove.png"} className='inline w-8 h-8' alt='moveRequirementIcon' /> egg move
                </>
            )
        default:
            break;
    }
}






const MoveRow = ({ moveData, borderTailWind }) => {
    // we want to show some icon along side with the move requirement
    const [requireData, setRequireData] = useState("");

    const [moveDetailData, setMoveDetailData] = useState(null);


    // get details data of a move
    const getDetailsData = async (moveData) => {
        const response = await axios.get(moveData.move.url);
        setMoveDetailData(response.data);
    }

    useEffect(() => {
        setRequireData(requireRefactor(moveData.version_group_details[0]));
        getDetailsData(moveData)
    }, [moveData])

    return (
        <tr className=' odd:bg-white even:bg-slate-50'>
            <td className={borderTailWind + ' p-3 capitalize'}>{moveData.move.name}</td>
            <td className={borderTailWind + ' p-3'}>
                {
                    moveDetailData &&
                    <div
                        className={`${typeToColor(moveDetailData.type.name)} rounded-md text-white text-center text-sm font-semibold border border-indigo-600 m-1 px-3 `}>
                        {moveDetailData.type.name}
                    </div>
                }
            </td>
            <td className={borderTailWind + ' p-3'}>
                {
                    moveDetailData &&
                    <div>
                        {damageCategoryIcon(moveDetailData.damage_class.name)} {moveDetailData.damage_class.name}
                    </div>
                }
            </td>
            <td className={borderTailWind + ' p-3'}>
                {
                    moveDetailData &&
                    <div>
                        {moveDetailData.power ? moveDetailData.power : "-"}
                    </div>
                }
            </td>
            <td className={borderTailWind + ' p-3'}>
                {
                    moveDetailData &&
                    <div>
                        {moveDetailData.accuracy ? moveDetailData.accuracy : "-"}%
                    </div>
                }
            </td>
            <td className={borderTailWind + ' p-3'}>
                {
                    moveDetailData &&
                    <div>
                        {moveDetailData.pp ? moveDetailData.pp : "-"}
                    </div>
                }
            </td>
            <td className={borderTailWind + ' p-3'}>{moveData.version_group_details[0].move_learn_method.name}</td>
            <td className={borderTailWind + ' p-3'}>{requireData}</td>
        </tr>
    )
}

export default MoveRow