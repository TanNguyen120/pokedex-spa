import React, { useEffect, useState } from 'react'
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
                maxChance = element.max_chance
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
        <div className=' grid grid-cols-5 md:grid-cols-8 text-left m-2 p-3'>
            <div>
                {
                    version.map(element => <div> {element}</div>)
                }
            </div>
            <div className='col-span-2'>
                {locationName}
            </div>
            <div className=''>
                {method.map(element => <span>{element}</span>)}
            </div>
            <div className=''>
                {encounterCondition.map(element => <span>{element}</span>)}
            </div>
            <div className=''>
                {maxChance}% chance
            </div>

        </div>
    )
}

export default LocationRow