import Layout from '../components/layout';
import LaunchInfo from '../components/launchinfo';
import Link from 'next/link';
import { Accordion, Breadcrumb } from 'react-bootstrap';
import _ from 'lodash';

export default function Launch(props) {
  let when = props.params.launch;
  when = when.charAt(0).toUpperCase() + when.slice(1);

  let title = (when == 'Next' || when == 'Latest') ? (when + ' launch') : (when + ' launches');

  return (
    <Layout title={ title + ' - SpaceX' } description={ title }>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link href="/">
            Home
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{ when }</Breadcrumb.Item>
      </Breadcrumb>
      <hr/>
      <h1>{ title }</h1>
      <Accordion className="my-5">
        {Object.keys(props.launchesByYear).map((year) =>
          <div key={year} className="my-5">
            <h2>{ year }</h2>
            <hr/>
            {props.launchesByYear[year].map((launch) =>
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

export async function getStaticPaths() {
  const paths = [
    {
      params: {
        launch: 'next'
      }
    },
    {
      params: {
        launch: 'latest'
      }
    },
    {
      params: {
        launch: 'upcoming'
      }
    },
    {
      params: {
        launch: 'past'
      }
    },
  ];

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const response = await fetch('http://localhost:3001/launches/' + params.launch);
  let launches = await response.json();

  // Next and latest launches are a single object. We only work with arrays.
  if (!(launches instanceof Array))
    launches = [launches];

  let launchesByYear =  _.groupBy(launches, function(launch) {
    return new Date(launch.date_utc).getUTCFullYear();
  });

  return {
    props: {
      params,
      launchesByYear
    }
  };
}
