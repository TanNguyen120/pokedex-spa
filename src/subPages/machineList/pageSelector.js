import React, { useState } from 'react'

const PageChooser = ({ currentPage, setCurrentPage }) => {
  const [inputPage, setInputPage] = useState(currentPage)
  return (
    <form className="w-full max-w-sm">
      <div className="flex items-center border-b border-teal-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text" placeholder={`page: ${currentPage}`}
          aria-label="Page:"
          value={inputPage}
          onChange={e => { setInputPage(e.target.value) }}
        />
        <button
          className="flex-shrink-0 bg-slate-500 hover:bg-slate-700 border-slate-500 hover:border-slate-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="button"
          onClick={e => { setCurrentPage(inputPage) }}
        >
          To Page
        </button>
      </div>
    </form>
  )
}

export default PageChooser