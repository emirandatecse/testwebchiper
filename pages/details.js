import Head from 'next/head'
import PrincipalLayout from '../layouts/PrincipalLayout/PrincipalLayout'


export default function Home() {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="favicon.ico"/>
        <title>Bikes Details</title>
      </Head>
      <PrincipalLayout pagina="details"/>

    </div>
  )
}
