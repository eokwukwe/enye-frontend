import React from 'react'

export default function FilterData({ column }) {
  const { filterValue, setFilter, preFilteredRows, id } = column

  const options = React.useMemo(() => {
    const options = new Set()
    preFilteredRows.forEach(row => {
      options.add(row.values[id])
    })
    return [...options.values()]
  }, [id, preFilteredRows])

  return (
    <select
      value={filterValue}
      onChange={e => {
        setFilter(e.target.value || undefined)
      }}
      className='border border-transparent w-26 text-xs px-2 focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded focus:border-transparent'
    >
      <option value=''>Filter</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}
