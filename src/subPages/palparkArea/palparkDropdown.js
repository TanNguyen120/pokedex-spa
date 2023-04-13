import React, { useEffect, useState } from 'react'
import LoadingSpinner from '../../component/loadingSpiner';

const PalparkDropdown = ({ palparkList }) => {
    const [currentShow, setCurrentShow] = useState(palparkList[0]);
    const [palparkChoose, setPalparkChoose] = useState(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        // if element is mount set the current show to the 1st element of palpark list

        // filter out the current show for the drop down section
        const setChooseList = async () => {
            const result = await palparkList.map((element) => {
                if (element.name !== currentShow.name) {
                    return element
                }
            })
            console.log(JSON.stringify(result));
            setPalparkChoose(result)
        }
        setChooseList();
    }, [palparkList, currentShow])

    const hideDropdown = () => {
        setShow(false);
    }

    return (
        // <div class="relative  text-left p-20 capitalize" >
        //     <div>
        //         <button onClick={e => { setShow(prevSate => !prevSate) }} type="button" class=" capitalize inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-200 " id="menu-button" aria-expanded="true" aria-haspopup="true">
        //             {currentShow && currentShow.name}
        //             <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        //                 <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
        //             </svg>
        //         </button>
        //     </div>

        //     <div class={` relative right-0 z-5 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none  ${show === false && 'hidden'}`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
        //         <div class="py-1" role="none" onMouseLeave={e => { hideDropdown() }}>
        //             {
        //                 palparkChoose ?
        //                     palparkChoose.map((element, index) =>
        //                         element && <a href={`/t-pokedex/regions/${element.name}`} className="text-gray-700 block px-4 py-2 text-sm hover:bg-slate-300 hover:text-white" role="menuitem" tabindex="-1" id="menu-item-0" key={index}>{element.name}</a>
        //                     )

        //                     : <LoadingSpinner />
        //             }
        //         </div>
        //     </div>
        // </div>
        <div class="relative inline-block text-left capitalize m-5 ml-9">
            <div>
                <button type="button" class="capitalize inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-200" id="menu-button" aria-expanded="true" aria-haspopup="true" onClick={e => { setShow(prevSate => !prevSate) }}>
                    {currentShow && currentShow.name}
                    <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>

            {/* <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
            From: "transform opacity-0 scale-95"
            To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
            From: "transform opacity-100 scale-100"
            To: "transform opacity-0 scale-95"
  --> */}
            <div class={`absolute right-0 z-10 mt-1 lg:w-96 md:w-56 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${show === false && 'hidden'}`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div class="py-1" role="none">
                    {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                    {
                        palparkChoose ?
                            palparkChoose.map((element, index) =>
                                element && <div className="text-gray-700 block px-4 py-2 text-sm hover:bg-slate-300 hover:text-white" role="menuitem" tabindex="-1" id="menu-item-0" key={index}>{element.name}</div>
                            )

                            : <LoadingSpinner />
                    }
                </div>
            </div>
        </div>
    )
}

export default PalparkDropdown