import dynamic from 'next/dynamic'

export const icon = (iName) => {
  return dynamic(() => import(`@iconscout/react-unicons/icons/uil-${iName}`), {
    ssr: false,
  })
}
