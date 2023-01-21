import React, { useEffect, useState } from 'react'
import LoadingSpinner from '../loadingSpiner'


const PageBtn = ({ pageNumber, setCurrentPage, currentPage }) => {
    const [stateBg, setStateBg] = useState("bg-slate-100");
    useEffect(() => {
        currentPage === pageNumber && setStateBg("bg-slate-400")
    }, [currentPage, pageNumber])
    return (
        <div className={`rounded-lg ${stateBg} border border-slate-600 hover:cursor-pointer hover:bg-slate-400 hover:scale-125`} onClick={e => { setCurrentPage(pageNumber) }}>
            {pageNumber}
        </div>
    )
}



const PageSelector = ({ numberOfPage, currentPage, setCurrentPage }) => {
    const [visiblePages, setVisiblePages] = useState(null)
    useEffect(() => {
        // some condition to render pages when in some first page and last page
        if (currentPage < 4) {
            setVisiblePages([1, 2, 3, 4])
        } else if (currentPage > numberOfPage - 2) {
            setVisiblePages([numberOfPage - 3, numberOfPage - 2, numberOfPage - 1, numberOfPage])
        } else {
            setVisiblePages([currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2])
        }
    }, [currentPage, numberOfPage])
    return (
        <div className=' grid grid-cols-6'>
            {
                visiblePages ? visiblePages.map((element, index) => <PageBtn pageNumber={element} key={index} setCurrentPage={setCurrentPage} currentPage={currentPage} />) : <LoadingSpinner />
            }
        </div>
    )
}

export default PageSelector