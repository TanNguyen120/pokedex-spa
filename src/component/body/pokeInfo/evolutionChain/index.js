import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setEvolutionChain } from '../../../../reduxSlicer/evolutionChain';


const EvolutionChain = ({ evoChainProb }) => {
    const findPokeFlag = useSelector((state) => state.findPokeInfoFlag);
    const evoChain = useSelector((state) => state.evolutionChain)
    const dispatch = useDispatch();
    // the ascnycrom axios function
    const getEvolutionChain = async (url) => {
        const res = await axios.get(url);
        dispatch(setEvolutionChain(res.data));
    }
    useEffect(() => {
        getEvolutionChain(evoChainProb);
    }, [evoChainProb]);
    return (
        <div> {JSON.stringify(evoChain)}</div>
    )
}

export default EvolutionChain