import React from 'react';
import { IconContext } from "react-icons";
import { BsArrowRight } from 'react-icons/bs';
import { filterDummyCondition, smoothCondition, smoothTriggerName } from '../../../../tool/smoothEvolutionCondition';

const ConditionArrow = ({ condition }) => {

    return (
        <div className="grid grid-cols-1 place-items-center text-center">
            <div className='grid grid-cols-1 text-center'>
                {
                    condition.map((element, index) => {
                        const triggerName = smoothTriggerName(element.trigger.name);
                        const condition = smoothCondition(filterDummyCondition(element));
                        return <span key={index} className="font-semibold text-base"> ( {triggerName} {condition} )  </span>
                    })
                }
                {/* <img className=" w-9 h-16 md:w-18 md:h-44 -rotate-90" src="/arrowYellow.png" alt="poke sprite" /> */}
                <div className='text-center'>
                    <IconContext.Provider value={{ color: 'navy', size: 112 }}>
                        <BsArrowRight />
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    )
}

export default ConditionArrow