import React from 'react'
import { useTable, useGlobalFilter, useFilters } from 'react-table'

import customBg from '../helpers/customBg'
import prepareData from '../helpers/prepareData'
import { tableHeaders } from '../helpers/tableHeaders'

import Search from './Search'
import FilterData from './Filter'
import ProfileDetails from './ProfileDetails'

export default function TransactionDetails({ response }) {
  const { profiles } = prepareData(response)

  const data = React.useMemo(() => profiles, [])
  const columns = React.useMemo(() => tableHeaders, [])
  const defaultColumn = React.useMemo(() => {
    return {
      Filter: FilterData
    }
  }, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter
  } = useTable({ columns, data, defaultColumn }, useFilters, useGlobalFilter)

  const { globalFilter } = state

  return (
    <>
      <div>
        <span className='flex justify-end mb-2'>
          <Search
            globalFilter={globalFilter}
            setGlobalFilter={setGlobalFilter}
          />
        </span>
        <div className='flex flex-col'>
          <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='py-2 align-middle inline-block sm:px-6 lg:px-8'>
              <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                <table className='table-fix' {...getTableProps()}>
                  <thead className='bg-gray-200'>
                    {headerGroups.map(headerGroup => (
                      <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                          <th
                            scope='col'
                            className='px-6 py-3 align-top text-left text-xs font-bold text-gray-600 uppercase tracking-wider'
                            {...column.getHeaderProps()}
                          >
                            <div>
                              <div>{column.render('Header')}</div>
                              <div className='mt-1'>
                                {column.canFilter
                                  ? column.render('Filter')
                                  : null}
                              </div>
                            </div>
                          </th>
                        ))}
                        <th scope='col' className='px-6 py-3'>
                          <span className='sr-only'>Action</span>
                        </th>
                      </tr>
                    ))}
                  </thead>

                  <tbody className='bg-white' {...getTableBodyProps()}>
                    {rows.map(row => {
                      prepareRow(row)

                      return (
                        <tr {...row.getRowProps()}>
                          {row.cells.map(cell => {
                            const header = cell.column.Header
                            return (
                              <td
                                className={`px-6 py-2 text-sm whitespace-nowrap text-gray-500 ${
                                  header === 'Name' ? 'font-bold' : ''
                                }`}
                                {...cell.getCellProps()}
                              >
                                {header === 'Payment Method' ? (
                                  <span
                                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${customBg(
                                      cell.value
                                    )}}`}
                                  >
                                    {cell.render('Cell')}
                                  </span>
                                ) : (
                                  cell.render('Cell')
                                )}
                              </td>
                            )
                          })}
                          <td className='px-2 py-2'>
                            <ProfileDetails profile={row.original} />
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
