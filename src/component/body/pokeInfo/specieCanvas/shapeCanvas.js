import React from 'react';
import { BiShapePolygon } from 'react-icons/bi';
import { GiMicroscope } from 'react-icons/gi'
import LoadingSpinner from '../../../loadingSpiner';
import InfoSmallComponent from '../infoCanvas/inforSmallComponent';

const ShapeCanvas = ({ pokeShape }) => {
    let enAwesomeName = "";
    // find the name with choose language
    if (pokeShape) {
        pokeShape.awesome_names.forEach(element => {
            if (element.language.name === "en") {
                enAwesomeName = element.awesome_name;
            }
        });
    }

    return (
        <>
            {
                pokeShape ?
                    (<InfoSmallComponent tile="Shape" detail_info={pokeShape.name} icon={<BiShapePolygon className='inline' />} />)
                    :
                    <LoadingSpinner />

            }
            <div className="bg-slate-300 rounded-lg text-center font-mono  text-black m-1">
                <h3 className=' font-semibold text-slate-500'>
                    Scientific Name <GiMicroscope className='inline' />
                </h3>
                {
                    pokeShape ?
                        (
                            <div className="bg-white rounded-lg p-1 m-2 font-medium">
                                {enAwesomeName}
                            </div>
                        )
                        :
                        <LoadingSpinner />
                }

            </div>
        </>
    )
}

export default ShapeCanvas