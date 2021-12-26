import Navbar from '../../components/Navbar'
import Featured from '../../components/Featured'
import Footer from '../../components/Footer'
import CreateYour from '../../components/CreateYour'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Home(props) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    if (props.noToken) {
      return router.push('login')
    }
    setIsLoading(false)
  }, [])
  return (
    <>
      {!isLoading ? (
        <>
          <Navbar />
          <Featured />
          <CreateYour />
          <CreateYour />
          <CreateYour />
          <Footer />
        </>
      ) : (
        'Loading...'
      )}
    </>
  )
}

export async function getServerSideProps() {
  let data
  const props = {}
  try {
    let response = await fetch('http://192.168.29.130:4000/api/group/profile')
    data = await response.json()
  } catch (error) {
    console.log(error)
  }
  if (data.noToken) {
    props.noToken = true
  }
  return {
    props: props,
  }
}
