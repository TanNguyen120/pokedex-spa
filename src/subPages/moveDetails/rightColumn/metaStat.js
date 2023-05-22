import axios from 'axios';
import React, { useEffect, useState } from 'react'

const MetaStat = ({ metaStat }) => {
    const [alimentDescription, setAlimentDescription] = useState();
    const cssRow = ' text-slate-600 p-3 hover:cursor-help'
    useEffect(() => {
        const getData = async () => {
            const resData = (await (axios.get(metaStat.category.url))).data
            setAlimentDescription(resData.descriptions[0].description);
        }

        getData()
    }, [metaStat]);
    // Just a small function to avoid repeat code
    const handleNullDisplay = (displayData) => {
        console.log(displayData)
        return displayData ? displayData : '0';
    }
    return (
        <div className=' rounded-lg bg-slate-100 m-4 p-2 grid grid-cols-1'>
            <div className=' text-left text-slate-500' title='Metadata about this move'>
                Meta Stat:
            </div>
            <div className=' grid grid-cols-1 bg-white rounded-lg p-2 text-left divide-y '>
                <div title='The status ailment this move inflicts on its target.' className={cssRow}>Ailment: {handleNullDisplay(metaStat.ailment.name)}</div>
                <div title='The likelihood this attack will cause an ailment.' className={cssRow}>Chance: {handleNullDisplay(metaStat.ailment.chance)}</div>
                <div title='The category of move this move falls under, e.g. damage or ailment.' className={cssRow}>Category: {handleNullDisplay(metaStat.category.name)} ( {alimentDescription} )</div>
                <div title='Critical hit rate bonus.' className={cssRow}>Crit_rate: {handleNullDisplay(metaStat.crit_rate)}</div>
                <div title='HP drain (if positive) or Recoil damage (if negative), in percent of damage done.' className={cssRow}>Drain: {handleNullDisplay(metaStat.drain)} </div>
                <div title='The likelihood this attack will cause the target Pokémon to flinch.' className={cssRow}>Flinch Chance : {handleNullDisplay(metaStat.flinch_chance)} </div>
                <div title={`The amount of hp gained by the attacking Pokemon, in percent of it's maximum HP`} className={cssRow}>Healing: {handleNullDisplay(metaStat.healing)} </div>
                <div title='The maximum number of times this move hits. Null if it always only hits once.' className={cssRow}>Max Hits: {handleNullDisplay(metaStat.max_hits)} </div>
                <div title='The maximum number of turns this move continues to take effect. Null if it always only lasts one turn.' className={cssRow}>Max Turns: {handleNullDisplay(metaStat.drain)} </div>
                <div title='The minimum number of times this move hits. Null if it always only hits once' className={cssRow}>Min Hits: {handleNullDisplay(metaStat.min_hits)}</div>
                <div title='The minimum number of turns this move continues to take effect. Null if it always only lasts one turn.' className={cssRow}>Min Turns: {handleNullDisplay(metaStat.min_turns)} </div>
                <div title='The likelihood this attack will cause a stat change in the target Pokémon.' className={cssRow}>Stat Change: {handleNullDisplay(metaStat.stat_change)} </div>
            </div>
        </div>
    )
}

export default MetaStat