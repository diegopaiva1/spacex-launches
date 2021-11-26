import Layout from '../components/layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout title="Launches - SpaceX" description="Index page for accessing next, upcoming, latest and past launches">
      <h1>🚀 Launches</h1>
      <hr/>
      <ul>
        <li>
          <Link href="/next"><a>Next</a></Link>
        </li>
        <li>
          <Link href="/upcoming"><a>Upcoming</a></Link>
        </li>
        <li>
          <Link href="/latest"><a>Latest</a></Link>
        </li>
        <li>
          <Link href="/past"><a>Past</a></Link>
        </li>
      </ul>
    </Layout>
  )
}
