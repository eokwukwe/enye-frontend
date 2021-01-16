import React from 'react'
import { useAsyncDebounce } from 'react-table'

export default function Search({ filter, setFilter }) {
  return (
    <>
      <span className='capitalize mr-2'>search:</span>
      <input
        type='text'
        className='border border-transparent text-sm px-2 focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded focus:border-transparent'
        value={filter || ''}
        onChange={e => setFilter(e.target.value)}
        placeholder='Search'
      />
    </>
  )
}
