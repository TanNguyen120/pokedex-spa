import React, { useEffect, useState } from 'react';
import { IconContext } from "react-icons";
import { BsArrowRight } from 'react-icons/bs';
import { filterDummyCondition, smoothCondition, smoothTriggerName } from '../../../../tool/smoothEvolutionCondition';

const ConditionArrow = ({ condition }) => {
    // this function use to beautifully display multiple evolution condition 
    const conditionSlice = async (condition) => {
        const tempCondition = [...condition];
        let result = "";
        if (tempCondition.length > 1) {
            // the last condition not have ; at the end
            const lastElement = tempCondition.pop();
            const lTriggerName = smoothTriggerName(lastElement.trigger.name);
            const lCondition = smoothCondition(filterDummyCondition(lastElement));
            const lastSentence = `${lTriggerName} ${lCondition}`;
            for await (const element of tempCondition) {
                const triggerName = smoothTriggerName(element.trigger.name);
                const condition = smoothCondition(filterDummyCondition(element));
                result = result + `${triggerName}${condition} ; or `;
            }
            // merge the last sentence 
            result += lastSentence;
        } else {
            const triggerName = smoothTriggerName(condition[0].trigger.name);
            const sCondition = smoothCondition(filterDummyCondition(condition[0]));
            result = result + `${triggerName}${sCondition}`;
        }
        return result;
    }



    const [stateCondition, setStateCondition] = useState("default");

    useEffect(() => {
        const asyncSetCondition = async (condition) => {
            const result = await conditionSlice(condition);
            setStateCondition(result);
        }
        asyncSetCondition(condition);
    }, [condition])

    return (
        <div className="flex flex-col  text-center items-center md:mt-16">
            <div className='flex flex-col text-center items-center'>
                <div className='flex text-center'>
                    <p className="font-semibold text-base">( {stateCondition} )</p>
                </div>
                {/* <img className=" w-9 h-16 md:w-18 md:h-44 -rotate-90" src="/arrowYellow.png" alt="poke sprite" /> */}
                <div className='text-center lg:rotate-0 rotate-90'>
                    <IconContext.Provider value={{ color: 'navy', size: 98 }}>
                        <BsArrowRight />
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    )
}

export default ConditionArrow