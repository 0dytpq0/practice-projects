import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Title } from '../components'

export default function LoggerTest() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: 'hello', payoad: 'world' })
  }, [dispatch])

  return (
    <section className="mt-4">
      <Title>LoggerTest</Title>
      <div className="mt-4"></div>
    </section>
  )
}
