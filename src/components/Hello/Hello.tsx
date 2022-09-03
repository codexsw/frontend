import { fetcher } from 'lib/fetcher'
import { FC, useCallback, useState } from 'react'
import useSWR from 'swr'
import { HelloApiResponse } from './api'
import { HelloView } from './HelloView'

export const Hello: FC = () => {
  const [query, setQuery] = useState(false)
  const { data } = useSWR<HelloApiResponse>(
    query ? '/api/hello' : null,
    fetcher
  )

  const handleSetQuery = useCallback(() => {
    setQuery(true)
  }, [])

  return <HelloView name={data && data.name} onQuery={handleSetQuery} />
}
