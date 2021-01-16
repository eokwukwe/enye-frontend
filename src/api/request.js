/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'

function useFetch(url, options = {}) {
  const [error, setError] = React.useState(null)
  const [response, setResponse] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)

      try {
        const res = await fetch(url, options)

        const data = await res.json()

        setResponse(data)

        setIsLoading(false)
      } catch (error) {
        setError(error)
      }
    }

    fetchData()
  }, [])

  return { response, error, isLoading }
}

export default useFetch
