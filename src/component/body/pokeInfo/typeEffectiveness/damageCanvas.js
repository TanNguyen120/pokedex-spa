import React, { useEffect, useState } from 'react';
import DamageCategory from './damageCategory';


const DamageCanvas = ({ damageVector }) => {
    const [neutralDamage, setNeutralDamage] = useState([]);
    const [weakDamage, setWeakDamage] = useState([]);
    const [strongDamage, setStrongDamage] = useState([]);
    const [immuneDamage, setImmuneDamage] = useState([]);

    const mapReduceDamageVector = (vector) => {
        let neutral = [], strong = [], weak = [], immuneDamage = [];
        vector.forEach(element => {
            element.effect === 0 ? immuneDamage.push(element) :
                element.effect === 1 ? neutral.push(element) :
                    element.effect < 1 ? weak.push(element) :
                        strong.push(element);
        });
        return [neutral, weak, strong, immuneDamage];
    }

    useEffect(() => {
        const mapReduceResult = mapReduceDamageVector(damageVector);
        setNeutralDamage(mapReduceResult[0]);
        setWeakDamage(mapReduceResult[1]);
        setStrongDamage(mapReduceResult[2]);
        setImmuneDamage(mapReduceResult[3]);
    }, [damageVector])

    return (
        <div className=' bg-slate-200 rounded-lg flex flex-col'>
            <DamageCategory tile='Normal Damage' damageCategory={neutralDamage} />
            <DamageCategory tile='Less Damage' damageCategory={weakDamage} />
            {
                immuneDamage.length > 0 && <DamageCategory tile='No Damage' damageCategory={immuneDamage} />
            }
            <DamageCategory tile='More Damage:' damageCategory={strongDamage} />
        </div>
    )
}

export default DamageCanvas