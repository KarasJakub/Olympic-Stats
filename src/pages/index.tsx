import Head from "next/head"
import DataTable from "@/components/DataTable"
// import ButtonAppBar from "@/components/AppBar"

export default function Home() {
  return (
    <>
      <Head>
        <title>Test</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DataTable />
      {/* <ButtonAppBar /> */}
    </>
  )
}