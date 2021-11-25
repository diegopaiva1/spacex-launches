import Link from 'next/link';
import Layout from '../../components/layout';
import { Accordion, Breadcrumb } from 'react-bootstrap';
import LaunchInfo from '../../components/launchinfo';
import _ from 'lodash'

export default function Past(props) {
  const launchesByYear = props.launchesByYear;

  return (
    <Layout title="SpaceX past launches">
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link href="/">
            Launches
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Past</Breadcrumb.Item>
      </Breadcrumb>
      <hr/>
      <h1>Past launches</h1>
        <Accordion className="my-5">
          {Object.keys(launchesByYear).map((year) =>
          <div className="my-5">
            <h2>{ year }</h2>
            <hr/>
            {launchesByYear[year].map((launch) =>
              <LaunchInfo key={launch.id} launch={launch}></LaunchInfo>
            )}
          </div>
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
  const response = await fetch('http://localhost:3001/launches/past');
  const data = await response.json();

  let launchesByYear =  _.groupBy(data, function(launch) {
    return new Date(launch.date_utc).getUTCFullYear();
  });

  return {
    props: {
      launchesByYear
    }
  };
}