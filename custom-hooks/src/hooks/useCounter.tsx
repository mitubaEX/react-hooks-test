import { useEffect, useState } from 'react'

const useCounter = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(1)
  }, [])

  return { count, setCount }
}

export default useCounter;
