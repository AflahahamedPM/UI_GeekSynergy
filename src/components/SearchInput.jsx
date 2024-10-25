import React from 'react'

const SearchInput = ({SearchInput, handleChange, filterCards, error}) => {
  return (
    <div className=' mb-6'>
    <div className='flex sm:justify-end mb-1'>
        <input type="text" name="search" autoComplete='off' placeholder='Search places...' className='sm:px-4 max-sm:px-2 max-sm:text-[8px] max-sm:w-full py-1 border-[1px] rounded-xl border-gray-300 focus:outline-none mr-4' value={SearchInput} onChange={(e)=>handleChange(e)}/>
        <button className='bg-[#db2d2e] text-white rounded-lg text-xs max-sm:text-[8px] border-none focus:outline-none' onClick={()=>filterCards()}>Search</button>
    </div>
    {
        error && (
            <p className=' font-bold text-base '>{error}</p>
        )
    }
    </div>
  )
}

export default SearchInput