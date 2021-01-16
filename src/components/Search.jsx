import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'

export default function Search({ globalFilter, setGlobalFilter }) {
  const [value, setValue] = useState(globalFilter)

  const handleDebounce = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 500)

  return (
    <>
      <input
        type='text'
        className='border border-transparent text-xs py-1 px-2 focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded focus:border-transparent'
        value={value || ''}
        onChange={e => {
          setValue(e.target.value)
          handleDebounce(e.target.value)
        }}
        placeholder='Search'
      />
    </>
  )
}
