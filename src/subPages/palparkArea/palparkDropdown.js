import React, { useEffect, useState } from 'react'

const PalparkDropdown = ({ palparkList }) => {
    const [currentShow, setCurrentShow] = useState(null);
    const [palparkChoose, setPalparkChoose] = useState(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        setCurrentShow(palparkList[0]);
        const setChooseList = async () => {
            let result = [];
            for (let index = 1; index < palparkList.length; index++) {
                const element = palparkList[index];

            }
        }
    }, [palparkList])
    return (
        <div class="relative inline-block text-left p-20">
            <div>
                <button onClick={e => { setShow(prevSate => !prevSate) }} type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                    {currentShow}
                    <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>

            <div class={` right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none  ${show === false && 'hidden'}`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div class="py-1" role="none">
                    {
                        currentShow ?
                            regionList.map((element, index) =>
                                <a href={`/t-pokedex/regions/${element.name}`} className="text-gray-700 block px-4 py-2 text-sm hover:bg-slate-300 hover:text-white" role="menuitem" tabindex="-1" id="menu-item-0" key={index}>{element.name}</a>
                            )

                            : <LoadingSpinner />
                    }
                </div>
            </div>
        </div>
    )
}

export default PalparkDropdown