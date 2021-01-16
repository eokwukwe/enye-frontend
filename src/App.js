// import DataTable from './components/DataTable'
import useFetch from './api/request'
import TransactionDetails from './components/TransactionDetails'

function App() {
  const { response } = useFetch('https://api.enye.tech/v1/challenge/records')

  return (
    <div className='min-h-screen bg-gray-100 py-5'>
      <div className='container mx-auto  flex justify-center'>
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
