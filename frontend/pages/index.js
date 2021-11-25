import Layout from '../components/layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout title="SpaceX launches" description="Index page for accessing next, upcoming, latest and past launches">
      <h1>🚀 Launches</h1>
      <hr/>
      <ul>
        <li>
          <Link href="/launches/next"><a>Next</a></Link>
        </li>
        <li>
          <Link href="/launches/upcoming"><a>Upcoming</a></Link>
        </li>
        <li>
          <Link href="/launches/latest"><a>Latest</a></Link>
        </li>
        <li>
          <Link href="/launches/past"><a>Past</a></Link>
        </li>
      </ul>
    </Layout>
  )
}
