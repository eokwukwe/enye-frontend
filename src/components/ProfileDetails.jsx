import React from 'react'

export default function ProfileDetails({ profile }) {
  const [showModal, setShowModal] = React.useState(false)

  function formatDate(dateValue) {
    const parsedDate = new Date(dateValue)

    const dateOptions = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }

    const date = parsedDate.toLocaleDateString('en-NG', dateOptions)
    const time = parsedDate.toLocaleTimeString('en-NG', { hour12: true })

    return `${date} ${time}`
  }

  return (
    <>
      <button
        className='text-xs uppercase text-blue-600 hover:bg-blue-100 px-3 rounded py-1 focus:outline-none focus:ring-1 active:bg-blue-100'
        type='button'
        style={{ transition: 'all .15s ease' }}
        onClick={() => setShowModal(true)}
      >
        Details
      </button>
      {showModal ? (
        <>
          <div
            className='justify-center items-center flex overflow-x-hidiven overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'
            onClick={() => setShowModal(false)}
          >
            <div className='relative my-6 mx-auto w-full md:w-8/12 lg:w-6/12 xl:w-4/12'>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                {/*header*/}
                <div className='flex items-start justify-between px-5 py-1 bg-gray-200 border-b border-solid border-gray-300 rounded-t-lg'>
                  <h3 className='text-lg font-semibold'>Profile Details</h3>
                  <button
                    className='p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none hover:bg-gray-300'
                    onClick={() => setShowModal(false)}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      className='fill-current w-5 h-5 text-gray-500'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidivh='2'
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </button>
                </div>
                {/*body*/}
                <div className='relative pb-2 flex-auto overflow-y-auto'>
                  <div className='bg-gray-50 py-2 grid grid-cols-2 px-6'>
                    <div className='text-sm font-semibold text-gray-800'>
                      Name
                    </div>
                    <div className='mt-1 text-sm text-gray-500'>
                      {profile.Name}
                    </div>
                  </div>

                  <div className='bg-white py-2 grid grid-cols-2 px-6'>
                    <div className='text-sm font-semibold text-gray-800'>
                      Username
                    </div>
                    <div className='mt-1 text-sm text-gray-500'>
                      {profile.UserName}
                    </div>
                  </div>

                  <div className='bg-gray-50 py-2 grid grid-cols-2 px-6'>
                    <div className='text-sm font-semibold text-gray-800'>
                      Gender
                    </div>
                    <div className='mt-1 text-sm text-gray-500'>
                      {profile.Gender}
                    </div>
                  </div>

                  <div className='bg-white py-2 grid grid-cols-2 px-6'>
                    <div className='text-sm font-semibold text-gray-800'>
                      Phone
                    </div>
                    <div className='mt-1 text-sm text-gray-500'>
                      {profile.PhoneNumber}
                    </div>
                  </div>

                  <div className='bg-gray-50 py-2 grid grid-cols-2 px-6'>
                    <div className='text-sm font-semibold text-gray-800'>
                      Email
                    </div>
                    <div className='mt-1 text-sm text-gray-500'>
                      {profile.Email}
                    </div>
                  </div>

                  <div className='bg-white py-2 grid grid-cols-2 px-6'>
                    <div className='text-sm font-semibold text-gray-800'>
                      Payment Method
                    </div>
                    <div className='mt-1 text-sm text-gray-500'>
                      {profile.PaymentMethod}
                    </div>
                  </div>

                  <div className='bg-gray-50 py-2 grid grid-cols-2 px-6'>
                    <div className='text-sm font-semibold text-gray-800'>
                      Credit Card Number
                    </div>
                    <div className='mt-1 text-sm text-gray-500'>
                      {profile.CreditCardNumber}
                    </div>
                  </div>

                  <div className='bg-white py-2 grid grid-cols-2 px-6'>
                    <div className='text-sm font-semibold text-gray-800'>
                      Credit Card Type
                    </div>
                    <div className='mt-1 text-sm text-gray-500'>
                      {profile.CreditCardType}
                    </div>
                  </div>

                  <div className='bg-gray-50 py-2 grid grid-cols-2 px-6'>
                    <div className='text-sm font-semibold text-gray-800'>
                      Domain Name
                    </div>
                    <div className='mt-1 text-sm text-gray-500'>
                      {profile.DomainName}
                    </div>
                  </div>

                  <div className='bg-white py-2 grid grid-cols-2 px-6'>
                    <div className='text-sm font-semibold text-gray-800'>
                      Mac Address
                    </div>
                    <div className='mt-1 text-sm text-gray-500'>
                      {profile.MacAddress}
                    </div>
                  </div>

                  <div className='bg-gray-50 py-2 grid grid-cols-2 px-6'>
                    <div className='text-sm font-semibold text-gray-800'>
                      URL
                    </div>
                    <div className='mt-1 text-sm text-gray-500'>
                      {profile.URL}
                    </div>
                  </div>

                  <div className='bg-white py-2 grid grid-cols-2 px-6'>
                    <div className='text-sm font-semibold text-gray-800'>
                      Longitude
                    </div>
                    <div className='mt-1 text-sm text-gray-500'>
                      {profile.Longitude}
                    </div>
                  </div>

                  <div className='bg-gray-50 py-2 grid grid-cols-2 px-6'>
                    <div className='text-sm font-semibold text-gray-800'>
                      Latitude
                    </div>
                    <div className='mt-1 text-sm text-gray-500'>
                      {profile.Latitude}
                    </div>
                  </div>

                  <div className='bg-white py-2 grid grid-cols-2 px-6'>
                    <div className='text-sm font-semibold text-gray-800'>
                      Last Login
                    </div>
                    <div className='mt-1 text-sm text-gray-500'>
                      {formatDate(profile.LastLogin)}
                    </div>
                  </div>

                  {/* <div class='bg-gray-50 px-4 py-5 grid grid-cols-2'>
                      <div class='text-sm font-medium text-gray-500'>
                        Full name
                      </div>
                      <div class='text-sm text-gray-900'>
                        Margot Foster
                      </div>
                    </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  )
}
