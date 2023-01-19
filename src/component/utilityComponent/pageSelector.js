import React, { useEffect, useState } from 'react'
import LoadingSpinner from '../loadingSpiner'


const PageBtn = ({ pageNumber }) => {
    return (
        <div className=' rounded-lg bg-slate-100 border border-'>
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
            setVisiblePages([numberOfPage - 2, numberOfPage - 1, numberOfPage, numberOfPage + 1, numberOfPage + 2])
        }
    }, [currentPage, numberOfPage])
    return (
        <div>
            {
                visiblePages ? visiblePages.map(element => <PageBtn pageNumber={element} key={element} />) : <LoadingSpinner />
            }
        </div>
    )
}

export default PageSelector