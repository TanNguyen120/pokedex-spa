import React from 'react'

const MoveRow = ({ moveData, borderTailWind }) => {
    return (
        <tr>
            <td className={borderTailWind + ' p-3'}>{moveData.move.name}</td>
            <td className={borderTailWind + ' p-3'}>{moveData.version_group_details[0].move_learn_method.name}</td>
            <td className={borderTailWind + ' p-3'}>{moveData.version_group_details[0].level_learned_at}</td>
        </tr>
    )
}

export default MoveRow