import Navbar from '../components/Navbar'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import CreateYour from '../components/CreateYour'
import { useSelector } from 'react-redux'
import Error from '../components/Error'

export default function Home() {
  const error = useSelector((state) => state.error.currentError)
  return (
    <>
      <div className='mb-14'>
        <Navbar />
        <Featured />
        <CreateYour />
        <CreateYour />
        <CreateYour />
      </div>
      <Footer />
      {error && <Error />}
    </>
  )
}
