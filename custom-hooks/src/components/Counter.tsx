import useCounter from '../hooks/useCounter'

const Counter = () => {
  const { count, setCount } = useCounter()
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>plus</button>
    </div>
  )
}

export default Counter
