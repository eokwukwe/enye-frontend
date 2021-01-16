import React from 'react'
import { useTable } from 'react-table'

import customBg from '../helpers/customBg'
import prepareData from '../helpers/prepareData'
import { tableHeaders } from '../helpers/tableHeaders'

export default function TransactionDetails({ response }) {
  const { profiles } = prepareData(response)

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns: tableHeaders, data: profiles })

  return (
    <>
      <div className='flex flex-col'>
        <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='py-2 align-middle inline-block sm:px-6 lg:px-8'>
            <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
              <table className='table-auto' {...getTableProps()}>
                <thead className='bg-gray-200'>
                  {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map(column => (
                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-xs font-bold text-gray-600 uppercase tracking-wider'
                          {...column.getHeaderProps()}
                        >
                          {column.render('Header')}
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

                          console.log('>>>>>', cell.value)

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
                        <td className='px-2 py-2 whitespace-nowrap text-sm font-medium '>
                          <button className='text-blue-600 hover:bg-blue-100 px-3 rounded py-1 focus:outline-none focus:ring-1 active:bg-blue-100'>
                            Details
                          </button>
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
    </>
  )
}