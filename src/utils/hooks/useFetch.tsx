import React, { useEffect, useState } from 'react'

const useFetch = (url: RequestInfo, options: RequestInit | undefined) => {
  const [response, setResponse] = useState<any>(null)
  const [error, setError] = useState<any>(null)

  const fetchData = async () => {
    try {
      let request: Response = await fetch(url, options)
      let jsonResponse: any = await request.json()

      setResponse(jsonResponse)
    } catch (error: unknown) {
      setError(error)
    }
  }

  useEffect(() => {
    fetchData();
  })

  return { response, error }
}

export default useFetch