import Head from "next/head"
import Table from "src/components/Table/Table"
import Header from "src/components/Header/Header"

export default function Home() {
  return (
    <>
      <Head>
        <title>Codemask Task</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Table data={[]} />
    </>
  )
}
