/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import {
  useTable,
  useGlobalFilter,
  useFilters,
  usePagination
} from 'react-table'

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
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    prepareRow,
    state,
    setGlobalFilter
  } = useTable(
    { columns, data, defaultColumn, initialState: { pageSize: 20 } },
    useFilters,
    useGlobalFilter,
    usePagination
  )

  const { globalFilter, pageIndex } = state

  return (
      <>
        <div className='flex flex-col'>
          <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='py-2 align-middle inline-block sm:px-6 lg:px-8'>
              <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                <table
                  className='min-w-full divide-y divide-gray-200'
                  {...getTableProps()}
                >
                  <thead className='bg-gray-200'>
                    {headerGroups.map(headerGroup => (
                      <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                          <th
                            scope='col'
                            className='px-4 py-1 align-top text-left text-xs font-medium text-gray-600 uppercase tracking-wider'
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
                        <th
                          scope='col'
                          className='pr-6 py-3 align-top text-left text-xs font-bold text-gray-600 uppercase tracking-wider'
                        >
                          <span className=''>
                            <Search
                              globalFilter={globalFilter}
                              setGlobalFilter={setGlobalFilter}
                            />
                          </span>
                        </th>
                      </tr>
                    ))}
                  </thead>

                  <tbody className='bg-white' {...getTableBodyProps()}>
                    {page.map(row => {
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


              <div className='flex mt-3 justify-end pr-5'>
                <div>
                  <span>Page</span>{' '}
                  <span className='text-gray-700 font-bold'>
                    {pageIndex + 1}
                  </span>{' '}
                  of{' '}
                  <span className='text-gray-700 font-bold'>
                    {pageOptions.length}
                  </span>
                </div>
                <button
                  className={`flex rounded w-16 text-white font-semibold px-2 text-xs py-1 mx-5 ${
                    canPreviousPage
                      ? 'bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-1 active:bg-blue-900'
                      : 'bg-blue-300 cursor-not-allowed'
                  }`}
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                >
                  <svg
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='fill-current w-4 h-4 mr-1'
                  >
                    <path
                      fillRule='evenodd'
                      d='M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z'
                      clipRule='evenodd'
                    />
                  </svg>

                  <span> Prev</span>
                </button>
                <button
                  className={`flex rounded w-16 text-white font-semibold px-2 text-xs py-1 ${
                    canNextPage
                      ? 'bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-1 active:bg-blue-900'
                      : 'bg-blue-300 cursor-not-allowed'
                  }`}
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                >
                  <span className='mr-1'> Next</span>

                  <svg
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='fill-current w-4 h-4'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z'
                      clipRule='evenodd'
                    />
                    <path
                      fillRule='evenodd'
                      d='M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z'
                      clipRule='evenodd'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}
