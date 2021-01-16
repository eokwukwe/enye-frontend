// import DataTable from './components/DataTable'
import useFetch from './api/request'
import TransactionDetails from './components/TransactionDetails'

function App() {
  const { response } = useFetch('https://api.enye.tech/v1/challenge/records')

  return (
    <div className='min-h-screen bg-gray-100'>
      <div className='bg-indigo-500 fixed w-full py-3 text-white text-2xl font-normal z-50'>
        <h1 className='container mx-auto lg:px-28 uppercase'>Profile List</h1>
      </div>
      <div className='container mx-auto pt-20 flex justify-center'>
        {!response ? (
          <div>Loading...</div>
        ) : (
          <TransactionDetails response={response} />
        )}
      </div>
    </div>
  )
}

export default App
