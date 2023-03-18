import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import gameToTextColor from '../../../../tool/gameToColorText';
import { snakeToTileCase } from '../../../../tool/upperCaseString';

const LocationRow = ({ location }) => {
    const [method, setMethod] = useState([]);
    const [maxChance, setMaxChance] = useState(0);
    const [version, setVersion] = useState([]);
    const [locationName, setLocationName] = useState("");
    const [encounterCondition, setEncounterCondition] = useState([]);


    // function to handle location data
    const setLocationRowData = async (location) => {
        const s = location.location_area.name;
        const locationNameResult = snakeToTileCase(s);
        setLocationName(locationNameResult);

        // flag for the below loop
        let versionName = [], method = [], maxChance = 0, encounterCondition = [];

        await location.version_details.forEach(async element => {
            versionName.push(element.version.name);
            // find the max value of max chance in the loop
            if (element.max_chance > maxChance) {
                maxChance = parseInt(element.max_chance * (100 / 255))
            };
            await element.encounter_details.forEach(encounterDetail => {
                if (method.indexOf(encounterDetail.method.name) === -1) {
                    method.push(encounterDetail.method.name)
                }
                if (encounterDetail.condition_values.length > 0) {
                    if (encounterCondition.indexOf(encounterDetail.condition_values[0].name) === -1) {
                        encounterCondition.push(encounterDetail.condition_values[0].name)
                    }
                }
            })
        });
        setVersion(versionName);
        setMaxChance(maxChance);
        setEncounterCondition(encounterCondition);
        setMethod(method);
    }

    useEffect(() => {
        setLocationRowData(location);
    }, [location])
    return (
        <div className=' flex flex-row   m-2 p-3 text-center '>
            <div className=' w-24 mx-4'>
                {
                    version.map(element => <div key={element} className={`${gameToTextColor(element)} font-medium`}>{element}</div>)
                }
            </div>
            <div className='w-96 mx-4 '>
                <Link to={`/t-pokedex/area/${locationName}`}> {locationName}</Link>
            </div>
            <div className='w-28  mx-4'>
                <Link to='/t-pokedex/encounter' className=' hover:cursor-pointer hover:scale-125'>
                    {method.map(element => <span key={element}>{element}, </span>)}
                </Link>
            </div>
            <div className='w-96 mx-4'>

                {encounterCondition.map(element => <span key={element}>{element}, </span>)}

            </div>
            <div className='w-40 mx-4'>
                {maxChance}% chance
            </div>

        </div>
    )
}

export default LocationRow