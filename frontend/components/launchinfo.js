import Image from 'next/image';
import { Alert, Accordion } from 'react-bootstrap';

export default function LaunchInfo(props) {
  const launch = props.launch;

  return (
    <Accordion.Item key={ launch.id } eventKey={ launch.id }>
      <Accordion.Header>{ launch.tbd ? 'To be determined' : new Date(launch.date_utc).toUTCString() }</Accordion.Header>
      <Accordion.Body>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Image
            priority
            src={ launch.links.patch.small || '/images/no-preview.jpg' }
            className={ launch.links.patch.small == null ? 'round' : '' }
            height={ 300 }
            width={ 300 }
            alt={ launch.name }
            />
        </div>
        <div>
          <div className="entry text-center">
            <h2 className="my-3">{ launch.name }</h2>
            <p>{ launch.details || 'No description available.'}</p>
          </div>
          <hr/>
          <div className="additional-info my-4 text-center">
            <p><i className="bi bi-key"></i> <strong>ID</strong>: { launch.id || 'NA' }</p>
            <p><i className="bi bi-people"></i> <strong>Crew size</strong>: { launch.crew.length }</p>
            <p><i className="bi bi-box"></i> <strong>Payloads</strong>: { launch.payloads.length }</p>
            <p><i className="bi bi-ticket-perferated"></i> <strong>Flight number</strong>: { launch.flight_number || 'NA' }</p>
          </div>
            {launch.failures.length > 0 &&
              <Alert variant="danger" className="my-4">
                <Alert.Heading className="text-center"><u>Flight failed!</u></Alert.Heading>
                  {launch.failures.map((failure, index) =>
                    <div key={index} className="text-align: left">
                      <ul>
                        <li><strong>Altitude</strong>: { failure.altitude || 'Unknown' } km</li>
                        <li><strong>Seconds elapsed</strong>: { failure.time }</li>
                        <li><strong>Reason</strong>: { failure.reason.charAt(0).toUpperCase() + failure.reason.slice(1) }</li>
                      </ul>
                    <hr/>
                    </div>
                  )}
              </Alert>}
            {launch.success &&
              <Alert variant="success" className="my-4">
                <Alert.Heading className="text-center"><u>Flight succeeded!</u></Alert.Heading>
              </Alert>}
        </div>
      </Accordion.Body>
    </Accordion.Item>
  )
}
