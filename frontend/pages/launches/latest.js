import Link from 'next/link';
import Layout from '../../components/layout';
import { Accordion, Breadcrumb } from 'react-bootstrap';
import LaunchInfo from '../../components/launchinfo';

export default function Latest(props) {
  const launches = [props.data];

  return (
    <Layout title="SpaceX Latest launches">
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link href="/">
            Launches
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Latest</Breadcrumb.Item>
      </Breadcrumb>
      <hr/>
      <h1>Latest launch</h1>
        <Accordion className="my-5">
          {launches.map((launch, index) =>
            <LaunchInfo key={index} launch={launch}></LaunchInfo>
          )}
        </Accordion>
      <h4>
        <Link href="/">
          <a><i className="bi bi-arrow-left"></i> Back to launches</a>
        </Link>
      </h4>
    </Layout>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3001/launches/latest');
  const data = await response.json();

  return {
    props: {
      data
    }
  };
}
