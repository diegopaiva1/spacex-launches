import Link from 'next/link';
import Layout from '../../components/layout';
import { Accordion, Breadcrumb } from 'react-bootstrap';
import LaunchInfo from '../../components/launchinfo';

export default function Next(props) {
  const launches = [props.data];

  return (
    <Layout title="SpaceX next launch">
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link href="/">
            Launches
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Next</Breadcrumb.Item>
      </Breadcrumb>
      <hr/>
      <h1>Next launch</h1>
        <Accordion className="my-5" defaultActiveKey="0">
          {launches.map((launch) =>
            <LaunchInfo key={launch.id} launch={launch}></LaunchInfo>
          )}
        </Accordion>
      <h4>
        <Link href="/">
          <a><i class="bi bi-arrow-left"></i> Back to launches</a>
        </Link>
      </h4>
    </Layout>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3001/launches/next');
  const data = await response.json();

  return {
    props: {
      data
    }
  };
}
