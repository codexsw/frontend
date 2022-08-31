import type { NextPage } from 'next'
import { useCallback, useState } from 'react'

const Home: NextPage = () => {
  const [count, setCount] = useState(0)

  const handleClick = useCallback(() => {
    setCount(count + 1)
  }, [count])

  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2 text-red-200 bg-blue-50'>
      Hello {count}
      <button onClick={handleClick}>+1</button>
    </div>
  )
}

export default Home
