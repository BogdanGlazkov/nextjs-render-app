import Link from "next/link";

function Home() {
  return (
    <>
      <h1>Next.js pre-rendering</h1>
      <Link href="/users">
        <p>Users</p>
      </Link>
      <Link href="/posts">
        <p>Posts</p>
      </Link>
    </>
  );
}

export default Home;
