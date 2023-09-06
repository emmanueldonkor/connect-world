import { getSession } from "next-auth/react";
import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Login from "../components/Login";
import RightSidebar from "../components/RightSideBar";
import LeftSideBar from "../components/LeftSideBar";


export default function Home({ session }) {
  if (!session) return <Login />;
  return (
    <div style={{ fontFamily: 'Roboto Mono, monospace' }}>
      <Head>
        <title>Facebook Clone</title>
      </Head>
      <Header />
      <main className="flex bg-gray-100">
        <LeftSideBar />
        <Feed />
        <RightSidebar />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
